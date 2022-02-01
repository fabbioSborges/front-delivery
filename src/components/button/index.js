import React from "react";

import { Container } from "./styles";

function Button({ children, name, ...rest }) {
  return (
    <Container name={name} {...rest}>
      {" "}
      {children}{" "}
    </Container>
  );
}

export default Button;
