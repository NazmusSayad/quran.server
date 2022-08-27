const { compare } = require('bcrypt')
const User = require('../../model/user-model.js')

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.headers
    const user = await User.findOne({ email })

    if (user == null || !(await compare(user.password, password))) {
      throw new Error('Email or password is wrong.')
    }

    req.user = user
    req.userToken = password
    next()
  } catch (err) {
    res.fail(401, err)
  }
}
