const sendVerifyEmailCOde = require('../../mail/send-verify-email')
const validateUniqueUser = require('../../model/validate-unique-user')
const VerifyEmail = require('../../model/verify-email-model')
const generateOtp = require('../../utils/generate-otp')

module.exports = async (req, res) => {
  try {
    const email = req.body.email
    await validateUniqueUser(email)
    
    const existingRequest = await VerifyEmail.findOne({ email })
    const code = generateOtp(6)
    
    if (existingRequest) {
      existingRequest.code = code
      await existingRequest.save()
    } else {
      await VerifyEmail.create({ email, code })
    }

    sendVerifyEmailCOde(email, code)
    res.success(201, { email })
  } catch (err) {
    res.fail(404, err)
  }
}
