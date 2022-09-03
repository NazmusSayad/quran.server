const Forget = require('../../model/forget-pass-model')
const User = require('../../model/user-model')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')
const failError = new AppError('Wrong information', 403)

module.exports = catchAsync(async (req, res) => {
  const { email, code, password } = req.body
  const user = await User.findOne({ email })
  if (!user) throw failError

  const request = await Forget.findOne({ user: user._id })
  if (!request || request.code !== code) throw failError

  user.password = password
  await user.save()
  await request.delete()

  const userDoc = user._doc
  delete userDoc.password

  res.success({ user: userDoc })
})
