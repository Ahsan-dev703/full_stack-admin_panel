import { Link } from "react-router-dom";
import { MdPersonOutline, MdLogout, MdSettings } from "react-icons/md";
import styles from "./Navbar.module.css";

const UserDropdownMenu = ({ onItemClick }) => (
  <div className={styles.dropdownMenu}>
    <Link to="/profile" className={styles.menuItem} onClick={onItemClick}>
      <MdPersonOutline /> Profile
    </Link>

    <Link to="/settings" className={styles.menuItem} onClick={onItemClick}>
      <MdSettings /> Settings
    </Link>

    <hr className={styles.menuDivider} />

    <div
      className={`${styles.menuItem} ${styles.logout}`}
      onClick={() => {
        onItemClick();
        console.log("Logout triggered");
      }}
    >
      <MdLogout /> Logout
    </div>
  </div>
);

export default UserDropdownMenu;
