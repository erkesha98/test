import React, { useContext } from "react";
import { UserContext } from "../App";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(UserContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/LoginApp" />;
};

export default ProtectedRoute;
