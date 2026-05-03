import { MdSearch } from "react-icons/md";
import Card from "@/components/UI/Card/Card";
import Select from "@/components/UI/Select/Select";
import styles from "./Products.module.css";

const ProductFilters = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}) => (
  <Card className={styles.filterCard}>
    <div className={styles.filters}>
      <div className={styles.searchBox}>
        <MdSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <Select
        options={categories}
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      />
    </div>
  </Card>
);

export default ProductFilters;
