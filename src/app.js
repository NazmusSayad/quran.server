const express = require('express')
const cors = require('cors')
const errorResponse = require('./error/error-response')
const AppError = require('./error/app-error')
const router = require('./router')
const app = express()

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  res.success = function (data, code = 200) {
    this.status(code).json({
      status: 'success',
      data,
    })
  }
  next()
})

app.use('/v1', router)

app.all('*', (req, res, next) => next(new AppError('Not found!')))
app.use(errorResponse)

module.exports = app
