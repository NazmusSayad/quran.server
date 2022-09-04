const User = require('../../model/user-model.js')
const jwt = require('../../utils/jwt-token')

module.exports = catchAsync(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new ReqError('Provide a valid email and password', 400)
  }

  const user = await User.findOne({ email })
  const userChecked =
    user && (await user.checkPassword(password, user.password))
  if (!userChecked) throw new ReqError('Email or password is wrong', 401)

  const token = await jwt.generate(user._id)
  res.success({ token })
})
