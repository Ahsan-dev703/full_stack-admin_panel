const Category = require("../models/Category");
const AppError = require("../utils/appError");

const createCategory = async (payload) => {
  const existing = await Category.findOne({ name: payload.name.trim() });
  if (existing) {
    throw new AppError("Category already exists", 409);
  }
  return Category.create(payload);
};

const getCategories = async () => Category.find().sort({ name: 1 });

const getCategoryById = async (categoryId) => {
  const category = await Category.findById(categoryId);
  if (!category) {
    throw new AppError("Category not found", 404);
  }
  return category;
};

const updateCategory = async (categoryId, payload) => {
  const category = await Category.findByIdAndUpdate(categoryId, payload, {
    new: true,
    runValidators: true,
  });
  if (!category) {
    throw new AppError("Category not found", 404);
  }
  return category;
};

const deleteCategory = async (categoryId) => {
  const category = await Category.findByIdAndDelete(categoryId);
  if (!category) {
    throw new AppError("Category not found", 404);
  }
  return category;
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
