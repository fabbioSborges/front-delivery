import Cabecalho from "../../components/cabecalho";
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

import { FiClock } from "react-icons/fi";
import Button from "../../components/button";
function Dashboard() {
  return (
    <Container>
      <Cabecalho />
      <Conteudo>
        <Pedidos>
          <Header>
            <div>
              <h1>Pedidos</h1>
              <p>
                <span>12 de Abril </span>
                <span>segunda-feira</span>
              </p>
            </div>
            <Button> Cadastrar Pedidos</Button>
          </Header>
          <ProximoPedidos>
            <strong>Pedidos Entregues</strong>
            <div>
              <img src="" alt="teste"></img>
              <strong>Hd SSD</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </ProximoPedidos>
          <Section>
            <strong> Pedidos Com Deliveryman </strong>
            <Agendamento>
              <span>
                <FiClock> </FiClock>
                08:00
              </span>
              <div>
                <img src="" alt="foto usuario" />
                <strong>Monitor</strong>
              </div>
            </Agendamento>
          </Section>
          <Section>
            <strong> Pedidos Sem Deliveryman </strong>
            <Agendamento>
              <span>
                <FiClock> </FiClock>
                09:00
              </span>
              <div>
                <img src="" alt="fotoperfil" />
                <strong>Notebook</strong>
              </div>
            </Agendamento>
          </Section>
        </Pedidos>

        <Calendario></Calendario>
      </Conteudo>
    </Container>
  );
}

export default Dashboard;
