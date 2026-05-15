import { createAsyncThunk } from "@reduxjs/toolkit";

// Mock API call - Replace with actual axios.get('/api/dashboard')
export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchData",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      stats: [
        {
          id: 1,
          title: "Total Revenue",
          value: "$45,231.89",
          trend: "+12.5%",
          color: "var(--success)",
        },
        {
          id: 2,
          title: "Total Orders",
          value: "1,205",
          trend: "+3.2%",
          color: "var(--primary)",
        },
        {
          id: 3,
          title: "New Customers",
          value: "482",
          trend: "+18.1%",
          color: "var(--warning)",
        },
        {
          id: 4,
          title: "Active Sessions",
          value: "156",
          trend: "-2.4%",
          color: "var(--info)",
        },
      ],
      revenueData: [
        { name: "Jan", revenue: 4000 },
        { name: "Feb", revenue: 30000 },
        { name: "Mar", revenue: 5000 },
        { name: "Apr", revenue: 4500 },
        { name: "May", revenue: 60000 },
        { name: "Jun", revenue: 5500 },
      ],
      categoryData: [
        { name: "Electronics", value: 400 },
        { name: "Fashion", value: 700 },
        { name: "Home", value: 300 },
        { name: "Books", value: 200 },
      ],
      recentOrders: [
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
      ],
    };
  },
);
