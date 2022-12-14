const User = require('../../model/user-model')
const Forget = require('../../model/forget-pass-model')
const generateOtp = require('../../utils/generate-otp')
const sendForgetPassOTP = require('../../mail/send-forget-pass')

module.exports = catchAsync(async (req, res) => {
  const { email } = req.body
  const userId = (await User.findOne({ email }).lean())?._id

  res.success({
    email,
    message: `Email sent to ${email}, if the any user exists with the email`,
  })
  if (!userId) return // Don't let the user know that there was no user and the email wasn't sent.

  try {
    const existingRequest = await Forget.findById(userId)
    const code = generateOtp(8)

    if (existingRequest) {
      existingRequest.code = code
      await existingRequest.save()
    } else {
      await Forget.create({ _id: userId, code })
    }

    await sendForgetPassOTP(email, code)
  } catch (err) {
    console.warn(err)
  }
})
