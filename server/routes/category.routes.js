const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");
const { validateBody } = require("../middleware/validate.middleware");
const {
  createCategorySchema,
  updateCategorySchema,
} = require("../validators/category.validator");
const {
  listCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const router = express.Router();
router.use(authMiddleware);

router.get("/", listCategories);
router.get("/:id", getCategory);
router.post(
  "/",
  authorizeRoles("admin", "manager"),
  validateBody(createCategorySchema),
  createCategory,
);
router.put(
  "/:id",
  authorizeRoles("admin", "manager"),
  validateBody(updateCategorySchema),
  updateCategory,
);
router.delete("/:id", authorizeRoles("admin"), deleteCategory);

module.exports = router;
