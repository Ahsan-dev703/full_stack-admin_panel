import { MdTrendingUp, MdPublic, MdFlashOn } from "react-icons/md";
import Card from "@/components/UI/Card/Card";
import Select from "@/components/UI/Select/Select";

// Sub-components
import AnalyticsHeader from "./AnalyticsHeader";
import MetricCard from "./MetricCard";
import ConversionTrend from "./ConversionTrend";

// Charts & Constants
import {
  SalesAreaChart,
  TrafficPieChart,
} from "@/components/Analytics/AdvancedCharts";
import {
  PERFORMANCE_DATA,
  TRAFFIC_SOURCES,
  CONVERSION_DATA,
} from "@/constants/analytics";
import styles from "./Analytics.module.css";

const Analytics = () => {
  const metrics = [
    {
      label: "Avg. Conversion Rate",
      value: "3.42%",
      trend: "+0.8%",
      trendType: "up",
      icon: MdTrendingUp,
    },
    {
      label: "Total Sessions",
      value: "42.5k",
      trend: "+12%",
      trendType: "up",
      icon: MdPublic,
    },
    {
      label: "Bounce Rate",
      value: "24.1%",
      trend: "-2%",
      trendType: "down",
      icon: MdFlashOn,
    },
  ];

  return (
    <div className={styles.container}>
      <AnalyticsHeader
        title="Analytics"
        subtitle="Real-time performance metrics and insights."
        dateRangeLabel="Last 30 Days"
      />

      <div className={styles.statsGrid}>
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.largeChart}>
          <Card
            title="Sales Performance"
            extra={<Select options={[{ label: "Revenue", value: "r" }]} />}
          >
            <SalesAreaChart data={PERFORMANCE_DATA} />
          </Card>
        </div>

        <div className={styles.sideChart}>
          <Card title="Traffic Sources">
            <TrafficPieChart data={TRAFFIC_SOURCES} />
          </Card>
        </div>

        <div className={styles.bottomChart}>
          <ConversionTrend data={CONVERSION_DATA} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
