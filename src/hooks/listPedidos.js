import React, { createContext, useContext, useState } from "react";

import api from "../services/api.js";

const ContextoPedidos = createContext(null);

export const PedidosProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);

  const pedidosCadastrados = async () => {
    console.log("aqui");
    const { data } = await api.get("clients/deliveries");
    console.log(data);
    setPedidos([...data[0].Deliveries]);
  };

  const salvaPedido = async ({ item }) => {
    const response = await api.post("/deliveries", {
      item_name: item,
    });
    await pedidosCadastrados();
  };

  return (
    <ContextoPedidos.Provider
      value={{ pedidos, pedidosCadastrados, salvaPedido }}
    >
      {children}
    </ContextoPedidos.Provider>
  );
};

export function usePedidos() {
  const context = useContext(ContextoPedidos);
  if (!context) {
    throw new Error("use pedidos");
  }
  return context;
}
