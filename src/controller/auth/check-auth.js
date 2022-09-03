const { compare } = require('bcrypt')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')
const User = require('../../model/user-model.js')

module.exports = catchAsync(async (req, res, next) => {
  const { email, password, token = '' } = req.headers

  const user = await User.findOne({ email })
  const userConfirmed =
    user &&
    (user.password === password || (await compare(user.password, token)))

  if (!userConfirmed) throw new AppError('Email or password is wrong', 401)

  req.user = user
  req.userToken = password
  next()
})
