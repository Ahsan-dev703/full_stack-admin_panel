import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import SidebarSubMenu from "./SidebarSubMenu";
import styles from "./Sidebar.module.css";

const SidebarItem = ({ item, isMobile, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;

  const isChildActive =
    hasChildren &&
    item.children.some((child) => location.pathname === child.path);

  const handleToggle = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (isMobile) {
      onClose();
    }
  };

  return (
    <div className={styles.menuWrapper}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `${styles.navLink} ${isActive || isChildActive ? styles.active : ""}`
        }
        onClick={handleToggle}
      >
        <span className={styles.icon}>{item.icon}</span>
        <span className={styles.label}>{item.label}</span>
        {hasChildren && (
          <MdExpandMore
            className={`${styles.arrow} ${isOpen ? styles.arrowRotate : ""}`}
          />
        )}
      </NavLink>

      {hasChildren && (
        <SidebarSubMenu
          children={item.children}
          isOpen={isOpen}
          isMobile={isMobile}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default SidebarItem;
