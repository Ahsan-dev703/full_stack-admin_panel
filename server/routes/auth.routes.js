const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
} = require("../controllers/auth.controller");
const { validateBody } = require("../middleware/validate.middleware");
const { registerSchema, loginSchema } = require("../validators/auth.validator");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", validateBody(registerSchema), registerUser);
router.post("/login", validateBody(loginSchema), loginUser);
router.post("/refresh", refreshToken);
router.post("/logout", authMiddleware, logoutUser);

module.exports = router;
