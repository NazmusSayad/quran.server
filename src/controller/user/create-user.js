const validateUniqueUser = require('../../model/validate-unique-user')
const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const User = require('../../model/user-model')
const OTP = require('../../model/otp-model')

const getMatchedOtp = async (email, code) => {
  const existingUser = await OTP.findOne({ email })
  if (existingUser == null) throw new Error('User never requested for OTP')
  if (existingUser?.code !== code) throw new Error('Wrong information')
  return existingUser
}

module.exports = async (req, res) => {
  try {
    const { email, code } = req.body
    await validateUniqueUser(email)
    const pendingUser = await getMatchedOtp(email, code)

    await User.validate(req.body)
    req.body.bookmarks = (await Bookmark.create({}))._id
    req.body.settings = (await Settings.create({}))._id
    const user = await User.create(req.body)
    pendingUser.delete()

    res.success(201, { user })
  } catch (err) {
    res.fail(err)
  }
}
