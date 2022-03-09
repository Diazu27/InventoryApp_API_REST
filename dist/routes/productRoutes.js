"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ProductController = require("../controllers/ProductController");

const router = (0, _express.Router)(); // /api/products

router.get('/products', _ProductController.getProducts); // /api/products/10
//router.get('/products/:id', getProductsById);
//router.get('/productsbycategory', productsByCategory);
//router.post('/products', createProduct);
// /api/products/10     -Update
//router.put('/products/:id', updateProduct);
// /api/products/10     -Delete
//router.delete('/products/:id', deleteProduct);

var _default = router;
exports.default = _default;