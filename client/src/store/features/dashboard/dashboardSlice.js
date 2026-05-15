import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboardData } from "./dashboardThunks";

const initialState = {
  stats: [],
  revenueData: [],
  categoryData: [],
  recentOrders: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stats = action.payload.stats;
        state.revenueData = action.payload.revenueData;
        state.categoryData = action.payload.categoryData;
        state.recentOrders = action.payload.recentOrders;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
