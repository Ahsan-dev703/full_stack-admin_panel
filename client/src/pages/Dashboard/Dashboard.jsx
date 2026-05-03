import Badge from "@/components/UI/Badge/Badge";
import Card from "@/components/UI/Card/Card";
import {
  RevenueLineChart,
  OrdersBarChart,
  CategoryPieChart,
} from "@/components/Analytics/DashboardCharts";
import {
  MdTrendingUp,
  MdAttachMoney,
  MdShoppingCart,
  MdPeople,
} from "react-icons/md";

// Sub-components
import DashboardHeader from "@/pages/Dashboard/DashboardHeader";
import StatCard from "@/pages/Dashboard/StatCard";
import RecentOrdersTable from "@/pages/Dashboard/RecentOrdersTable";

import styles from "./Dashboard.module.css";

// Mock Data
const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
];

const categoryData = [
  { name: "Electronics", value: 400 },
  { name: "Fashion", value: 700 },
  { name: "Home", value: 300 },
  { name: "Books", value: 200 },
];

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: "Total Revenue",
      value: "$45,231.89",
      trend: "+12.5%",
      icon: <MdAttachMoney />,
      color: "var(--success)",
    },
    {
      id: 2,
      title: "Total Orders",
      value: "1,205",
      trend: "+3.2%",
      icon: <MdShoppingCart />,
      color: "var(--primary)",
    },
    {
      id: 3,
      title: "New Customers",
      value: "482",
      trend: "+18.1%",
      icon: <MdPeople />,
      color: "var(--warning)",
    },
    {
      id: 4,
      title: "Active Sessions",
      value: "156",
      trend: "-2.4%",
      icon: <MdTrendingUp />,
      color: "var(--info)",
    },
  ];

  const recentOrders = [
    {
      id: 1,
      customer: "Customer Name 1",
      status: "Shipped",
      amount: "$240.00",
    },
    {
      id: 2,
      customer: "Customer Name 2",
      status: "Shipped",
      amount: "$240.00",
    },
    {
      id: 3,
      customer: "Customer Name 3",
      status: "Shipped",
      amount: "$240.00",
    },
  ];

  return (
    <div className={styles.container}>
      <DashboardHeader
        title="Dashboard Overview"
        subtitle="Welcome back, here is what's happening today."
      />

      <section className={styles.statsGrid}>
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
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
                orders: d.revenue / 100,
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
