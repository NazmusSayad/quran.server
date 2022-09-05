const validateUniqueUser = require('../../model/_validate-unique-user')
const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const User = require('../../model/user-model')
const VerifyEmail = require('../../model/verify-email-model')
const jwt = require('../../utils/jwt-token')
const filterRequestBody = require('../user/_filter-request-body')

module.exports = catchAsync(async (req, res) => {
  const { email, code } = req.body
  await validateUniqueUser(email)

  const verifyEmailReq = await VerifyEmail.findOne({ email })
  if (!verifyEmailReq) throw new ReqError('User never requested for OTP')
  if (verifyEmailReq?.code !== code)
    throw new ReqError('Wrong information', 403)

  const { _id } = await User.create(filterRequestBody(req.body))
  await verifyEmailReq.delete()
  await Bookmark.create({ _id })
  await Settings.create({ _id })

  const token = jwt.generate(_id)
  res.success({ token }, 201)
})