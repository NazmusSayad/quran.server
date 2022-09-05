const sendVerifyEmailCOde = require('../../mail/send-verify-email')
const validateUniqueUser = require('../../model/_validate-unique-user')
const VerifyEmail = require('../../model/verify-email-model')
const generateOtp = require('../../utils/generate-otp')

module.exports = catchAsync(async (req, res) => {
  const { email } = req.body
  await validateUniqueUser(email)

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
