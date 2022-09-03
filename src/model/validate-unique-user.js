const AppError = require('../error/app-error')
const User = require('./user-model')

module.exports = async email => {
  if (await User.findOne({ email })) {
    throw new AppError('Another account associated with this email', 400)
  }
}
