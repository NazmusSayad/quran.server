const User = require('../../model/user-model.js')

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.headers
    console.log(`@ New request from ${email}`)
    const user = await User.findOne({ email, password })
    if (user == null) throw new Error('Email or password is wrong.')
    req.user = user
    next()
  } catch (err) {
    res.fail(401, err)
  }
}
