import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions & Thunks
import { fetchOrders } from "@/store/features/orders/ordersThunks";
import {
  setFilterStatus,
  setSearchTerm,
  setSelectedOrderId,
  clearOrderSelection,
} from "@/store/features/orders/ordersSlice";

// Redux Selectors
import {
  selectFilteredOrders,
  selectOrdersFilters,
  selectOrderById,
} from "@/store/features/orders/ordersSelectors";

// UI Components
import Modal from "@/components/UI/Modal/Modal";
import OrderHeader from "./OrderHeader";
import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";
import OrderDetails from "./OrderDetails";

// Constants
import { ORDER_STATUSES } from "@/constants/orders";
import styles from "./Orders.module.css";
import Loader from "@/components/UI/Loader/Loader";

const Orders = () => {
  const dispatch = useDispatch();

  // Redux State with defensive fallbacks
  const orders = useSelector(selectFilteredOrders) || [];
  const filters = useSelector(selectOrdersFilters) || {
    status: "all",
    searchTerm: "",
  };
  const selectedOrder = useSelector(selectOrderById);
  const { status: fetchStatus, error } = useSelector(
    (state) => state.orders || { status: "idle", error: null },
  );

  const { status: filterStatus, searchTerm } = filters;

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
        filterStatus={filterStatus}
        searchTerm={searchTerm}
        onStatusChange={(val) => dispatch(setFilterStatus(val))}
        onSearchChange={(val) => dispatch(setSearchTerm(val))}
        statuses={ORDER_STATUSES}
      />

      <OrderTable
        orders={orders}
        onViewDetails={(order) => dispatch(setSelectedOrderId(order.id))}
      />

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
