
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import CartContex from "./CartContex";

export function ProtectedRoute({ children }) {
  const { usuario} = useContext(CartContex);



  if (!usuario) return <Navigate to="/ingreso" />;

  return <>{children}</>;
}