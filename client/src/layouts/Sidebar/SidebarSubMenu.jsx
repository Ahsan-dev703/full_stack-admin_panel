import { NavLink } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import styles from "./Sidebar.module.css";

const SidebarSubMenu = ({ children, isOpen, isMobile, onClose }) => (
  <div className={`${styles.subMenu} ${isOpen ? styles.subMenuOpen : ""}`}>
    {children.map((child) => (
      <NavLink
        key={child.path}
        to={child.path}
        className={({ isActive }) =>
          `${styles.subNavLink} ${isActive ? styles.subActive : ""}`
        }
        onClick={isMobile ? onClose : undefined}
      >
        <MdChevronRight className={styles.subIcon} />
        {child.label}
      </NavLink>
    ))}
  </div>
);

export default SidebarSubMenu;
