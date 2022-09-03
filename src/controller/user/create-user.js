const validateUniqueUser = require('../../model/validate-unique-user')
const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const User = require('../../model/user-model')
const VerifyEmail = require('../../model/verify-email-model')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

const getMatchedOtp = async (email, code) => {
  const existingUser = await VerifyEmail.findOne({ email })
  if (existingUser == null) throw new AppError('User never requested for OTP')
  if (existingUser?.code !== code) throw new AppError('Wrong information', 403)
  return existingUser
}

module.exports = catchAsync(async (req, res) => {
  const { email, code } = req.body
  await validateUniqueUser(email)
  const pendingUser = await getMatchedOtp(email, code)

  await User.validate(req.body)
  req.body.bookmarks = (await Bookmark.create({}))._id
  req.body.settings = (await Settings.create({}))._id
  const user = await User.create(req.body)
  pendingUser.delete()

  res.success({ user }, 201)
})
