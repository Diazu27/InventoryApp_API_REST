"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _app = require("../app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = (0, _supertest.default)(_app.app);
test('Products are returned in JSON', async () => {
  await api.get('/api/products').expect(200).expect('Content-Type', /application\/json/);
});
afterAll(() => {
  _app.server.close();
});