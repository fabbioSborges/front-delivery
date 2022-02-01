import GlobalStyle from "./styles/global";
import Cadastro from "./pages/cadastro";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <Cadastro></Cadastro>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
