import Card from "@/components/UI/Card/Card";
import styles from "./Analytics.module.css";

const ConversionTrend = ({ data }) => (
  <Card title="Daily Conversion Trend">
    <div className={styles.conversionGrid}>
      {data.map((day) => (
        <div key={day.name} className={styles.conversionBar}>
          <div
            className={styles.barFill}
            style={{ height: `${day.rate * 15}%` }}
          >
            <span className={styles.tooltip}>{day.rate}%</span>
          </div>
          <span className={styles.dayLabel}>{day.name}</span>
        </div>
      ))}
    </div>
  </Card>
);

export default ConversionTrend;
