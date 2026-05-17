const express = require("express");
const upload = require("../middleware/upload.middleware");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");
const { validateBody } = require("../middleware/validate.middleware");
const {
  createProductSchema,
  updateProductSchema,
} = require("../validators/product.validator");
const {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", authMiddleware, listProducts);
router.get("/:id", authMiddleware, getProduct);
router.post(
  "/",
  authMiddleware,
  authorizeRoles("admin", "manager"),
  upload.single("image"),
  validateBody(createProductSchema),
  createProduct,
);
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("admin", "manager"),
  upload.single("image"),
  validateBody(updateProductSchema),
  updateProduct,
);
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteProduct);

module.exports = router;
