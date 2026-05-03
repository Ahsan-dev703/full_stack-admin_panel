import styles from "./Orders.module.css";

const OrderDetails = ({ order }) => {
  if (!order) return null;

  return (
    <div className={styles.modalContent}>
      <div className={styles.statusTimeline}>
        <div className={styles.timelineItem} data-active="true">
          <div className={styles.dot} />
          <div>
            <p>Order Placed</p>
            <span>{new Date(order.date).toLocaleString()}</span>
          </div>
        </div>
        <div
          className={styles.timelineItem}
          data-active={order.orderStatus !== "pending"}
        >
          <div className={styles.dot} />
          <div>
            <p>Processing</p>
            <span>In Warehouse</span>
          </div>
        </div>
      </div>

      <div className={styles.orderSummary}>
        <h3>Customer Information</h3>
        <p>
          <strong>Name:</strong> {order.customer.name}
        </p>
        <p>
          <strong>Email:</strong> {order.customer.email}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
