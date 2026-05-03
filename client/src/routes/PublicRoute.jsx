import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

const PublicRoute = () => {
  // During testing, set this to false so it doesn't redirect you
  // away from your work.
  const isAuthenticated = false; // Replace with actual authentication logic

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.PRIVATE.DASHBOARD} replace />
  );
};

export default PublicRoute;
