import styles from "./Badge.module.css";
const Badge = ({ children, status = "success" }) => (
  <span className={`${styles.badge} ${styles[status]}`}>{children}</span>
);
export default Badge;
