import styles from "./Analytics.module.css";

const MetricCard = ({ label, value, trend, trendType, icon: Icon }) => (
  <div className={styles.miniCard}>
    <span className={styles.cardLabel}>{label}</span>
    <div className={styles.cardValue}>
      {value} <span className={styles[trendType]}>{trend}</span>
    </div>
    <Icon className={styles.cardIcon} />
  </div>
);

export default MetricCard;
