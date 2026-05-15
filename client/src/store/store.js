import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/auth/authSlice";
import themeReducer from "./features/theme/themeSlice";
import productsReducer from "./features/products/productsSlice";
import ordersReducer from "./features/orders/ordersSlice";
import customersReducer from "./features/customers/customersSlice";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import analyticsReducer from "./features/analytics/analyticsSlice";
// import profileReducer from "./features/profile/profileSlice";
import authReducer from "./features/auth/authSlice";
// import settingsReducer from "./features/auth/settingsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    products: productsReducer,
    orders: ordersReducer,
    customers: customersReducer,
    dashboard: dashboardReducer,
    analytics: analyticsReducer,
    // profile: profileReducer,
    // settings: settingsReducer,
  },
  // Middleware for handling serializability or custom logic
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
