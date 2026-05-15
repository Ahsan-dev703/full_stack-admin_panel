import { createSelector } from "@reduxjs/toolkit";

const selectOrdersState = (state) => state.orders;

export const selectAllOrders = (state) => selectOrdersState(state).items;
export const selectOrdersFilters = (state) => selectOrdersState(state).filters;
export const selectSelectedOrderId = (state) =>
  selectOrdersState(state).selectedOrderId;

export const selectOrderById = createSelector(
  [selectAllOrders, selectSelectedOrderId],
  (orders, selectedId) =>
    orders.find((order) => order.id === selectedId) || null,
);

export const selectSearchedOrders = createSelector(
  [selectAllOrders, selectOrdersFilters],
  (orders, filters) => {
    const search = filters.searchTerm.trim().toLowerCase();
    if (!search) {
      return orders;
    }

    return orders.filter((order) => {
      const searchableFields = [
        order.id,
        order.customer.name,
        order.customer.email,
        order.orderStatus,
      ];

      return searchableFields.some((field) =>
        String(field).toLowerCase().includes(search),
      );
    });
  },
);

export const selectFilteredOrders = createSelector(
  [selectSearchedOrders, selectOrdersFilters],
  (orders, filters) => {
    const { status, paymentMethod, date } = filters;

    return orders.filter((order) => {
      const matchesStatus = status === "all" || order.orderStatus === status;
      const matchesPaymentMethod =
        paymentMethod === "all" || order.paymentMethod === paymentMethod;
      const matchesDate = !date || order.date.startsWith(date);

      return matchesStatus && matchesPaymentMethod && matchesDate;
    });
  },
);

export const selectSortedOrders = createSelector(
  [selectFilteredOrders, selectOrdersFilters],
  (orders, filters) => {
    const sorted = [...orders];

    switch (filters.sortOption) {
      case "oldest":
        return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "highest":
        return sorted.sort((a, b) => b.total - a.total);
      case "lowest":
        return sorted.sort((a, b) => a.total - b.total);
      default:
        return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  },
);
