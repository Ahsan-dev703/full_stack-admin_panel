import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

// Layouts & Guards
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Profile from "@/pages/Profile/Profile";

// Lazy Loaded Pages
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
const Products = lazy(() => import("@/pages/Products/Products"));
const Categories = lazy(() => import("@/pages/Products/Categories")); // You'll need to create this
const Analytics = lazy(() => import("@/pages/Analytics/Analytics"));
const Orders = lazy(() => import("@/pages/Orders/Orders"));
const Customers = lazy(() => import("@/pages/Customers/Customers"));
const Settings = lazy(() => import("@/pages/Settings/Settings"));
const Login = lazy(() => import("@/pages/Auth/Login"));
import Loader from "@/components/UI/Loader/Loader";

const PageLoader = () => (
  <div style={{ padding: "2rem" }}>
    <Loader />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path={ROUTES.PUBLIC.LOGIN} element={<Login />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            {/* NESTED PRODUCTS ROUTES */}
            <Route path={ROUTES.PRIVATE.PRODUCTS}>
              <Route index element={<Products />} />
              <Route
                path={ROUTES.PRIVATE.PRODUCTS_ALL}
                element={<Products />}
              />
              {/* /products/all */}
              <Route
                path={ROUTES.PRIVATE.PRODUCTS_CATEGORIES}
                element={<Categories />}
              />
              {/* /products/categories */}
            </Route>
            <Route path={ROUTES.PRIVATE.ANALYTICS} element={<Analytics />} />
            <Route path={ROUTES.PRIVATE.ORDERS} element={<Orders />} />
            <Route path={ROUTES.PRIVATE.CUSTOMERS} element={<Customers />} />
            <Route path={ROUTES.PRIVATE.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.PRIVATE.PROFILE} element={<Profile />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>

        {/* 404 Redirect */}
        <Route
          path="*"
          element={<Navigate to={ROUTES.PRIVATE.DASHBOARD} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
