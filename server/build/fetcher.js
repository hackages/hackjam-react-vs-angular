"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getById = exports.getAll = exports.search = exports.fetchData = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const URL = 'https://api.coinmarketcap.com/v2/ticker/';
const URL_DB = __dirname + '/../db/db.json';

const fetchData = () => {
  _axios.default.get(URL).then(({
    data
  }) => _fs.default.writeFile(URL_DB, JSON.stringify({
    cryptos: Object.values(data.data),
    metadata: data.metadata
  }), err => {
    err ? console.log(err) : console.log('fetch and write ok');
  })).catch(err => console.log(err));
};

exports.fetchData = fetchData;

const search = ({
  params: {
    term
  }
}, res) => {
  const result = _fs.default.readFileSync(URL_DB);

  const datas = JSON.parse(result);
  const toReturn = datas.cryptos.filter(data => data.name === term);
  res.json({
    cryptos: toReturn,
    metadata: _objectSpread({}, datas.metadata, {
      num_cryptocurrencies: 1
    })
  });
};

exports.search = search;

const getAll = ({
  query: {
    start: startReq,
    limit: limitReq
  }
}, res) => {
  const result = _fs.default.readFileSync(URL_DB);

  const datas = JSON.parse(result);
  const start = startReq && parseInt(startReq, 10);
  const limit = limitReq && parseInt(limitReq, 10);
  let limited = [];
  const length = datas.cryptos.length;

  if (start || limit) {
    limited = datas.cryptos.slice(start && start !== 0 ? start - 1 : 0, limit ? limit > length ? length : limit + (start ? start - 1 : 0) : length);
  } else {
    limited = datas.cryptos;
  }

  res.json({
    cryptos: limited,
    metadata: _objectSpread({}, datas.metadata, {
      num_cryptocurrencies: limited.length
    })
  });
};

exports.getAll = getAll;

const getById = ({
  params: {
    id
  }
}, res) => {
  const result = _fs.default.readFileSync(URL_DB);

  const datas = JSON.parse(result);
  const toReturn = datas.cryptos.find(data => data.id === parseInt(id, 10));
  res.json({
    cryptos: toReturn,
    metadata: _objectSpread({}, datas.metadata, {
      num_cryptocurrencies: 1
    })
  });
};

exports.getById = getById;