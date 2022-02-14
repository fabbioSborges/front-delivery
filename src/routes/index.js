import React from "react";

import { Routes } from "react-router-dom";
import Cadastro from "../pages/cadastro/index";
import Login from "../pages/login/index";
import Dashboard from "../pages/dashboard/index";

/* import Route from "./routes"; */
import { Route, Navigate, useLocation } from "react-router-dom";

import { useAutenticacao } from "../hooks/autenticacao";

/* function CustomRoute({ isPrivate, ...rest }) {
  const { token } = useAutenticacao();
  if (isPrivate && !token) {
    return <Navigate to="/login" />;
  }
  return <Route {...rest} />;
} */

function CustomRoute({ children }) {
  /*  const { token } = useAutenticacao();
  console.log("token: ", token);
  let location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
    
   
  }
 */
  return children;
}

function Rotas() {
  return (
    <Routes>
      <Route
        path="/home"
        exact
        element={
          <CustomRoute>
            <Cadastro />
          </CustomRoute>
        }
      />
      <Route
        path="/login"
        element={
          <CustomRoute>
            <Login />
          </CustomRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <CustomRoute>
            <Dashboard />
          </CustomRoute>
        }
      />
      {/*  <Route path="/" exact component={Cadastro}></Route> */}
      {/* <Route path="/login" isPrivate={true} component={Login}></Route> */}
      {/* <Route path="/login" isPrivate={true} component={Login}></Route> */}
    </Routes>
  );
}

export default Rotas;
