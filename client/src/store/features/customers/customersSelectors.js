import { createSelector } from "@reduxjs/toolkit";

const selectCustomersState = (state) => state.customers;

export const selectAllCustomers = (state) => selectCustomersState(state).items;
export const selectCustomerFilters = (state) =>
  selectCustomersState(state).filters;
export const selectSelectedCustomerId = (state) =>
  selectCustomersState(state).selectedCustomerId;

// Memoized filtered list
export const selectFilteredCustomers = createSelector(
  [selectAllCustomers, selectCustomerFilters],
  (customers, filters) => {
    const { searchTerm, status } = filters;
    return customers.filter((customer) => {
      const matchesSearch =
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = status === "all" || customer.status === status;

      return matchesSearch && matchesStatus;
    });
  },
);

// Get the actual object for the modal
export const selectCurrentCustomer = createSelector(
  [selectAllCustomers, selectSelectedCustomerId],
  (customers, selectedId) => customers.find((c) => c.id === selectedId) || null,
);
