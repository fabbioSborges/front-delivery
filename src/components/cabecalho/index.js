import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/clip-message-sent 1.png";

import { Container, Conteudo, Perfil } from "./styles";

import { useAutenticacao } from "../../hooks/autenticacao";
import { FiPower } from "react-icons/fi";

function Cabecalho() {
  const { logoff } = useAutenticacao();
  return (
    <Container>
      <Conteudo>
        <nav>
          <Link to="/dashboard">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </nav>
        <Perfil>
          <div>
            <span>Bem Vindo</span>
            <strong> Usuario</strong>
          </div>
        </Perfil>
        <button type="button" onClick={logoff}>
          <FiPower />
        </button>
      </Conteudo>
    </Container>
  );
}

export default Cabecalho;
