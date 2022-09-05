const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const User = require('../../model/user-model')
const VerifyEmail = require('../../model/verify-email-model')
const jwt = require('../../utils/jwt-token')

module.exports = catchAsync(async (req, res) => {
  const { name, email, password, code } = req.body

  const verifyEmailReq = await VerifyEmail.findOne({ email })
  if (!verifyEmailReq) throw new ReqError('User never requested for OTP', 400)

  if (!(await verifyEmailReq.checkCode(code)))
    throw new ReqError('Wrong information', 403)

  const { _id } = await User.create({ name, email, password })
  await verifyEmailReq.delete()
  await Bookmark.create({ _id })
  await Settings.create({ _id })

  const token = jwt.generate(_id)
  res.success({ token }, 201)
})
