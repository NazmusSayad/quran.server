const { catchAsync } = require('../../core')


module.exports = catchAsync(async (req, res) => {
  const populateMode = req.query.expand !== undefined
  if (populateMode) await req.user.populate('bookmarks settings')

  const user = req.user._doc
  delete user.password

  res.success({ user })
})
