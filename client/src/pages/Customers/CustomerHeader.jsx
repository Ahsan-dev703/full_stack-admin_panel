import { MdPersonAdd } from "react-icons/md";
import Button from "@/components/UI/Button/Button";
import styles from "./Customers.module.css";

const CustomerHeader = ({ onAddCustomer }) => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.title}>Customers</h1>
      <p className={styles.subtitle}>
        View and manage your customer relationships.
      </p>
    </div>
    <Button onClick={onAddCustomer}>
      <MdPersonAdd /> Add Customer
    </Button>
  </header>
);

export default CustomerHeader;
