const Joi = require("joi");

const updateProfileSchema = Joi.object({
  name: Joi.string().trim().min(2).optional(),
  email: Joi.string().email().optional(),
  avatar: Joi.string().uri().optional(),
});

const updatePasswordSchema = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
});

const updateSettingsSchema = Joi.object({
  theme: Joi.string().valid("light", "dark").optional(),
  language: Joi.string().trim().optional(),
  timezone: Joi.string().trim().optional(),
  notifications: Joi.object({
    email: Joi.boolean().optional(),
    sms: Joi.boolean().optional(),
    push: Joi.boolean().optional(),
  }).optional(),
  preferences: Joi.object({
    weeklySummary: Joi.boolean().optional(),
    compactView: Joi.boolean().optional(),
  }).optional(),
});

module.exports = {
  updateProfileSchema,
  updatePasswordSchema,
  updateSettingsSchema,
};
