import React, { useRef } from "react";
import Input from "../input";
import Button from "../button";
import {
  ModalBackground,
  TitleCloseBtn,
  Footer,
  Body,
  Title,
  ModalContainer,
} from "./styles";

import * as Yup from "yup";
import api from "../../services/api";
import { Form } from "@unform/web";
import { usePedidos } from "../../hooks/listPedidos";
function Modal({ setOpenModal }) {
  const formRef = useRef(null);
  const { salvaPedido } = usePedidos();
  const cadastrar = async (data) => {
    try {
      const schema = Yup.object().shape({
        item: Yup.string().required("item não informador"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      /* const response = await api.post("/deliveries", {
        item_name: data.item,
      }); */
      salvaPedido(data);
      setOpenModal(false);
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
      console.log(err.response.data);
    }
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseBtn>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </TitleCloseBtn>
        <Title>
          <h1>Cadastrar Pedido</h1>
        </Title>
        <Body>
          <Form ref={formRef} onSubmit={cadastrar}>
            <Input name="item" label="Nome do Item" type="text" />
            <Footer>
              <Button>Cadastrar</Button>
            </Footer>
          </Form>
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
