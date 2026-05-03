import { MdSearch } from "react-icons/md";
import styles from "./Navbar.module.css";

const NavSearch = () => (
  <div className={styles.searchWrapper}>
    <MdSearch className={styles.searchIcon} />
    <input
      type="text"
      placeholder="Search transactions, orders..."
      className={styles.searchInput}
    />
    <kbd className={styles.searchShortcut}>⌘K</kbd>
  </div>
);

export default NavSearch;
