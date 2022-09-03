const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

module.exports = catchAsync(async (req, res) => {
  for (let key in req.body) {
    req.user[key] = req.body[key]
  }

  const user = await req.user.save()
  res.success({ user })
})
