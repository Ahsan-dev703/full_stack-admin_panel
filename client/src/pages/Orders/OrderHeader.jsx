import { MdFileDownload } from "react-icons/md";
import styles from "./Orders.module.css";

const OrderHeader = ({ onExport }) => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.title}>Orders</h1>
      <p className={styles.subtitle}>Track and manage customer shipments.</p>
    </div>
    <button className={styles.exportBtn} onClick={onExport}>
      <MdFileDownload /> Export CSV
    </button>
  </header>
);

export default OrderHeader;
