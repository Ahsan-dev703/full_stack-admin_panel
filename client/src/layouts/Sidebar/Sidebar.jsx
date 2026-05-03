import SidebarBrand from "./SidebarBrand";
import SidebarItem from "./SidebarItem";
import { SIDEBAR_MENU_ITEMS } from "@/config/menu.config";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, onClose }) => {
  const isMobile = window.innerWidth <= 1024;

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
