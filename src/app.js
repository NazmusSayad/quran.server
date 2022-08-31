const express = require('express')
const cors = require('cors')
const router = require('./router')
const response = require('./utils/response')
const errorController = require('./controller/error')
const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  res.success = response.success
  res.fail = response.fail
  next()
})

app.use('/v1', router)
app.use('/*', errorController)

module.exports = app
