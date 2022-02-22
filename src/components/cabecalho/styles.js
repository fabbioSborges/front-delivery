import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 0;
  background: ${(props) => props.theme.colors.primary};
`;

export const Conteudo = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: space-between;

  nav {
    display: flex;
    align-items: center;

    a {
      > img {
        border-radius: 20%;
        background: ${(props) => props.theme.colors.background};
        height: 50px;
      }
      color: ${(props) => props.theme.colors.background};
    }
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
    svg {
      color: ${(props) => props.theme.colors.background};
      width: 30px;
      height: 30px;
    }
  }
`;

export const Perfil = styled.aside`
  display: flex;
  align-items: center;
  margin-left: 80px;
  font-size: 24px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }
  span {
    color: ${(props) => props.theme.colors.background};
  }
  strong {
    color: ${(props) => props.theme.colors.secundary};
  }
`;
