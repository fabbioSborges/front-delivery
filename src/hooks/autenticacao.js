import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

import api from "../services/api.js";

const ContextoAutenticacao = createContext(null);

export const AutenticacaoProvider = ({ children }) => {
  /* const [data, setData] = useState(null); */
  /* const [data, setData] = useState(() => {
    const token = localStorage.getItem("@app:token");
    /* const user = localStorage.getItem("@app:user"); 
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }
    return {};
  }); */
  useEffect(() => {
    const token = localStorage.getItem("@app:token");
    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse.token}`;
    }
  }, []);
  async function login({ usuario, senha }) {
    console.log("cadastro");
    console.log({ usuario, senha });
    const response = await api.post("clients/authenticate", {
      username: usuario,
      password: senha,
    });

    /*  const { token } = response.data; */

    localStorage.setItem("@app:token", JSON.stringify(response.data));
    /* localStorage.setItem("@app:user", JSON.stringify(user)); */
    api.defaults.headers.authorization = `Bearer ${response.data}`;

    /* setData({ token: response.data }); */
    /* console.log({ token, user }); */
  }

  const logoff = useCallback(() => {
    localStorage.removeItem("@aplicacao:token");
    /* localStorage.removeItem("@aplicacao:user"); */

    /* setData({}); */
  }, []);

  return (
    <ContextoAutenticacao.Provider value={{ token: data.token, login, logoff }}>
      {children}
    </ContextoAutenticacao.Provider>
  );

  /*   return (
    <ContextoAutenticacao.Provider value={{ login }}>
      {children}
      <h1>Autenticacao</h1>
    </ContextoAutenticacao.Provider>
  ); */
};

export function useAutenticacao() {
  const context = useContext(ContextoAutenticacao);
  if (!context) {
    throw new Error("use Auth");
  }
  return context;
}
