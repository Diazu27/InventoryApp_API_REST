"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _stockController = require("../controllers/stockController");

const router = (0, _express.Router)();
router.get('/', _stockController.getStock);
router.get('/:id', _stockController.getStockById);
router.post('/', _stockController.createStock);
router.put('/:id', _stockController.updateStock);
var _default = router;
exports.default = _default;