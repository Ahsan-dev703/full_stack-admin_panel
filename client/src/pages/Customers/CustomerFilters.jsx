import { MdSearch } from "react-icons/md";
import Card from "@/components/UI/Card/Card";
import Select from "@/components/UI/Select/Select";
import styles from "./Customers.module.css";

const CustomerFilters = ({ onSearchChange, statusOptions }) => (
  <Card className={styles.filterCard}>
    <div className={styles.filters}>
      <div className={styles.searchWrapper}>
        <MdSearch />
        <input
          type="text"
          placeholder="Search by name, email, or ID..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <Select options={statusOptions} defaultValue="all" />
    </div>
  </Card>
);

export default CustomerFilters;
