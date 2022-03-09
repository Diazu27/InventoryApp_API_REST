"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = exports.app = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes"));

var _categoriesRoutes = _interopRequireDefault(require("./routes/categoriesRoutes"));

var _stockRoutes = _interopRequireDefault(require("./routes/stockRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import routes
//Init API
const app = (0, _express.default)(); //Midlewares

exports.app = app;
app.use((0, _morgan.default)('dev'));
app.use((0, _express.json)()); //Set routes

app.use('/api', _productRoutes.default); //app.use('/api/categories', categoriesRoutes)
//app.use('/api/stock', stockRoutes)
//Run server

const port = 4000 || process.env.PORT;
const server = app.listen(port, () => {
  console.log("Server running on port ".concat(port));
});
exports.server = server;