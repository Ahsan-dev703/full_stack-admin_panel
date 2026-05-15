import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions & Thunks
import { fetchCustomers } from "@/store/features/customers/customersThunks";
import {
  setSearchTerm,
  setStatusFilter,
  setRoleFilter,
  setJoinedDate,
  setSortOption,
  clearFilters,
  setSelectedCustomerId,
  clearCustomerSelection,
} from "@/store/features/customers/customersSlice";

// Redux Selectors
import {
  selectSortedCustomers,
  selectCustomerFilters,
  selectCurrentCustomer,
} from "@/store/features/customers/customersSelectors";

// UI Components
import EmptyState from "@/components/UI/EmptyState/EmptyState";
import Modal from "@/components/UI/Modal/Modal";
import CustomerHeader from "./CustomerHeader";
import CustomerFilters from "./CustomerFilters";
import CustomerTable from "./CustomerTable";
import CustomerProfile from "./CustomerProfile";

// Constants & Styles
import {
  CUSTOMER_STATUSES,
  CUSTOMER_ROLES,
  CUSTOMER_SORT_OPTIONS,
} from "@/constants/customers";
import styles from "./Customers.module.css";
import Loader from "@/components/UI/Loader/Loader";

const Customers = () => {
  const dispatch = useDispatch();

  // Selectors with fallbacks to handle initial/undefined states
  const customers = useSelector(selectSortedCustomers) || [];
  const filters = useSelector(selectCustomerFilters) || {
    searchTerm: "",
    status: "all",
    role: "all",
    joinedDate: "",
    sortOption: "newest",
  };
  const selectedCustomer = useSelector(selectCurrentCustomer);

  const { status: fetchStatus, error } = useSelector(
    (state) => state.customers || { status: "idle", error: null },
  );

  const { searchTerm, status, role, joinedDate, sortOption } = filters;

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchCustomers());
    }
  }, [dispatch, fetchStatus]);

  return (
    <div className={styles.container}>
      <CustomerHeader
        onAddCustomer={() => {
          /* Logic for Add Customer Modal */
        }}
      />

      <CustomerFilters
        searchTerm={searchTerm}
        status={status}
        role={role}
        joinedDate={joinedDate}
        sortOption={sortOption}
        statusOptions={CUSTOMER_STATUSES}
        roleOptions={CUSTOMER_ROLES}
        sortOptions={CUSTOMER_SORT_OPTIONS}
        onSearchChange={(val) => dispatch(setSearchTerm(val))}
        onStatusChange={(val) => dispatch(setStatusFilter(val))}
        onRoleChange={(val) => dispatch(setRoleFilter(val))}
        onJoinedDateChange={(val) => dispatch(setJoinedDate(val))}
        onSortChange={(val) => dispatch(setSortOption(val))}
        onClearFilters={() => dispatch(clearFilters())}
      />

      {fetchStatus === "loading" ? (
        <Loader fullScreen text="Loading customers..." />
      ) : fetchStatus === "failed" ? (
        <div className={styles.error}>
          {error || "Unable to load customers, please try again."}
        </div>
      ) : customers.length === 0 ? (
        <EmptyState
          title="No matching customers found"
          message="Try another search or clear filters to see all customers."
          actionLabel="Clear filters"
          onAction={() => dispatch(clearFilters())}
        />
      ) : (
        <CustomerTable
          customers={customers}
          onSelectCustomer={(customer) =>
            dispatch(setSelectedCustomerId(customer.id))
          }
        />
      )}

      <Modal
        isOpen={!!selectedCustomer}
        onClose={() => dispatch(clearCustomerSelection())}
        title="Customer Profile"
      >
        {selectedCustomer && <CustomerProfile customer={selectedCustomer} />}
      </Modal>
    </div>
  );
};

export default Customers;
