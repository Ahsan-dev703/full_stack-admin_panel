import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "Alexander Pierce",
    role: "Super Admin",
    email: "a.pierce@modernstore.com",
    phone: "+1 (555) 000-1234",
    location: "San Francisco, CA",
    avatar: "https://i.pravatar.cc/150?u=alexander",
  },
  activities: [
    {
      id: 1,
      action: "Updated Product",
      target: "iPhone 15 Pro",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Processed Refund",
      target: "Order #8821",
      time: "5 hours ago",
    },
  ],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    addLog: (state, action) => {
      state.activities.unshift({
        id: Date.now(),
        ...action.payload,
        time: "Just now",
      });
    },
  },
});

export const { updateProfile, addLog } = profileSlice.actions;
export default profileSlice.reducer;
