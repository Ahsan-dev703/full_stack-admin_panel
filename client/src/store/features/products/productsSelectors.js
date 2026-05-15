import { createSelector } from "@reduxjs/toolkit";

const selectProductsState = (state) => state.products;

export const selectAllProducts = (state) => selectProductsState(state).items;
export const selectFilters = (state) => selectProductsState(state).filters;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectFilters],
  (products, filters) => {
    const { searchTerm, category } = filters;
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  },
);
