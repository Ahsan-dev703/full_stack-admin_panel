import { useState } from "react";
import Modal from "@/components/UI/Modal/Modal";
import OrderHeader from "./OrderHeader";
import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";
import OrderDetails from "./OrderDetails";

import { DUMMY_ORDERS, ORDER_STATUSES } from "@/constants/orders";
import styles from "./Orders.module.css";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div className={styles.container}>
      <OrderHeader onExport={() => console.log("Exporting CSV...")} />

      <OrderFilters
        filterStatus={filterStatus}
        onStatusChange={setFilterStatus}
        statuses={ORDER_STATUSES}
      />

      <OrderTable orders={DUMMY_ORDERS} onViewDetails={setSelectedOrder} />

      <Modal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title={`Order Details: ${selectedOrder?.id}`}
      >
        <OrderDetails order={selectedOrder} />
      </Modal>
    </div>
  );
};

export default Orders;
