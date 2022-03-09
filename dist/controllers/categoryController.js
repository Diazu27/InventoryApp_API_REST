"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getCategoriesById = exports.getCategories = exports.DeleteCategory = exports.CreateCategory = void 0;

var _categories = require("../models/categories");

const getCategories = async (req, res) => {
  const categories = await _categories.categoriesSchema.findAll();
  res.json(categories);
};

exports.getCategories = getCategories;

const getCategoriesById = async (req, res) => {
  const {
    id
  } = req.params;
  const categories = await _categories.categoriesSchema.findOne({
    where: {
      id: id
    }
  });
  res.json(categories);
};

exports.getCategoriesById = getCategoriesById;

const CreateCategory = async (req, res) => {
  const {
    name
  } = req.body;

  try {
    const categories = await _categories.categoriesSchema.create({
      name: name
    });

    if (categories) {
      res.status(200).json({
        message: 'Category created successfully',
        data: categories
      });
    }
  } catch (e) {
    res.status(404).send({
      message: "Error: ".concat(e)
    });
  }
};

exports.CreateCategory = CreateCategory;

const DeleteCategory = async (req, res) => {
  const {
    id
  } = req.params;

  try {
    const rowsDeleted = await _categories.categoriesSchema.destroy({
      where: {
        id: id
      }
    });

    if (rowsDeleted) {
      res.status(200).json({
        message: 'Category deleted successfully',
        rowsDeleted: rowsDeleted
      });
    }
  } catch (e) {
    res.status(404).send({
      message: "Error: ".concat(e)
    });
  }
};

exports.DeleteCategory = DeleteCategory;

const updateCategory = async (req, res) => {
  const {
    name
  } = req.body;
  const {
    id
  } = req.params;

  try {
    const rowsModified = await _categories.categoriesSchema.update({
      name: name
    }, {
      where: {
        id: id
      }
    });

    if (rowsModified) {
      res.status(200).json({
        message: 'Category updated successfully',
        rowsModified: rowsModified
      });
    }
  } catch (e) {
    res.status(404).send({
      message: "Error: ".concat(e)
    });
  }
};

exports.updateCategory = updateCategory;