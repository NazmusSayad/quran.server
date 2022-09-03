const User = require('../../model/user-model')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

module.exports = catchAsync(async (req, res) => {
  res.success()
})
