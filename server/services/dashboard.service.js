const Order = require("../models/Order");
const Customer = require("../models/Customer");
const Product = require("../models/Product");
const Analytics = require("../models/Analytics");

const getMetricSnapshot = async () => {
  const [
    totalRevenueResult,
    totalOrders,
    newCustomers,
    activeCustomers,
    recentOrders,
    categoryData,
  ] = await Promise.all([
    Order.aggregate([
      { $match: { paymentStatus: "paid" } },
      { $group: { _id: null, revenue: { $sum: "$total" } } },
    ]),
    Order.countDocuments(),
    Customer.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    }),
    Customer.countDocuments({ status: "active" }),
    Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("customer", "name")
      .lean(),
    Product.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
      { $project: { name: "$category.name", count: 1 } },
    ]),
  ]);

  return {
    stats: [
      {
        title: "Total Revenue",
        value: `$${(totalRevenueResult[0]?.revenue || 0).toFixed(2)}`,
        trend: "+5.8%",
        color: "#10b981",
      },
      {
        title: "Total Orders",
        value: totalOrders.toString(),
        trend: "+2.9%",
        color: "#3b82f6",
      },
      {
        title: "New Customers",
        value: newCustomers.toString(),
        trend: "+9.7%",
        color: "#f59e0b",
      },
      {
        title: "Active Customers",
        value: activeCustomers.toString(),
        trend: "+1.3%",
        color: "#0ea5e9",
      },
    ],
    recentOrders: recentOrders.map((order) => ({
      id: order._id,
      customer: order.customer?.name || "Unknown",
      status: order.status,
      amount: `$${order.total.toFixed(2)}`,
      createdAt: order.createdAt,
    })),
    categoryBreakdown: categoryData.map((entry) => ({
      name: entry.name || "Uncategorized",
      value: entry.count,
    })),
  };
};

const getAnalyticsTrends = async () => {
  const snapshots = await Analytics.find()
    .sort({ recordedAt: -1 })
    .limit(1)
    .lean();
  if (snapshots.length) {
    return snapshots;
  }

  return [
    { name: "Jan", value: 3400 },
    { name: "Feb", value: 4200 },
    { name: "Mar", value: 5600 },
    { name: "Apr", value: 4800 },
    { name: "May", value: 6200 },
    { name: "Jun", value: 7300 },
  ];
};

module.exports = {
  getMetricSnapshot,
  getAnalyticsTrends,
};
