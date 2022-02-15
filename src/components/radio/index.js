import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Container, Label, Error } from "./styles";
const Radio = ({ name, options, ...rest }) => {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs) => {
        return refs.find((ref) => ref.checked)?.value || "";
      },

      /*  setValue: (refs, id) => {
        const inputRef = refs.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      }, */
      /*  clearValue: (refs) => {
        const inputRef = refs.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      }, */
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <>
      <Container>
        {options.map((option, index) => (
          <Label key={index}>
            <input
              ref={(ref) => ref && (inputRefs.current[index] = ref)}
              id={option.id}
              type="radio"
              name={name}
              /* defaultChecked={defaultValue.includes(option.id)} */
              value={option.value}
              {...rest}
            />
            {option.label}
          </Label>
        ))}
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Radio;
