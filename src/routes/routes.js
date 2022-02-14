import React from "react";
import { useAutenticacao } from "../hooks/autenticacao";
import { Route as ReactDOMRoute, Navigate } from "react-router-dom";

function Route({ isPrivate = false, element: Element, ...rest }) {
  /* const { token } = useAutenticacao();
  console.log(token); */
  const token = false;
  console.log(isPrivate);
  return <ReactDOMRoute {...rest} element={<Element />} />;
  /*  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
          <Element />
        ) : (
          <Navigate
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  ); */
}

export default Route;
