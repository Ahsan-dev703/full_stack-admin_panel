const dashboardService = require("../services/dashboard.service");

const getDashboardOverview = async (req, res) => {
  const data = await dashboardService.getMetricSnapshot();
  res.status(200).json({ status: "success", data });
};

const getAnalytics = async (req, res) => {
  const trends = await dashboardService.getAnalyticsTrends();
  res.status(200).json({ status: "success", data: { trends } });
};

module.exports = {
  getDashboardOverview,
  getAnalytics,
};
