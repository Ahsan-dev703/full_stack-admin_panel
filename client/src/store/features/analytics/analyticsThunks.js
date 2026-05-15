import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  PERFORMANCE_DATA,
  TRAFFIC_SOURCES,
  CONVERSION_DATA,
} from "@/constants/analytics";

export const fetchAnalyticsData = createAsyncThunk(
  "analytics/fetchData",
  async (dateRange, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Map icons to names for serializability
      const metrics = [
        {
          label: "Avg. Conversion Rate",
          value: "3.42%",
          trend: "+0.8%",
          trendType: "up",
          iconName: "trending",
        },
        {
          label: "Total Sessions",
          value: "42.5k",
          trend: "+12%",
          trendType: "up",
          iconName: "public",
        },
        {
          label: "Bounce Rate",
          value: "24.1%",
          trend: "-2%",
          trendType: "down",
          iconName: "flash",
        },
      ];

      return {
        metrics,
        performanceData: PERFORMANCE_DATA,
        trafficSources: TRAFFIC_SOURCES,
        conversionData: CONVERSION_DATA,
      };
    } catch (error) {
      return rejectWithValue("Failed to fetch analytics");
    }
  },
);
