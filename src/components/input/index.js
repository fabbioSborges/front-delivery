import { useField } from "@unform/core";
import { useEffect, useRef, useState } from "react";
import { Container, Error } from "./styles";

const Input = ({ name, label, ...rest }) => {
  const inputRef = useRef(null); //useRef retorna um objeto ref mutável, no qual a propriedade .current é inicializada para o argumento passado
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [focus, setFocus] = useState(false);

  //o componente precisa fazer algo apenas depois da renderização
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container focus={focus} isError={error}>
        <p>{label}</p>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={inputRef}
          {...rest}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Input;
