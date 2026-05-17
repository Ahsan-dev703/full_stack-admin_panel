const Customer = require("../models/Customer");
const APIFeatures = require("../utils/apiFeatures");
const customerService = require("../services/customer.service");

const listCustomers = async (req, res) => {
  const queryBuilder = new APIFeatures(Customer.find(), req.query);
  queryBuilder
    .filter()
    .search(["name", "email", "company"])
    .sort("-createdAt")
    .paginate();
  const customers = await customerService.getCustomers(queryBuilder);
  const total = await Customer.countDocuments(queryBuilder.query.getFilter());

  res.status(200).json({
    status: "success",
    results: customers.length,
    data: { customers, total },
  });
};

const getCustomer = async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.id);
  res.status(200).json({ status: "success", data: { customer } });
};

const createCustomer = async (req, res) => {
  const customer = await customerService.createCustomer(req.body);
  res.status(201).json({ status: "success", data: { customer } });
};

const updateCustomer = async (req, res) => {
  const customer = await customerService.updateCustomer(
    req.params.id,
    req.body,
  );
  res.status(200).json({ status: "success", data: { customer } });
};

const deleteCustomer = async (req, res) => {
  await customerService.deleteCustomer(req.params.id);
  res.status(204).send();
};

module.exports = {
  listCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
