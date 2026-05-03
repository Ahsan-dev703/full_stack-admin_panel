import {
  MdSettings,
  MdPerson,
  MdNotifications,
  MdShield,
} from "react-icons/md";
import styles from "./Settings.module.css";

const SettingsSidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: "general", label: "General", icon: <MdSettings /> },
    { id: "account", label: "Account", icon: <MdPerson /> },
    { id: "notifications", label: "Notifications", icon: <MdNotifications /> },
    { id: "security", label: "Security", icon: <MdShield /> },
  ];

  return (
    <aside className={styles.sidebar}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${activeTab === item.id ? styles.active : ""}`}
          onClick={() => onTabChange(item.id)}
        >
          {item.icon} {item.label}
        </button>
      ))}
    </aside>
  );
};

export default SettingsSidebar;
