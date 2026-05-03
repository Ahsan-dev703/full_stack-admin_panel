import { MdSearch } from "react-icons/md";
import Card from "@/components/UI/Card/Card";
import Select from "@/components/UI/Select/Select";
import styles from "./Orders.module.css";

const OrderFilters = ({ filterStatus, onStatusChange, statuses }) => (
  <Card className={styles.filterCard}>
    <div className={styles.filters}>
      <div className={styles.searchWrapper}>
        <MdSearch />
        <input type="text" placeholder="Search by Order ID or Customer..." />
      </div>
      <Select
        options={statuses}
        value={filterStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      />
      <input type="date" className={styles.dateInput} />
    </div>
  </Card>
);

export default OrderFilters;
