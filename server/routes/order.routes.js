const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");
const { validateBody } = require("../middleware/validate.middleware");
const {
  createOrderSchema,
  updateOrderSchema,
} = require("../validators/order.validator");
const {
  listOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

const router = express.Router();
router.use(authMiddleware);

router.get("/", listOrders);
router.get("/:id", getOrder);
router.post(
  "/",
  authorizeRoles("admin", "manager"),
  validateBody(createOrderSchema),
  createOrder,
);
router.put(
  "/:id",
  authorizeRoles("admin", "manager"),
  validateBody(updateOrderSchema),
  updateOrder,
);
router.delete("/:id", authorizeRoles("admin"), deleteOrder);

module.exports = router;
