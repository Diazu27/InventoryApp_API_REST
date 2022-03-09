"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stockSchema = void 0;

var _sequelize = require("sequelize");

var _connection = require("../database/connection");

var _product = require("./product");

const stockSchema = _connection.connection.define('stock', {
  productid: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true
  },
  unitsinstock: {
    type: _sequelize.Sequelize.FLOAT
  }
}, {
  freezeTableName: true
});

exports.stockSchema = stockSchema;
stockSchema.belongsTo(_product.productSchema, {
  foreignKey: 'productid'
});