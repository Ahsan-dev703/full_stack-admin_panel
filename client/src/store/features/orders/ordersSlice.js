import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./ordersThunks";

const initialState = {
  items: [],
  filters: {
    searchTerm: "",
    status: "all",
    paymentMethod: "all",
    date: "",
    sortOption: "latest",
  },
  selectedOrderId: null,
  status: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.filters.searchTerm = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filters.status = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.filters.paymentMethod = action.payload;
    },
    setDateFilter: (state, action) => {
      state.filters.date = action.payload;
    },
    setSortOption: (state, action) => {
      state.filters.sortOption = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        searchTerm: "",
        status: "all",
        paymentMethod: "all",
        date: "",
        sortOption: "latest",
      };
    },
    setSelectedOrderId: (state, action) => {
      state.selectedOrderId = action.payload;
    },
    clearOrderSelection: (state) => {
      state.selectedOrderId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setSearchTerm,
  setFilterStatus,
  setPaymentMethod,
  setDateFilter,
  setSortOption,
  clearFilters,
  setSelectedOrderId,
  clearOrderSelection,
} = ordersSlice.actions;

export default ordersSlice.reducer;
