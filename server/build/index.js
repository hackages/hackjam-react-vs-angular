"use strict";

var _express = _interopRequireDefault(require("express"));

var _fetcher = require("./fetcher");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)()); //routes

app.get('/search/:term', (req, res) => (0, _fetcher.search)(req, res));
app.get('/cryptos', (req, res) => (0, _fetcher.getAll)(req, res));
app.get('/cryptos/:id', (req, res) => (0, _fetcher.getById)(req, res));
app.listen(process.env.PORT || 4000, console.log('server running on port 4000'));
(0, _fetcher.fetchData)();
setInterval(_fetcher.fetchData, 300000);