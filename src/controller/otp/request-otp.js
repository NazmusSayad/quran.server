const sendOtp = require('../../mail/send-otp')
const validateUniqueUser = require('../../model/validate-unique-user')
const OTP = require('../../model/otp-model')
const generateOtp = require('../../utils/generate-otp')

module.exports = async (req, res) => {
  try {
    const email = req.body.email
    await validateUniqueUser(email)
    
    const existingRequest = await OTP.findOne({ email })
    const code = generateOtp(6)
    
    if (existingRequest) {
      existingRequest.code = code
      await existingRequest.save()
    } else {
      await OTP.create({ email, code })
    }

    sendOtp(email, code)
    res.success(201, { email })
  } catch (err) {
    res.fail(404, err)
  }
}
