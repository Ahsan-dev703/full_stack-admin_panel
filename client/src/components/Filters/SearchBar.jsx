import { MdSearch } from "react-icons/md";
import Input from "@/components/UI/Input/Input";
import styles from "./Filters.module.css";

const SearchBar = ({ value, onChange, placeholder }) => (
  <div className={styles.searchBar}>
    <MdSearch className={styles.searchIcon} />
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.searchInput}
    />
  </div>
);

export default SearchBar;
