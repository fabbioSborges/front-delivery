import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Conteudo = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: column;
  background: #fff;
  padding: 0rem 5.37rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5.37rem;
  margin-bottom: 2rem;
  img {
    max-width: 20%;
  }
  b {
    color: ${(props) => props.theme.colors.secundary};
  }
`;

export const TextoForm = styled.div`
  h2 {
    font-family: "Open Sans", sans-serif;
    margin-bottom: 1.75rem;
    font-size: 29px;
    line-height: 50px;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #000000;
    /* margin-bottom: 3rem; */
  }
  form {
    display: grid;
    gap: 0.5rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    width: 100%;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

/* export const Input = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  padding-left: 1rem;
  padding-top: 0.5rem;
  p {
    margin-bottom: 0;
  }
  input {
    background: none;
    border: none;
    padding: 0.25rem 0;
    width: 100%;
    color: ${(props) => props.theme.colors.text};
  }
`; */

export const ButtonGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  width: 50%;
`;

/* export const Button = styled.button`
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
`; */

export const Conteudo2 = styled.div`
  margin-top: 5.37rem;
  width: 100%;
  display: inline-block;
  justify-content: center;
  ul {
    width: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    li {
      padding: 0.5rem;

      a {
        text-decoration: none;
        color: #000;
      }
      a:hover {
        border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      }
    }
  }
  img {
    max-height: 500px; /* Máximo da altura da imagem */
    min-height: auto; /* Mínimo da altura, por padrão “auto” */
  }
`;
