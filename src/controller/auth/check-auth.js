const { compare } = require('bcrypt')
const User = require('../../model/user-model.js')
const authError = new Error('Email or password is wrong.')

module.exports = async (req, res, next) => {
  try {
    const { email, password, token = '' } = req.headers

    const user = await User.findOne({ email })
    const userConfirmed =
      user &&
      (user.password === password || (await compare(user.password, token)))

    if (!userConfirmed) throw authError

    req.user = user
    req.userToken = password
    next()
  } catch (err) {
    res.fail(401, err)
  }
}
