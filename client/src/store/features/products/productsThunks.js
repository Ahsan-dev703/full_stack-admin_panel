import { createAsyncThunk } from "@reduxjs/toolkit";
import { DUMMY_PRODUCTS } from "@/constants/products";

/**
 * Mock API delay helper
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch all products
 */
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      // In production: await axios.get('/api/products')
      await delay(1000);
      return [...DUMMY_PRODUCTS];
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  },
);

/**
 * Add a new product
 */
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      await delay(800);

      const newProduct = {
        ...productData,
        id: `PRD-${Math.floor(Math.random() * 1000)}`,
        status: productData.stock > 0 ? "active" : "out_of_stock",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      };

      return newProduct;
    } catch (error) {
      return rejectWithValue("Could not save product");
    }
  },
);

/**
 * Delete a product
 */
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      await delay(500);
      return productId;
    } catch (error) {
      return rejectWithValue("Failed to delete product");
    }
  },
);
