const Joi = require("joi");

const createCustomerSchema = Joi.object({
  name: Joi.string().trim().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().trim().allow(""),
  company: Joi.string().trim().allow(""),
  address: Joi.object({
    street: Joi.string().trim().allow(""),
    city: Joi.string().trim().allow(""),
    postalCode: Joi.string().trim().allow(""),
    country: Joi.string().trim().allow(""),
  }).optional(),
  status: Joi.string().valid("active", "inactive", "blocked").default("active"),
  notes: Joi.string().trim().allow(""),
});

const updateCustomerSchema = createCustomerSchema.fork(
  ["name", "email"],
  (schema) => schema.optional(),
);

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
};
