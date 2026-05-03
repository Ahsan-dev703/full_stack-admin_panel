export const selectAllProducts = (state) => state.products.items;
export const selectProductLoading = (state) => state.products.loading;
export const selectProductById = (state, id) =>
  state.products.items.find((p) => p.id === id);
