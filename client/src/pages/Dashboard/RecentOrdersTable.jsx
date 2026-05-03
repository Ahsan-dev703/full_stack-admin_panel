import Card from "@/components/UI/Card/Card";
import Badge from "@/components/UI/Badge/Badge";
import styles from "./Dashboard.module.css";

const RecentOrdersTable = ({ orders }) => {
  return (
    <Card
      title="Recent Orders"
      extra={<button className={styles.viewAll}>View All</button>}
    >
      <div className={styles.tableResponsive}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#ORD-772{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <Badge status={order.id % 2 === 0 ? "success" : "warning"}>
                    {order.status}
                  </Badge>
                </td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default RecentOrdersTable;
