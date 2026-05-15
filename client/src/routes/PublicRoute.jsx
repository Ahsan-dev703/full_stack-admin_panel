import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "@/constants/routes";

const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.PRIVATE.DASHBOARD} replace />
  );
};

export default PublicRoute;
