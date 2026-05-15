import { createSelector } from "@reduxjs/toolkit";

const selectCustomersState = (state) => state.customers;

export const selectAllCustomers = (state) => selectCustomersState(state).items;
export const selectCustomerFilters = (state) =>
  selectCustomersState(state).filters;
export const selectSelectedCustomerId = (state) =>
  selectCustomersState(state).selectedCustomerId;

export const selectCurrentCustomer = createSelector(
  [selectAllCustomers, selectSelectedCustomerId],
  (customers, selectedId) => customers.find((c) => c.id === selectedId) || null,
);

export const selectSearchedCustomers = createSelector(
  [selectAllCustomers, selectCustomerFilters],
  (customers, filters) => {
    const search = filters.searchTerm.trim().toLowerCase();
    if (!search) {
      return customers;
    }

    return customers.filter((customer) => {
      const searchableFields = [customer.name, customer.email, customer.phone];

      return searchableFields.some((field) =>
        String(field).toLowerCase().includes(search),
      );
    });
  },
);

export const selectFilteredCustomers = createSelector(
  [selectSearchedCustomers, selectCustomerFilters],
  (customers, filters) => {
    const { status, role, joinedDate } = filters;

    return customers.filter((customer) => {
      const matchesStatus = status === "all" || customer.status === status;
      const matchesRole = role === "all" || customer.role === role;
      const matchesJoinedDate =
        !joinedDate || customer.joinDate.startsWith(joinedDate);

      return matchesStatus && matchesRole && matchesJoinedDate;
    });
  },
);

export const selectSortedCustomers = createSelector(
  [selectFilteredCustomers, selectCustomerFilters],
  (customers, filters) => {
    const sorted = [...customers];

    switch (filters.sortOption) {
      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.joinDate) - new Date(b.joinDate),
        );
      case "alphabetical":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted.sort(
          (a, b) => new Date(b.joinDate) - new Date(a.joinDate),
        );
    }
  },
);
