import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      className={styles.toggleBtn}
      onClick={toggle}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <MdOutlineLightMode className={styles.icon} />
      ) : (
        <MdOutlineDarkMode className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeToggle;
