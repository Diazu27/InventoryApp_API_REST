"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = exports.TryConn = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connection = new _sequelize.default('Inventory_DB', 'postgres', 'Diazu2001', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  logging: false
});
exports.connection = connection;

const TryConn = async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

exports.TryConn = TryConn;