const User = require('../../model/user-model.js')
const jwt = require('../../utils/jwt-token')

module.exports = catchAsync(async (req, res, next) => {
  const { authorization = '' } = req.headers
  const [token] = authorization.match(/(?<=^Bearer )(?:\S*)$/) || []
  if (!token) throw new ReqError('Invalid token', 401)

  const decodedToken = await jwt.verify(token)
  if (!decodedToken) throw new ReqError('Invalid token', 401)

  const user = await User.findById(decodedToken.id)
  if (!user) throw new ReqError('User no longer exists', 401)

  if (await user.passwordChangedAfter(decodedToken.iat)) {
    throw new ReqError('Password changed!', 401)
  }

  req.user = user
  next()
})
