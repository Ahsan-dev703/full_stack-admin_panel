import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "USR-001",
    name: "Admin User",
    email: "admin@dashboard.com",
    avatar: "https://i.pravatar.cc/150?u=admin",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    role: "Super Admin",
  },
  isAuthenticated: true,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { updateProfile, logout } = authSlice.actions;
export default authSlice.reducer;
