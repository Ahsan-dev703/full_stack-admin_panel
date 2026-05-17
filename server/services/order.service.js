const Order = require("../models/Order");
const Customer = require("../models/Customer");
const AppError = require("../utils/appError");

const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId)
    .populate("customer", "name email phone status")
    .populate("items.product", "title price");

  if (!order) {
    throw new AppError("Order not found", 404);
  }

  return order;
};

const getOrders = async (queryBuilder) => {
  const orders = await queryBuilder.query
    .populate("customer", "name email phone")
    .populate("items.product", "title sku price");
  return orders;
};

const createOrder = async (payload, userId) => {
  const customer = await Customer.findById(payload.customer);
  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  const order = await Order.create({
    ...payload,
    createdBy: userId,
  });

  customer.totalOrders += 1;
  customer.totalSpent += order.total;
  await customer.save();

  return order;
};

const updateOrder = async (orderId, payload) => {
  const order = await Order.findById(orderId);
  if (!order) {
    throw new AppError("Order not found", 404);
  }

  const wasPaid = order.paymentStatus === "paid";
  Object.assign(order, payload);

  if (!wasPaid && payload.paymentStatus === "paid") {
    order.paidAt = new Date();
  }

  if (payload.status === "delivered" && !order.deliveredAt) {
    order.deliveredAt = new Date();
  }

  await order.save();
  return order;
};

const deleteOrder = async (orderId) => {
  const order = await Order.findByIdAndDelete(orderId);
  if (!order) {
    throw new AppError("Order not found", 404);
  }
  return order;
};

module.exports = {
  getOrderById,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
