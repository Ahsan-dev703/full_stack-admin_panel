const Customer = require("../models/Customer");
const AppError = require("../utils/appError");

const getCustomerById = async (customerId) => {
  const customer = await Customer.findById(customerId);
  if (!customer) {
    throw new AppError("Customer not found", 404);
  }
  return customer;
};

const getCustomers = async (queryBuilder) => {
  const customers = await queryBuilder.query;
  return customers;
};

const createCustomer = async (payload) => {
  const existing = await Customer.findOne({
    email: payload.email.trim().toLowerCase(),
  });
  if (existing) {
    throw new AppError("Customer email already exists", 409);
  }

  const customer = await Customer.create({
    ...payload,
    email: payload.email.trim().toLowerCase(),
  });
  return customer;
};

const updateCustomer = async (customerId, payload) => {
  if (payload.email) {
    payload.email = payload.email.trim().toLowerCase();
    const duplicate = await Customer.findOne({
      email: payload.email,
      _id: { $ne: customerId },
    });
    if (duplicate) {
      throw new AppError("Email is already linked to another customer", 409);
    }
  }

  const customer = await Customer.findByIdAndUpdate(customerId, payload, {
    new: true,
    runValidators: true,
  });
  if (!customer) {
    throw new AppError("Customer not found", 404);
  }
  return customer;
};

const deleteCustomer = async (customerId) => {
  const customer = await Customer.findByIdAndDelete(customerId);
  if (!customer) {
    throw new AppError("Customer not found", 404);
  }
  return customer;
};

module.exports = {
  getCustomerById,
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
