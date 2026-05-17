const Joi = require("joi");

const orderItemSchema = Joi.object({
  product: Joi.string().required(),
  name: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  price: Joi.number().precision(2).min(0).required(),
  subtotal: Joi.number().precision(2).min(0).required(),
});

const createOrderSchema = Joi.object({
  customer: Joi.string().required(),
  items: Joi.array().items(orderItemSchema).min(1).required(),
  status: Joi.string()
    .valid("pending", "processing", "shipped", "delivered", "cancelled")
    .default("pending"),
  paymentStatus: Joi.string()
    .valid("pending", "paid", "failed", "refunded")
    .default("pending"),
  shippingAddress: Joi.object({
    address: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    postalCode: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
  }).required(),
  total: Joi.number().precision(2).min(0).required(),
  tax: Joi.number().precision(2).min(0).default(0),
  shippingCost: Joi.number().precision(2).min(0).default(0),
  notes: Joi.string().trim().allow(""),
});

const updateOrderSchema = createOrderSchema.fork(
  ["customer", "items", "total"],
  (schema) => schema.optional(),
);

module.exports = {
  createOrderSchema,
  updateOrderSchema,
};
