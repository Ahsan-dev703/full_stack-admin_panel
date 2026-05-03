import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

const ProtectedRoute = () => {
  const isAuthenticated = true; // Keep this true to access Products/Analytics

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.PUBLIC.LOGIN} replace />
  );
};

export default ProtectedRoute;
