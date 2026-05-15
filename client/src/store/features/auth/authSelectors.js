import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = (state) => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuthState],
  (auth) => auth.user || null,
);

export const selectIsAuthenticated = createSelector(
  [selectAuthState],
  (auth) => auth.isAuthenticated,
);

export const selectUserRole = createSelector(
  [selectCurrentUser],
  (user) => user?.role || "Guest",
);

export const selectUserAvatar = createSelector(
  [selectCurrentUser],
  (user) => user?.avatar || null,
);
