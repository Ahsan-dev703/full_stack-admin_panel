import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions & Selectors
import { fetchAnalyticsData } from "@/store/features/analytics/analyticsThunks";
import { selectAnalytics } from "@/store/features/analytics/analyticsSelectors";

// UI Components
import Card from "@/components/UI/Card/Card";
import Select from "@/components/UI/Select/Select";
import AnalyticsHeader from "./AnalyticsHeader";
import MetricCard from "./MetricCard";
import ConversionTrend from "./ConversionTrend";

// Charts & Icons
import {
  SalesAreaChart,
  TrafficPieChart,
} from "@/components/Analytics/AdvancedCharts";
import { MdTrendingUp, MdPublic, MdFlashOn } from "react-icons/md";

import styles from "./Analytics.module.css";
import Loader from "@/components/UI/Loader/Loader";

// Icon Map for serializability - Maps string keys from Redux to actual components
const ICON_MAP = {
  trending: MdTrendingUp,
  public: MdPublic,
  flash: MdFlashOn,
};

const Analytics = () => {
  const dispatch = useDispatch();

  // Destructuring with safety defaults to prevent "undefined" crashes
  const {
    metrics = [],
    performanceData = [],
    trafficSources = [],
    conversionData = [],
    status,
  } = useSelector(selectAnalytics) || {};

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAnalyticsData());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <AnalyticsHeader
        title="Analytics"
        subtitle="Real-time performance metrics and insights."
        dateRangeLabel="Last 30 Days"
      />

      <div className={styles.statsGrid}>
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            {...metric}
            icon={ICON_MAP[metric.iconName]} // Mapping the string iconName to the component
          />
        ))}
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.largeChart}>
          <Card
            title="Sales Performance"
            extra={<Select options={[{ label: "Revenue", value: "r" }]} />}
          >
            <SalesAreaChart data={performanceData} />
          </Card>
        </div>

        <div className={styles.sideChart}>
          <Card title="Traffic Sources">
            <TrafficPieChart data={trafficSources} />
          </Card>
        </div>

        <div className={styles.bottomChart}>
          <ConversionTrend data={conversionData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
