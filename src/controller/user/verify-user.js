const User = require('../../model/user-model.js')

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.headers
    const user = await User.findOne({ username, password })

    if (user == null) throw new Error('Email or password is wrong!')

    req.user = user
    next()
  } catch (err) {
    res.fail(401, err.message)
  }
}
