import Card from "@/components/UI/Card/Card";
import Button from "@/components/UI/Button/Button";
import styles from "./Filters.module.css";

const FilterControls = ({ children, onClearFilters, searchBar }) => (
  <Card>
    <div className={styles.filterCard}>
      <div>{searchBar}</div>
      <div>
        <div className={styles.filterGrid}>{children}</div>
        <div className={styles.actionRow}>
          <Button
            variant="secondary"
            size="sm"
            type="button"
            onClick={onClearFilters}
          >
            Clear filters
          </Button>
        </div>
      </div>
    </div>
  </Card>
);

export default FilterControls;
