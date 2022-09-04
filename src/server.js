const core = require('./core')
global.ReqError = core.ReqError
global.catchAsync = core.catchAsync
const mongoose = require('mongoose')
const app = require('./app')

process.env.PORT ||= 1000
app.listen(process.env.PORT, () => {
  console.log(`>>> App running on port "${process.env.PORT}"...`)
})

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('>>> MongoDB connected successfully...')
  })
  .catch(() => {
    console.log('!!! MongoDB connection failed...')
  })
