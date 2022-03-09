"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStock = exports.getStockById = exports.getStock = exports.createStock = void 0;

var _product = require("../models/product");

var _stock = require("../models/stock");

const getStock = async (req, res) => {
  res.json({
    mess: 'holaaa'
  });
};

exports.getStock = getStock;

const getStockById = async (req, res) => {
  const {
    id
  } = req.params;
  console.log(id);
  const products = await _stock.stockSchema.findOne({
    where: {
      productid: id
    },
    include: [_product.productSchema]
  });
  res.json(products);
};

exports.getStockById = getStockById;

const createStock = async (req, res) => {
  const {
    productid,
    unitsinstock
  } = req.body;

  try {
    const stock = await _stock.stockSchema.create({
      productid: productid,
      unitsinstock: unitsinstock
    });

    if (stock) {
      res.status(200).json({
        message: 'Stock created successfuly',
        data: stock
      });
    }
  } catch (e) {
    res.status(404).send({
      message: "Error: ".concat(e)
    });
  }
};

exports.createStock = createStock;

const updateStock = async (req, res) => {
  const {
    productid,
    unitsinstock
  } = req.body;
  const {
    id
  } = req.params;

  try {
    const rowsModified = await _stock.stockSchema.update({
      productid: productid,
      unitsinstock: unitsinstock
    }, {
      where: {
        productid: id
      }
    });

    if (rowsModified) {
      res.status(200).json({
        message: 'Stock updated successfully',
        rowsModified: rowsModified
      });
    }
  } catch (e) {
    res.status(404).send({
      message: "Error: ".concat(e)
    });
  }
};

exports.updateStock = updateStock;