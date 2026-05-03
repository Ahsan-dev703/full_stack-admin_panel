import { MdCalendarToday } from "react-icons/md";
import styles from "./Analytics.module.css";

const AnalyticsHeader = ({ title, subtitle, dateRangeLabel }) => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
    <div className={styles.headerActions}>
      <button className={styles.datePicker}>
        <MdCalendarToday /> {dateRangeLabel}
      </button>
    </div>
  </header>
);

export default AnalyticsHeader;
