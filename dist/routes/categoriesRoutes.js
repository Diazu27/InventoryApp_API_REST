"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _categoryController = require("../controllers/categoryController");

const router = (0, _express.Router)();
router.get('/', _categoryController.getCategories);
router.get('/:id', _categoryController.getCategoriesById);
router.post('/', _categoryController.CreateCategory);
router.delete('/:id', _categoryController.DeleteCategory);
router.put('/:id', _categoryController.updateCategory);
var _default = router;
exports.default = _default;