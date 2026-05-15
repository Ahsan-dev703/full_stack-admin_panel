import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = (state) => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuthState],
  (auth) => auth.user || null,
);

export const selectProfileData = createSelector(
  [selectCurrentUser],
  (user) => ({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    role: user?.role,
    avatar: user?.avatar,
    settings: user?.settings || {},
  }),
);

export const selectUserSettings = createSelector(
  [selectCurrentUser],
  (user) => user?.settings || null,
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
