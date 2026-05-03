import { MdOpenInNew, MdBlock, MdDeleteOutline } from "react-icons/md";
import Badge from "@/components/UI/Badge/Badge";
import styles from "./Customers.module.css";

const CustomerTable = ({ customers, onSelectCustomer }) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Status</th>
          <th>Orders</th>
          <th>Total Spent</th>
          <th>Join Date</th>
          <th style={{ textAlign: "right" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>
              <div className={styles.userCell}>
                <img src={customer.avatar} alt="" className={styles.avatar} />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{customer.name}</span>
                  <span className={styles.userEmail}>{customer.email}</span>
                </div>
              </div>
            </td>
            <td>
              <Badge status={customer.status}>{customer.status}</Badge>
            </td>
            <td>{customer.orders} orders</td>
            <td>
              <strong>${customer.totalSpent.toLocaleString()}</strong>
            </td>
            <td>{new Date(customer.joinDate).toLocaleDateString()}</td>
            <td className={styles.lastChild}>
              <div className={styles.actionRow}>
                <button
                  className={styles.iconBtn}
                  onClick={() => onSelectCustomer(customer)}
                >
                  <MdOpenInNew />
                </button>
                <button className={styles.iconBtn}>
                  <MdBlock />
                </button>
                <button className={styles.iconBtn}>
                  <MdDeleteOutline />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CustomerTable;
