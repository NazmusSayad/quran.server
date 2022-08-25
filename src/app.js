const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const response = require('./utils/response')
const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  res.success = response.success
  res.fail = response.fail
  next()
})

app.use(`/v1`, router)

module.exports = app

