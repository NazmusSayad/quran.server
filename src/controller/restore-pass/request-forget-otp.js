const User = require('../../model/user-model')
const Forget = require('../../model/forget-pass-model')
const generateOtp = require('../../utils/generate-otp')
const sendForgetPassOTP = require('../../mail/send-forget-pass')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

module.exports = catchAsync(async (req, res) => {
  const { email } = req.body
  const user = (await User.findOne({ email }).lean())?._id

  res.success({ email })
  if (!user) return

  const existingRequest = await Forget.findOne({ user })
  const code = generateOtp(8)

  if (existingRequest) {
    existingRequest.code = code
    existingRequest.save()
  } else {
    Forget.create({ user, code })
  }

  sendForgetPassOTP(email, code)
})
