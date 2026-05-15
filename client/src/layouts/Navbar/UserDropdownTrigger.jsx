import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./Navbar.module.css";

const UserDropdownTrigger = ({ onClick, isOpen, user }) => {
  const name = user?.name || "Guest User";
  const role = user?.role || "Visitor";
  const avatar =
    user?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff`;

  return (
    <button className={styles.profileTrigger} onClick={onClick}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <div className={styles.userInfo}>
        <span className={styles.userName}>{name}</span>
        <span className={styles.userRole}>{role}</span>
      </div>
      <MdKeyboardArrowDown
        className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}
      />
    </button>
  );
};

export default UserDropdownTrigger;
