const express = require("express");
const {
  getDashboardOverview,
  getAnalytics,
} = require("../controllers/dashboard.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();
router.use(authMiddleware);

router.get("/overview", getDashboardOverview);
router.get("/analytics", getAnalytics);

module.exports = router;
