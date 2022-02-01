import Input from "../../components/input";
import Button from "../../components/button";
import {
  Container,
  Conteudo,
  Logo,
  TextoForm,
  ButtonGroup,
  Conteudo2,
} from "./styles";
import logo from "../../assets/clip-message-sent 1.png";

function Cadastro() {
  return (
    <>
      <Container>
        <Conteudo>
          <Logo>
            <img src={logo}></img>
            <p>
              Delivery <b> Rapido</b>
            </p>
          </Logo>
          <TextoForm>
            <h2>Gerencie suas Entregas</h2>
            <p>Olá, Realize seu cadastro para utilizar a plataforma</p>
            <form>
              <Input label="Nome Usuario" type="text" />
              <Input label="Senha" type="password" />
              {/* <Input>
                <p>Nome Completo</p>
                <input />
              </Input>
              <Input>
                <p>Senha</p>
                <input />
              </Input> */}
              <ButtonGroup>
                <Button> Cadastrar</Button>
                <Button name="secundary"> Login</Button>
              </ButtonGroup>
            </form>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">You Tube</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </TextoForm>
        </Conteudo>
        <Conteudo2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
            </li>
          </ul>
          <img src={logo}></img>
        </Conteudo2>
      </Container>
    </>
  );
}

export default Cadastro;
