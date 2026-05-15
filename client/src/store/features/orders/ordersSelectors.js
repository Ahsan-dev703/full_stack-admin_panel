import { createSelector } from "@reduxjs/toolkit";

const selectOrdersState = (state) => state.orders;

export const selectAllOrders = (state) => selectOrdersState(state).items;
export const selectOrdersFilters = (state) => selectOrdersState(state).filters;
export const selectSelectedOrderId = (state) =>
  selectOrdersState(state).selectedOrderId;

// Find the specific order object for the details modal
export const selectOrderById = createSelector(
  [selectAllOrders, selectSelectedOrderId],
  (orders, selectedId) =>
    orders.find((order) => order.id === selectedId) || null,
);

// Filtered List
export const selectFilteredOrders = createSelector(
  [selectAllOrders, selectOrdersFilters],
  (orders, filters) => {
    return orders.filter((order) => {
      const matchesStatus =
        filters.status === "all" || order.orderStatus === filters.status;
      const matchesSearch =
        order.id.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        order.customer.name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  },
);
