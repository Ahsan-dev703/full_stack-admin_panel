const APIFeatures = require("../utils/apiFeatures");
const Product = require("../models/Product");
const productService = require("../services/product.service");

const listProducts = async (req, res) => {
  const queryBuilder = new APIFeatures(Product.find(), req.query);
  queryBuilder
    .filter()
    .search(["title", "description", "sku"])
    .sort("-createdAt")
    .paginate();

  const products = await productService.getProducts(queryBuilder);
  const total = await Product.countDocuments(queryBuilder.query.getFilter());

  res.status(200).json({
    status: "success",
    results: products.length,
    data: { products, total },
  });
};

const getProduct = async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.status(200).json({ status: "success", data: { product } });
};

const createProduct = async (req, res) => {
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  const product = await productService.createProduct(
    req.body,
    req.user.id,
    imageUrl,
  );
  res.status(201).json({ status: "success", data: { product } });
};

const updateProduct = async (req, res) => {
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  const product = await productService.updateProduct(
    req.params.id,
    req.body,
    imageUrl,
  );
  res.status(200).json({ status: "success", data: { product } });
};

const deleteProduct = async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.status(204).send();
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
