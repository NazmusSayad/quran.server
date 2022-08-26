const sendOtp = require('../../mail/send-otp')
const Otp = require('../../model/otp-modal')
const generateOtp = require('../../utils/generate-otp')
const validateUniqueUser = require('../../model/validate-unique-user')

module.exports = async (req, res) => {
  try {
    const email = req.body.email
    await validateUniqueUser(email)
    const existingRequest = await Otp.findOne({ email })

    const code = generateOtp()
    if (existingRequest) {
      existingRequest.code = code
      await existingRequest.save()
    } else {
      await Otp.create({ email, code })
    }

    sendOtp(email, code)
    res.success(201, { email })
  } catch (err) {
    res.fail(err)
  }
}
