import { useState } from "react";
import { Container } from "./styles";

const Input = ({ label, ...rest }) => {
  const [focus, setFocus] = useState(true);
  return (
    <Container focus={focus}>
      <p>{label}</p>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
