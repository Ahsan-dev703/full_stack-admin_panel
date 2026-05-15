import { createSlice } from "@reduxjs/toolkit";
import { fetchAnalyticsData } from "./analyticsThunks";

const initialState = {
  metrics: [],
  performanceData: [],
  trafficSources: [],
  conversionData: [],
  dateRange: "30_days",
  status: "idle",
  error: null,
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalyticsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnalyticsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.metrics = action.payload.metrics;
        state.performanceData = action.payload.performanceData;
        state.trafficSources = action.payload.trafficSources;
        state.conversionData = action.payload.conversionData;
      })
      .addCase(fetchAnalyticsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setDateRange } = analyticsSlice.actions;
export default analyticsSlice.reducer;
