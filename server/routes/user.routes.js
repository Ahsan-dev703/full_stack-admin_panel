const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { validateBody } = require("../middleware/validate.middleware");
const {
  updateProfileSchema,
  updatePasswordSchema,
  updateSettingsSchema,
} = require("../validators/user.validator");
const {
  getCurrentProfile,
  updateProfile,
  updatePassword,
  updateSettings,
} = require("../controllers/user.controller");

const router = express.Router();
router.use(authMiddleware);

router.get("/me", getCurrentProfile);
router.put("/me", validateBody(updateProfileSchema), updateProfile);
router.put("/me/password", validateBody(updatePasswordSchema), updatePassword);
router.put("/me/settings", validateBody(updateSettingsSchema), updateSettings);

module.exports = router;
