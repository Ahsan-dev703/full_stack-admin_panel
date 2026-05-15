import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions & Thunks
import { fetchOrders } from "@/store/features/orders/ordersThunks";
import {
  setFilterStatus,
  setPaymentMethod,
  setDateFilter,
  setSortOption,
  setSearchTerm,
  clearFilters,
  setSelectedOrderId,
  clearOrderSelection,
} from "@/store/features/orders/ordersSlice";

// Redux Selectors
import {
  selectSortedOrders,
  selectOrdersFilters,
  selectOrderById,
} from "@/store/features/orders/ordersSelectors";

// UI Components
import EmptyState from "@/components/UI/EmptyState/EmptyState";
import Modal from "@/components/UI/Modal/Modal";
import OrderHeader from "./OrderHeader";
import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";
import OrderDetails from "./OrderDetails";

// Constants
import {
  ORDER_STATUSES,
  PAYMENT_METHODS,
  ORDER_SORT_OPTIONS,
} from "@/constants/orders";
import styles from "./Orders.module.css";
import Loader from "@/components/UI/Loader/Loader";

const Orders = () => {
  const dispatch = useDispatch();

  // Redux State with defensive fallbacks
  const orders = useSelector(selectSortedOrders) || [];
  const filters = useSelector(selectOrdersFilters) || {
    status: "all",
    paymentMethod: "all",
    date: "",
    sortOption: "latest",
    searchTerm: "",
  };
  const selectedOrder = useSelector(selectOrderById);
  const { status: fetchStatus, error } = useSelector(
    (state) => state.orders || { status: "idle", error: null },
  );

  const {
    status: filterStatus,
    paymentMethod,
    date,
    sortOption,
    searchTerm,
  } = filters;

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, fetchStatus]);

  if (fetchStatus === "loading") {
    return <Loader fullScreen text="Loading orders..." />;
  }

  if (fetchStatus === "failed") {
    return (
      <div className={styles.error}>
        {error || "Unable to load orders at this time."}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <OrderHeader onExport={() => console.log("Exporting CSV...")} />

      <OrderFilters
        searchTerm={searchTerm}
        filterStatus={filterStatus}
        paymentMethod={paymentMethod}
        selectedDate={date}
        sortOption={sortOption}
        statuses={ORDER_STATUSES}
        paymentMethods={PAYMENT_METHODS}
        sortOptions={ORDER_SORT_OPTIONS}
        onSearchChange={(val) => dispatch(setSearchTerm(val))}
        onStatusChange={(val) => dispatch(setFilterStatus(val))}
        onPaymentMethodChange={(val) => dispatch(setPaymentMethod(val))}
        onDateChange={(val) => dispatch(setDateFilter(val))}
        onSortChange={(val) => dispatch(setSortOption(val))}
        onClearFilters={() => dispatch(clearFilters())}
      />

      {orders.length === 0 ? (
        <EmptyState
          title="No matching orders found"
          message="Try another search or clear filters to restore the order list."
          actionLabel="Clear filters"
          onAction={() => dispatch(clearFilters())}
        />
      ) : (
        <OrderTable
          orders={orders}
          onViewDetails={(order) => dispatch(setSelectedOrderId(order.id))}
        />
      )}

      <Modal
        isOpen={!!selectedOrder}
        onClose={() => dispatch(clearOrderSelection())}
        title={
          selectedOrder ? `Order Details: ${selectedOrder.id}` : "Order Details"
        }
      >
        {selectedOrder && <OrderDetails order={selectedOrder} />}
      </Modal>
    </div>
  );
};

export default Orders;
