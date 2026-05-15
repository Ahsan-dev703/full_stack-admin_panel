import { createAsyncThunk } from "@reduxjs/toolkit";
import { DUMMY_ORDERS } from "@/constants/orders";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      return DUMMY_ORDERS;
    } catch (error) {
      return rejectWithValue("Failed to load orders");
    }
  },
);
