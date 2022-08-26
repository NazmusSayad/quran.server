const validateUniqueUser = require('../../model/validate-unique-user')
const getMatchedOtp = require('../../model/validate-otp')
const User = require('../../model/user-model')

module.exports = async (req, res) => {
  try {
    const { email, code } = req.body
    await validateUniqueUser(email)
    const pendingUser = await getMatchedOtp(email, code)

    const user = await User.create(req.body)
    pendingUser.delete()
    res.success(201, { user })
  } catch (err) {
    res.fail(err)
  }
}
