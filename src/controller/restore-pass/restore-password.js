const Forget = require('../../model/forget-pass-model')
const User = require('../../model/user-model')
const failError = new Error('Wrong information')

module.exports = async (req, res) => {
  try {
    const { email, code, password } = req.body
    const user = await User.findOne({ email })
    if (!user) throw failError

    const request = await Forget.findOne({ user: user._id })
    if (!request || request.code !== code) throw failError

    user.password = password
    await user.save()
    await request.delete()

    const userDoc = user._doc
    delete userDoc.password

    res.success(200, { user: userDoc })
  } catch (err) {
    res.fail(404, err)
  }
}
