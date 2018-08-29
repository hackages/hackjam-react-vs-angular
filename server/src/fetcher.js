import axios from 'axios'
import fs from 'fs'

const URL = 'https://api.coinmarketcap.com/v2/ticker/'
const URL_DB = __dirname + '/../db/db.json'

export const fetchData = () => {
  axios
    .get(URL)
    .then(({data}) =>
      fs.writeFile(
        URL_DB,
        JSON.stringify({
          cryptos: Object.values(data.data),
          metadata: data.metadata,
        }),
        err => {
          err ? console.log(err) : console.log('fetch and write ok')
        }
      )
    )
    .catch(err => console.log(err))
}

export const search = ({params: {term}}, res) => {
  const result = fs.readFileSync(URL_DB)
  const datas = JSON.parse(result)
  const toReturn = datas.cryptos.filter(data => data.name === term)
  res.json({
    cryptos: toReturn,
    metadata: {...datas.metadata, num_cryptocurrencies: 1},
  })
}

export const getAll = ({query: {start: startReq, limit: limitReq}}, res) => {
  const result = fs.readFileSync(URL_DB)
  const datas = JSON.parse(result)

  const start = startReq && parseInt(startReq, 10)
  const limit = limitReq && parseInt(limitReq, 10)
  let limited = []
  const length = datas.cryptos.length
  if (start || limit) {
    limited = datas.cryptos.slice(
      start && start !== 0 ? start - 1 : 0,
      limit
        ? limit > length
          ? length
          : limit + (start ? start - 1 : 0)
        : length
    )
  } else {
    limited = datas.cryptos
  }
  res.json({
    cryptos: limited,
    metadata: {...datas.metadata, num_cryptocurrencies: limited.length},
  })
}

export const getById = ({params: {id}}, res) => {
  const result = fs.readFileSync(URL_DB)
  const datas = JSON.parse(result)
  const toReturn = datas.cryptos.find(data => data.id === parseInt(id, 10))
  res.json({
    cryptos: toReturn,
    metadata: {...datas.metadata, num_cryptocurrencies: 1},
  })
}
