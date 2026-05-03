import styles from "./Dashboard.module.css";

const DashboardHeader = ({ title, subtitle }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </header>
);

export default DashboardHeader;
