import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.focus &&
    css`
      border-left: 4px solid ${(props) => props.theme.colors.primary};
    `}
  /* border-left: 4px solid ${(props) => props.theme.colors.primary}; */
  padding-left: 1rem;
  padding-top: 0.5rem;
  input {
    background: none;
    border: none;
    padding: 0.25rem 0;
    width: 100%;
    color: ${(props) => props.theme.colors.text};
  }
`;
