import {
  MdNotificationsNone,
  MdOutlineChatBubbleOutline,
} from "react-icons/md";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.css";

const NavActions = () => (
  <div className={styles.actions}>
    <button className={styles.actionBtn} aria-label="Messages">
      <MdOutlineChatBubbleOutline />
    </button>

    <button className={styles.actionBtn} aria-label="Notifications">
      <MdNotificationsNone />
      <span className={styles.badge} />
    </button>

    <div className={styles.divider} />

    <ThemeToggle />
  </div>
);

export default NavActions;
