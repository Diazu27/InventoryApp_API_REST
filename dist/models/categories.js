"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesSchema = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = require("../database/connection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const categoriesSchema = _connection.connection.define('categories', {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.default.TEXT
  }
});

exports.categoriesSchema = categoriesSchema;