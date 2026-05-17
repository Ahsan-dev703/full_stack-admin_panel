const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");
const { validateBody } = require("../middleware/validate.middleware");
const {
  createCustomerSchema,
  updateCustomerSchema,
} = require("../validators/customer.validator");
const {
  listCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer.controller");

const router = express.Router();
router.use(authMiddleware);

router.get("/", listCustomers);
router.get("/:id", getCustomer);
router.post(
  "/",
  authorizeRoles("admin", "manager", "support"),
  validateBody(createCustomerSchema),
  createCustomer,
);
router.put(
  "/:id",
  authorizeRoles("admin", "manager", "support"),
  validateBody(updateCustomerSchema),
  updateCustomer,
);
router.delete("/:id", authorizeRoles("admin"), deleteCustomer);

module.exports = router;
