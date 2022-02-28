import styled from "styled-components";

export const Container = styled.div``;

export const Conteudo = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Pedidos = styled.div`
  flex: 1;
  margin-right: 120px;
  h1 {
    font-size: 36px;
  }
  p {
    margin-top: 8px;
    color: ${(props) => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    font-weight: 400;

    span {
      display: flex;
      align-items: center;
    }
    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`;

export const ProximoPedidos = styled.div`
  margin-top: 64px;
  > strong {
    color: ${(props) => props.theme.colors.secundary};
    font-size: 20px;
    font-weight: 400;
  }
  div {
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    z-index: -1;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      top: 10%;
      content: "";
      background: #ff9000;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }
    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.section`
  margin-top: 48px;
  > strong {
    color: ${(props) => props.theme.colors.secundary};

    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Agendamento = styled.div`
  align-items: center;
  display: flex;
  & + div {
    margin-top: 16px;
  }
  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.secundary};

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendario = styled.div``;
