import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import productsReducer from "./features/products/productsSlice";
import ordersReducer from "./features/orders/ordersSlice";
import customersReducer from "./features/customers/customersSlice";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import analyticsReducer from "./features/analytics/analyticsSlice";
import authReducer from "./features/auth/authSlice";
import settingsReducer from "./features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    settings: settingsReducer,
    products: productsReducer,
    orders: ordersReducer,
    customers: customersReducer,
    dashboard: dashboardReducer,
    analytics: analyticsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
