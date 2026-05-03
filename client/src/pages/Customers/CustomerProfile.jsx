import { MdEmail, MdPhone } from "react-icons/md";
import Button from "@/components/UI/Button/Button";
import styles from "./Customers.module.css";

const CustomerProfile = ({ customer }) => {
  if (!customer) return null;

  return (
    <div className={styles.profileDetails}>
      <div className={styles.profileHeader}>
        <img src={customer.avatar} alt="" className={styles.largeAvatar} />
        <h3>{customer.name}</h3>
        <p>{customer.id}</p>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <MdEmail /> <span>{customer.email}</span>
        </div>
        <div className={styles.infoItem}>
          <MdPhone /> <span>{customer.phone}</span>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statBox}>
          <label>Total Orders</label>
          <p>{customer.orders}</p>
        </div>
        <div className={styles.statBox}>
          <label>Total Spent</label>
          <p>${customer.totalSpent.toFixed(2)}</p>
        </div>
      </div>

      <div className={styles.modalActions}>
        <Button variant="secondary" style={{ width: "100%" }}>
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default CustomerProfile;
