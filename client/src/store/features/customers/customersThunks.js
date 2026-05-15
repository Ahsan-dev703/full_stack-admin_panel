import { createAsyncThunk } from "@reduxjs/toolkit";
import { DUMMY_CUSTOMERS } from "@/constants/customers";

export const fetchCustomers = createAsyncThunk(
  "customers/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 600));
      return DUMMY_CUSTOMERS;
    } catch (error) {
      return rejectWithValue("Failed to fetch customers");
    }
  },
);
