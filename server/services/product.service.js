const slugify = require("slugify");
const Product = require("../models/Product");
const Category = require("../models/Category");
const AppError = require("../utils/appError");

const buildProductSlug = (title) =>
  slugify(title, { lower: true, strict: true });

const createProduct = async (payload, userId, imageUrl) => {
  const slug = buildProductSlug(payload.title);
  const existing = await Product.findOne({ slug });
  if (existing) {
    throw new AppError("A product with this title already exists", 409);
  }

  const category = await Category.findById(payload.category);
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const product = await Product.create({
    ...payload,
    slug,
    images: imageUrl ? [imageUrl] : [],
    createdBy: userId,
  });

  return product;
};

const updateProduct = async (productId, payload, imageUrl) => {
  if (payload.title) {
    payload.slug = buildProductSlug(payload.title);
  }

  if (payload.category) {
    const category = await Category.findById(payload.category);
    if (!category) {
      throw new AppError("Category not found", 404);
    }
  }

  if (imageUrl) {
    payload.images = [imageUrl];
  }

  const product = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return product;
};

const deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    throw new AppError("Product not found", 404);
  }
  return product;
};

const getProductById = async (productId) => {
  const product = await Product.findById(productId).populate(
    "category",
    "name slug",
  );
  if (!product) {
    throw new AppError("Product not found", 404);
  }
  return product;
};

const getProducts = async (queryBuilder) => {
  const products = await queryBuilder.query.populate("category", "name slug");
  return products;
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getProducts,
};
