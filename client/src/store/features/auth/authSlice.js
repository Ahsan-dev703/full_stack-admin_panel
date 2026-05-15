import { createSlice } from "@reduxjs/toolkit";
import { loadAuthState, saveAuthState } from "@/utils/authStorage";

const persistedState = loadAuthState();

const initialState = persistedState || {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const persistAuth = (state) => {
  saveAuthState({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      persistAuth(state);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        persistAuth(state);
      }
    },
    updateAvatar: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, avatar: action.payload };
        persistAuth(state);
      }
    },
    updateUserSettings: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,
          settings: {
            ...state.user.settings,
            ...action.payload,
          },
        };
        persistAuth(state);
      }
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateProfile,
  updateAvatar,
  updateUserSettings,
} = authSlice.actions;

export default authSlice.reducer;
