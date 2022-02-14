import GlobalStyle from "./styles/global";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import { AutenticacaoProvider } from "./hooks/autenticacao";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <AutenticacaoProvider>
            {/* <Cadastro></Cadastro> */}
            {/* <Login></Login> */}
            <Rotas />
          </AutenticacaoProvider>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
