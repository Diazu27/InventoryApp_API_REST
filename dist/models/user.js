"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = void 0;

var _dist = require("sequelize/dist");

var _connection = require("../database/connection");

const userSchema = _connection.connection.define('users', {
  id: {
    type: _dist.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _dist.Sequelize.TEXT
  },
  lastname: {
    type: _dist.Sequelize.TEXT
  },
  identification: {
    type: _dist.Sequelize.TEXT
  },
  email: {
    type: _dist.Sequelize.TEXT
  },
  birthdate: {
    type: _dist.Sequelize.DATE
  }
});

exports.userSchema = userSchema;