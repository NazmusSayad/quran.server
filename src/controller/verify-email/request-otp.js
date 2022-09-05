const User = require('../../model/user-model')
const VerifyEmail = require('../../model/verify-email-model')
const sendVerifyEmailCOde = require('../../mail/send-verify-email')
const generateOtp = require('../../utils/generate-otp')

module.exports = catchAsync(async (req, res) => {
  const { email } = req.body
  if (await User.findOne({ email })) {
    throw new ReqError('Another account associated with this email', 400)
  }

  const existingRequest = await VerifyEmail.findOne({ email })
  const code = generateOtp(6)

  if (existingRequest) {
    existingRequest.code = code
    await existingRequest.save()
  } else {
    await VerifyEmail.create({ email, code })
  }

  sendVerifyEmailCOde(email, code).catch(() => {})
  res.success({ email }, 201)
})
