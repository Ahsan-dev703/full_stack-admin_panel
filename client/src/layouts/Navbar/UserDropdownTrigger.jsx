import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./Navbar.module.css";

const UserDropdownTrigger = ({ onClick, isOpen }) => (
  <button className={styles.profileTrigger} onClick={onClick}>
    <img
      src="https://ui-avatars.com/api/?name=Admin+User&background=2563eb&color=fff"
      alt="User"
      className={styles.avatar}
    />
    <div className={styles.userInfo}>
      <span className={styles.userName}>Alex Rivera</span>
      <span className={styles.userRole}>Super Admin</span>
    </div>
    <MdKeyboardArrowDown
      className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}
    />
  </button>
);

export default UserDropdownTrigger;
