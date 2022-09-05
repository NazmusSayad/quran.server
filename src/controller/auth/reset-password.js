const User = require('../../model/user-model')
const Forget = require('../../model/forget-pass-model')
const jwt = require('../../utils/jwt-token')
const failError = new ReqError('Wrong information', 403)

module.exports = catchAsync(async (req, res) => {
  const { email, code, new_password } = req.body
  const user = await User.findOne({ email })
  if (!user) throw failError

  const forgetPassRequest = await Forget.findById(user._id)
  if (!forgetPassRequest || !(await forgetPassRequest.checkCode(code)))
    throw failError

  user.password = new_password
  await Promise.all([user.save(), forgetPassRequest.delete()])

  const token = jwt.generate(user._id)
  res.success({ token })
})
