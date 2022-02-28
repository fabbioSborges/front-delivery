import Cabecalho from "../../components/cabecalho";
import { useEffect, useState } from "react";
import {
  Container,
  Section,
  ProximoPedidos,
  Agendamento,
  Conteudo,
  Pedidos,
  Calendario,
  Header,
} from "./styles";
import { format } from "date-fns";
import api from "../../services/api";
import { FiClock } from "react-icons/fi";
import Button from "../../components/button";
import Modal from "../../components/modal";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";

import { usePedidos } from "../../hooks/listPedidos";

function Dashboard() {
  const { pedidosCadastrados, pedidos } = usePedidos();

  const [deliveries, setDeliveries] = useState([]);
  const [deliveryman, setDeliveryman] = useState([]);
  const [entregues, setEntregues] = useState([]);
  const [user, setUser] = useState("");
  const [value, onChange] = useState(new Date());

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const res = async () => {
      await pedidosCadastrados();
    };
    res();
  }, []);

  useEffect(() => {
    setUser("fabio");
    const deliveryRealizados = pedidos.filter(
      (delivery) => delivery.id_deliveryman == null
    );
    const comDeliveryman = pedidos.filter(
      (delivery) => delivery.id_deliveryman != null && delivery.end_at == null
    );
    const resultEntregue = pedidos.filter(
      (delivery) => delivery.end_at != null
    );
    setDeliveries([...deliveryRealizados]);
    setDeliveryman([...comDeliveryman]);
    setEntregues([...resultEntregue]);
    console.log(pedidos);
  }, [pedidos]);

  return (
    <Container>
      <Cabecalho user={user} />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <Conteudo>
        <Pedidos>
          <Header>
            <div>
              <h1>Pedidos</h1>
              {/* <DatePicker isOpen={true} onChange={onChange} value={value} /> */}
              <p>
                <span>12 de Abril </span>
                <span>segunda-feira</span>
              </p>
            </div>
            <Button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              Cadastrar Pedidos
            </Button>
          </Header>
          <ProximoPedidos>
            <strong>Pedidos Entregues</strong>
            {entregues &&
              entregues.map((entregue) => {
                return (
                  <div key={entregue.id}>
                    <img src="" alt="teste"></img>
                    <strong>{entregue.item_name}</strong>
                    <span>
                      <FiClock />

                      {format(new Date(entregue.created_at), "pp")}
                    </span>
                  </div>
                );
              })}
          </ProximoPedidos>
          <Section>
            <strong> Pedidos Com Deliveryman </strong>
            {deliveryman &&
              deliveryman.map((ele) => (
                <Agendamento key={ele.id}>
                  <span>
                    <FiClock> </FiClock>
                    {format(new Date(ele.created_at), "pp")}
                  </span>
                  <div>
                    <img src="" alt="foto usuario" />
                    <strong>{ele.item_name}</strong>
                  </div>
                </Agendamento>
              ))}
          </Section>
          <Section>
            <strong> Pedidos Sem Deliveryman </strong>
            {deliveries &&
              deliveries.map((ele) => (
                <Agendamento key={ele.id}>
                  <span>
                    <FiClock> </FiClock>
                    {format(new Date(ele.created_at), "pp")}
                  </span>
                  <div>
                    <img src="" alt="foto usuario" />
                    <strong>{ele.item_name}</strong>
                  </div>
                </Agendamento>
              ))}
          </Section>
        </Pedidos>

        <Calendario></Calendario>
      </Conteudo>
    </Container>
  );
}

export default Dashboard;
