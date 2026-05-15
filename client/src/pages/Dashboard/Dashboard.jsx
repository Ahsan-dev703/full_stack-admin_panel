import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions & Selectors
import { fetchDashboardData } from "@/store/features/dashboard/dashboardThunks";
import { selectDashboardData } from "@/store/features/dashboard/dashboardSelectors";

// UI Components
import Badge from "@/components/UI/Badge/Badge";
import Card from "@/components/UI/Card/Card";
import {
  RevenueLineChart,
  OrdersBarChart,
  CategoryPieChart,
} from "@/components/Analytics/DashboardCharts";

// Icons
import {
  MdTrendingUp,
  MdAttachMoney,
  MdShoppingCart,
  MdPeople,
} from "react-icons/md";

// Page Sub-components
import DashboardHeader from "@/pages/Dashboard/DashboardHeader";
import StatCard from "@/pages/Dashboard/StatCard";
import RecentOrdersTable from "@/pages/Dashboard/RecentOrdersTable";

import styles from "./Dashboard.module.css";
import Loader from "@/components/UI/Loader/Loader";

const iconMap = {
  1: <MdAttachMoney />,
  2: <MdShoppingCart />,
  3: <MdPeople />,
  4: <MdTrendingUp />,
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const { stats, revenueData, categoryData, recentOrders, status } =
    useSelector(selectDashboardData);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDashboardData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  // Error State Handling (Optional but recommended)
  if (status === "failed") {
    return <div className={styles.error}>Error loading dashboard data.</div>;
  }

  return (
    <div className={styles.container}>
      <DashboardHeader
        title="Dashboard Overview"
        subtitle="Welcome back, here is what's happening today."
      />

      <section className={styles.statsGrid}>
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} icon={iconMap[stat.id]} />
        ))}
      </section>

      <div className={styles.mainGrid}>
        <div className={styles.chartArea}>
          <Card
            title="Monthly Revenue"
            extra={<Badge status="success">Live</Badge>}
          >
            <RevenueLineChart data={revenueData} />
          </Card>
        </div>

        <div className={styles.activityArea}>
          <Card title="Sales by Category">
            <CategoryPieChart data={categoryData} />
          </Card>
        </div>

        <div className={styles.tableArea}>
          <Card
            title="Order Volume"
            extra={<button className={styles.viewAll}>Details</button>}
          >
            <OrdersBarChart
              data={revenueData.map((d) => ({
                name: d.name,
                orders: Math.floor(d.revenue / 100),
              }))}
            />
          </Card>
        </div>

        <div className={styles.tableArea} style={{ gridColumn: "1 / -1" }}>
          <RecentOrdersTable orders={recentOrders} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
