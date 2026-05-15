import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomers } from "./customersThunks";

const initialState = {
  items: [],
  filters: {
    searchTerm: "",
    status: "all",
    role: "all",
    joinedDate: "",
    sortOption: "newest",
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
    setRoleFilter: (state, action) => {
      state.filters.role = action.payload;
    },
    setJoinedDate: (state, action) => {
      state.filters.joinedDate = action.payload;
    },
    setSortOption: (state, action) => {
      state.filters.sortOption = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        searchTerm: "",
        status: "all",
        role: "all",
        joinedDate: "",
        sortOption: "newest",
      };
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
  setRoleFilter,
  setJoinedDate,
  setSortOption,
  clearFilters,
  setSelectedCustomerId,
  clearCustomerSelection,
} = customersSlice.actions;

export default customersSlice.reducer;
