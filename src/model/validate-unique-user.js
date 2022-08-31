const User = require('./user-model')

module.exports = async email => {
  if (await User.findOne({ email })) {
    throw new Error('Another account associated with this email')
  }
}
