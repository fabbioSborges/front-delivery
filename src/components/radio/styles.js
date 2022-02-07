import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  /* height: ${(props) => props.height + "px"}; */
  height: 40px;
  align-items: center;
  & > label:not(:last-child) {
    margin-right: 15px;
  }
  /*   padding-left: 10px;
  display: flex;
  flex-direction: column; */
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  input {
    margin-right: 5px;
  }
`;

export const Error = styled.div`
  color: ${(props) => props.theme.colors.secundary};
`;
