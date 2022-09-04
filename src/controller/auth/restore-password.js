const Forget = require('../../model/forget-pass-model')
const User = require('../../model/user-model')
const failError = new ReqError('Wrong information', 403)

module.exports = catchAsync(async (req, res) => {
  const { email, code, password } = req.body
  const user = await User.findOne({ email })
  if (!user) throw failError

  const forgetPassRequest = await Forget.findById(user._id)
  if (!forgetPassRequest || forgetPassRequest.code !== code) throw failError

  user.password = password
  await user.save()
  await forgetPassRequest.delete()

  const token = await jwt.generate(user._id)
  res.success({ token })
})
