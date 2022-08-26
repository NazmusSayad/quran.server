const OTP = require('./otp-modal')

module.exports = async (email, code) => {
  const existingUser = await OTP.findOne({ email })
  if (existingUser == null) throw new Error('User never requested for OTP.')
  if (existingUser?.code !== code) throw new Error('Wrong OTP.')
  return existingUser
}
