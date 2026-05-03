import { MdVisibility } from "react-icons/md";
import Badge from "@/components/UI/Badge/Badge";
import styles from "./Orders.module.css";

const OrderTable = ({ orders, onViewDetails }) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Total</th>
          <th>Payment</th>
          <th>Status</th>
          <th>Date</th>
          <th style={{ textAlign: "right" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className={styles.idCell}>{order.id}</td>
            <td>
              <div className={styles.customerInfo}>
                <span>{order.customer.name}</span>
                <small>{order.customer.email}</small>
              </div>
            </td>
            <td>{order.items} items</td>
            <td>
              <strong>${order.total.toFixed(2)}</strong>
            </td>
            <td>
              <Badge
                status={order.paymentStatus === "paid" ? "success" : "warning"}
              >
                {order.paymentStatus}
              </Badge>
            </td>
            <td>
              <Badge status={order.orderStatus}>{order.orderStatus}</Badge>
            </td>
            <td className={styles.dateCell}>
              {new Date(order.date).toLocaleDateString()}
            </td>
            <td style={{ textAlign: "right" }}>
              <button
                className={styles.viewBtn}
                onClick={() => onViewDetails(order)}
              >
                <MdVisibility /> View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrderTable;
