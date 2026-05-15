import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, addProduct, deleteProduct } from "./productsThunks";

const initialState = {
  items: [],
  filters: {
    searchTerm: "",
    category: "all",
  },
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.filters.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      /* Fetch Products */
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /* Add Product */
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      /* Delete Product */
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export const { setSearchTerm, setCategory, clearFilters } =
  productsSlice.actions;
export default productsSlice.reducer;
