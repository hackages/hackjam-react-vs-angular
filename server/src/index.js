import express from 'express'
import {fetchData, search, getAll, getById} from './fetcher'
import cors from 'cors'

const app = express()
app.use(cors())

//routes
app.get('/search/:term', (req, res) => search(req, res))
app.get('/cryptos', (req, res) => getAll(req, res))
app.get('/cryptos/:id', (req, res) => getById(req, res))

app.listen(process.env.PORT || 4000, console.log('server running on port 4000'))

fetchData()
setInterval(fetchData, 300000)
