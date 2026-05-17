const Joi = require("joi");

const createCategorySchema = Joi.object({
  name: Joi.string().trim().min(2).required(),
  slug: Joi.string().trim().min(2).required(),
  description: Joi.string().trim().allow(""),
  status: Joi.string().valid("active", "inactive").default("active"),
});

const updateCategorySchema = createCategorySchema.fork(
  ["name", "slug"],
  (schema) => schema.optional(),
);

module.exports = {
  createCategorySchema,
  updateCategorySchema,
};
