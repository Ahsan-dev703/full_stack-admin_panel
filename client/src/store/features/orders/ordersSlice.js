import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./ordersThunks";

const initialState = {
  items: [],
  filters: {
    status: "all",
    searchTerm: "",
    date: null,
  },
  selectedOrderId: null,
  status: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setFilterStatus: (state, action) => {
      state.filters.status = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.filters.searchTerm = action.payload;
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
  setFilterStatus,
  setSearchTerm,
  setSelectedOrderId,
  clearOrderSelection,
} = ordersSlice.actions;
export default ordersSlice.reducer;
