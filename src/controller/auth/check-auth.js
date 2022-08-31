const { compare } = require('bcrypt')
const User = require('../../model/user-model.js')
const wrongInfoError = new Error('Email or password is wrong.')

module.exports = async (req, res, next) => {
  try {
    const { email, password, token = '' } = req.headers

    console.time('Auth: ')
    const user = await User.findOne({ email })
    console.timeEnd('Auth: ')

    const userVerified =
      user &&
      (user.password === password || (await compare(user.password, token)))
    if (!userVerified) throw wrongInfoError

    req.user = user
    req.userToken = password
    next()
  } catch (err) {
    res.fail(401, err)
  }
}
