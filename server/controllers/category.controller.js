const categoryService = require("../services/category.service");

const listCategories = async (req, res) => {
  const categories = await categoryService.getCategories();
  res
    .status(200)
    .json({
      status: "success",
      results: categories.length,
      data: { categories },
    });
};

const getCategory = async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.id);
  res.status(200).json({ status: "success", data: { category } });
};

const createCategory = async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json({ status: "success", data: { category } });
};

const updateCategory = async (req, res) => {
  const category = await categoryService.updateCategory(
    req.params.id,
    req.body,
  );
  res.status(200).json({ status: "success", data: { category } });
};

const deleteCategory = async (req, res) => {
  await categoryService.deleteCategory(req.params.id);
  res.status(204).send();
};

module.exports = {
  listCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
