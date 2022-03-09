"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productSchema = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = require("../database/connection");

var _categories = require("./categories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productSchema = _connection.connection.define('products', {
  id: {
    type: _sequelize.default.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: _sequelize.default.TEXT
  },
  categoryid: {
    type: _sequelize.default.INTEGER
  },
  unitmeasure: {
    type: _sequelize.default.TEXT
  },
  pricebyunit: {
    type: _sequelize.default.FLOAT
  }
});
/* 
 -En esta relacion digo que seleccione productos
 - Que una categoria tiene muchos productos y que tome el id como llave
 - Un producto pertenece a una categoria, y tomo la categoryid

*/


exports.productSchema = productSchema;

_categories.categoriesSchema.hasMany(productSchema, {
  foreignKey: 'id',
  sourceKey: 'id'
});

productSchema.belongsTo(_categories.categoriesSchema, {
  foreignKey: 'categoryid',
  sourceKey: 'id'
});