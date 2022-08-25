const sendOtp = require('../../mail/send-otp')
const Otp = require('../../model/otp-modal')
const generateOtp = require('../../utils/generate-otp')

module.exports = async (req, res) => {
  try {
    const { email } = req.body
    const code = generateOtp()
    const existingUser = await Otp.findOne({ email })

    if (existingUser) {
      existingUser.code = code
      await existingUser.save()
    } else {
      await Otp.create({ email, code })
    }

    const { accepted } = await sendOtp(email, code)
    res.success(201, { accepted })
  } catch (err) {
    res.fail(err.message)
  }
}
