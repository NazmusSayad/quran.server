const User = require('../../model/user-model')
const Forget = require('../../model/forget-pass-model')
const generateOtp = require('../../utils/generate-otp')
const sendOtp = require('../../mail/send-forget-pass')

module.exports = async (req, res) => {
  try {
    const { email } = req.body
    const user = (await User.findOne({ email }).lean())?._id

    res.success(200, { email })
    if (!user) return

    const code = generateOtp(8)
    const existingRequest = await Forget.findOne({ user })

    if (existingRequest) {
      existingRequest.code = code
      existingRequest.save()
    } else {
      Forget.create({ user, code })
    }

    sendOtp(email, code)
  } catch (err) {
    res.fail(err)
  }
}
