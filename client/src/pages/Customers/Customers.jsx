import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions & Thunks
import { fetchCustomers } from "@/store/features/customers/customersThunks";
import {
  setSearchTerm,
  setSelectedCustomerId,
  clearCustomerSelection,
  setStatusFilter,
} from "@/store/features/customers/customersSlice";

// Redux Selectors
import {
  selectFilteredCustomers,
  selectCurrentCustomer,
} from "@/store/features/customers/customersSelectors";

// UI Components
import Modal from "@/components/UI/Modal/Modal";
import CustomerHeader from "./CustomerHeader";
import CustomerFilters from "./CustomerFilters";
import CustomerTable from "./CustomerTable";
import CustomerProfile from "./CustomerProfile";

// Constants & Styles
import { CUSTOMER_STATUSES } from "@/constants/customers";
import styles from "./Customers.module.css";
import Loader from "@/components/UI/Loader/Loader";

const Customers = () => {
  const dispatch = useDispatch();

  // Selectors with fallbacks to handle initial/undefined states
  const filteredCustomers = useSelector(selectFilteredCustomers) || [];
  const selectedCustomer = useSelector(selectCurrentCustomer);

  // Directly accessing status to manage the fetch lifecycle
  const { status } = useSelector(
    (state) => state.customers || { status: "idle" },
  );

  useEffect(() => {
    // Only fetch if we haven't already started or succeeded
    if (status === "idle") {
      dispatch(fetchCustomers());
    }
  }, [dispatch, status]);

  return (
    <div className={styles.container}>
      <CustomerHeader
        onAddCustomer={() => {
          /* Logic for Add Customer Modal */
        }}
      />

      <CustomerFilters
        onSearchChange={(val) => dispatch(setSearchTerm(val))}
        onStatusChange={(val) => dispatch(setStatusFilter(val))}
        statusOptions={CUSTOMER_STATUSES}
      />

      {status === "loading" && filteredCustomers.length === 0 ? (
        <Loader />
      ) : (
        <CustomerTable
          customers={filteredCustomers}
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
