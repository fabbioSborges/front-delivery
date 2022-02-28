import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api.js";

const ContextoAutenticacao = createContext(null);

export const AutenticacaoProvider = ({ children }) => {
  const [authenticated, setauthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("@app:token");
    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setauthenticated(true);
    }
    setLoading(false);
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
    setauthenticated(true);
    /* setData({ token: response.data }); */
    /* console.log({ token, user }); */
  }

  const logoff = useCallback(() => {
    localStorage.removeItem("@app:token");

    navigate("/");
    /* localStorage.removeItem("@aplicacao:user"); */

    /* setData({}); */
  }, []);
  console.log(authenticated);

  return (
    <ContextoAutenticacao.Provider
      value={{ authenticated, login, logoff, loading }}
    >
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
