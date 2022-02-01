import styled, { css } from "styled-components";

export const Container = styled.button`
  background: ${(props) => {
    if (props.name === "secundary") {
      return "#fff";
    } else {
      return props.theme.colors.secundary;
    }
  }};
  color: ${(props) => {
    if (props.name === "secundary") {
      return props.theme.colors.secundary;
    } else {
      return "#fff";
    }
  }};
  border: 1px solid ${(props) => props.theme.colors.secundary};
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  padding: 16px;
  width: 100px;
  margin-top: 1rem;
`;
