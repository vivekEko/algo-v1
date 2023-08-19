// Routing
import { Outlet, Navigate } from "react-router-dom";

const ProtectedFromUser = () => {
  return localStorage.getItem("client_id") ? (
    <Navigate to="/dashboard" />
  ) : (
    <Outlet />
  );
};

export default ProtectedFromUser;
