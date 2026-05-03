import Card from "@/components/UI/Card/Card";
import styles from "./Dashboard.module.css";

const StatCard = ({ title, value, trend, icon, color }) => {
  const isPositive = trend.startsWith("+");

  return (
    <Card className={styles.statCard}>
      <div className={styles.statContent}>
        <div className={styles.statIcon} style={{ color }}>
          {icon}
        </div>
        <div className={styles.statInfo}>
          <span className={styles.statLabel}>{title}</span>
          <h2 className={styles.statValue}>{value}</h2>
          <span
            className={`${styles.statTrend} ${isPositive ? styles.plus : styles.minus}`}
          >
            {trend} <small>vs last month</small>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
