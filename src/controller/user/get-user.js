const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')

module.exports = catchAsync(async (req, res) => {
  const user = req.user.getSafeInfo()

  if (req.query.expand !== undefined) {
    user.bookmarks = await Bookmark.findById(req.user._id).select('-_id').lean()
    user.settings = await Settings.findById(req.user._id).select('-_id').lean()
  }

  res.success({ user })
})
