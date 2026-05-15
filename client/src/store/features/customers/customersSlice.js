import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomers } from "./customersThunks";

const initialState = {
  items: [],
  filters: {
    searchTerm: "",
    status: "all",
  },
  selectedCustomerId: null,
  status: "idle",
  error: null,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.filters.searchTerm = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.filters.status = action.payload;
    },
    setSelectedCustomerId: (state, action) => {
      state.selectedCustomerId = action.payload;
    },
    clearCustomerSelection: (state) => {
      state.selectedCustomerId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setSearchTerm,
  setStatusFilter,
  setSelectedCustomerId,
  clearCustomerSelection,
} = customersSlice.actions;

export default customersSlice.reducer;
