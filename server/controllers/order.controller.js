const Order = require("../models/Order");
const APIFeatures = require("../utils/apiFeatures");
const orderService = require("../services/order.service");

const listOrders = async (req, res) => {
  const queryBuilder = new APIFeatures(Order.find(), req.query);
  queryBuilder
    .filter()
    .search(["status", "paymentStatus"])
    .sort("-createdAt")
    .paginate();
  const orders = await orderService.getOrders(queryBuilder);
  const total = await Order.countDocuments(queryBuilder.query.getFilter());

  res.status(200).json({
    status: "success",
    results: orders.length,
    data: { orders, total },
  });
};

const getOrder = async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  res.status(200).json({ status: "success", data: { order } });
};

const createOrder = async (req, res) => {
  const order = await orderService.createOrder(req.body, req.user.id);
  res.status(201).json({ status: "success", data: { order } });
};

const updateOrder = async (req, res) => {
  const order = await orderService.updateOrder(req.params.id, req.body);
  res.status(200).json({ status: "success", data: { order } });
};

const deleteOrder = async (req, res) => {
  await orderService.deleteOrder(req.params.id);
  res.status(204).send();
};

module.exports = {
  listOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
