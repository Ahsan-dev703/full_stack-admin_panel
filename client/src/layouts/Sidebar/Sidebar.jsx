import { useSelector } from "react-redux";
import SidebarBrand from "./SidebarBrand";
import SidebarItem from "./SidebarItem";
import { SIDEBAR_MENU_ITEMS } from "@/config/menu.config";
import { selectCurrentUser } from "@/store/features/auth/authSelectors";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, onClose }) => {
  const isMobile = window.innerWidth <= 1024;
  const user = useSelector(selectCurrentUser);

  const avatar =
    user?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.name || "Guest User",
    )}&background=2563eb&color=fff`;

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}
        onClick={onClose}
      />

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <SidebarBrand />

        <div className={styles.profileSection}>
          <img
            src={avatar}
            alt={user?.name || "Guest User"}
            className={styles.profileAvatar}
          />
          <div className={styles.profileDetails}>
            <span className={styles.profileName}>
              {user?.name || "Guest User"}
            </span>
            <span className={styles.profileRole}>
              {user?.role || "Visitor"}
            </span>
          </div>
        </div>

        <nav className={styles.navigation}>
          {SIDEBAR_MENU_ITEMS.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isMobile={isMobile}
              onClose={onClose}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
