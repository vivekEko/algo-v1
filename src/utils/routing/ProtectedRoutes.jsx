// Routing
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  return localStorage.getItem("client_id") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
    // <Outlet />
  );
};

export default ProtectedRoutes;
