import Input from "../../components/input";
import Button from "../../components/button";
import Radio from "../../components/radio";
import {
  Container,
  Conteudo,
  Logo,
  TextoForm,
  ButtonGroup,
  Conteudo2,
  Camps,
} from "./styles";
import logo from "../../assets/clip-message-sent 1.png";

import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import * as Yup from "yup";

function Cadastro() {
  const formRef = useRef(null);

  const options = [
    { label: "Cliente", value: "C" },
    { label: "Deliveryman", value: "D" },
  ];

  const inputForms = useCallback(async (data) => {
    /* console.log(data); */
    try {
      const schema = Yup.object().shape({
        usuario: Yup.string()
          .email("Email Incorreto")
          .required("email não informador"),
        senha: Yup.string().required("senha não informada"),
        categoria: Yup.string().required("Categoria não informada"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = {};
        err.inner.forEach((error) => {
          erros[error.path] = error.message;
        });
        console.log(erros);
        formRef.current?.setErrors(erros);
        return;
      }
    }
  });

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
            <Form ref={formRef} onSubmit={inputForms}>
              <Input name="usuario" label="Nome Usuario" type="text" />
              <Input name="senha" label="Senha" type="password" />
              {/* <Input>
                <p>Nome Completo</p>
                <input />
              </Input>
              <Input>
                <p>Senha</p>
                <input />
              </Input> */}
              <Camps>
                <Radio name="categoria" options={options} />
              </Camps>
              <ButtonGroup>
                <Button> Cadastrar</Button>
                <Button name="secundary"> Login</Button>
              </ButtonGroup>
            </Form>
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
