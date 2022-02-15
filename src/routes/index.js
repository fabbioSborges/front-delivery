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

function CustomRoute({ children, isPrivate, ...rest }) {
  const { authenticated, loading } = useAutenticacao();

  let location = useLocation();
  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log("authenticated", authenticated);
  console.log("Private", isPrivate);
  console.log(isPrivate === authenticated);
  /* return isPrivate === !authenticated ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: isPrivate ? "/login" : "/home",
        state: { from: location },
      }}
    />
  ); */
  /*  if (isPrivate) {
    if (authenticated) {
      return children;
    } else {
      return <Navigate to="/login" {...rest} state={{ from: location }} />;
    }
  } else {
    if (authenticated) {
      return <Navigate to="/dashboard" {...rest} state={{ from: location }} />;
    } else {
      return <Navigate to="/login" {...rest} />;
    }
  } */
  if (isPrivate && !authenticated) {
    console.log("authenticated", authenticated);
    console.log("Private", isPrivate);
    return <Navigate to="/login" {...rest} state={{ from: location }} />;
  }

  return children;
  /*  const { token } = useAutenticacao();
  console.log("token: ", token);
  let location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
    
   
  }
 */
}

function Rotas() {
  return (
    <Routes>
      <Route
        path="/"
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
          <CustomRoute isPrivate>
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
