const User = require('../../model/user-model')
const { catchAsync } = require('../../core')


module.exports = catchAsync(async (req, res) => {
  res.success()
})
