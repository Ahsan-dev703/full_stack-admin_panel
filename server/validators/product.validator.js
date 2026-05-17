const Joi = require("joi");

const createProductSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().allow(""),
  price: Joi.number().precision(2).min(0).required(),
  category: Joi.string().required(),
  stock: Joi.number().integer().min(0).required(),
  status: Joi.string()
    .valid("active", "draft", "out_of_stock", "archived")
    .default("active"),
  sku: Joi.string().trim().allow(""),
  metadata: Joi.object({
    brand: Joi.string().trim().allow(""),
    color: Joi.string().trim().allow(""),
    size: Joi.string().trim().allow(""),
  }).optional(),
});

const updateProductSchema = createProductSchema.fork(
  ["title", "price", "category", "stock"],
  (schema) => schema.optional(),
);

module.exports = {
  createProductSchema,
  updateProductSchema,
};
