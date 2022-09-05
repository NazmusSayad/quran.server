const express = require('express')
const cors = require('cors')
const response = require('./core/response')
const router = require('./router')
const app = express()

app.use(cors())
app.use(express.json())
app.use(response.addSuccessMethod)

app.use('/v1', router)
app.all('*', response.notFound)
app.use(response.errorHandler)

module.exports = app



