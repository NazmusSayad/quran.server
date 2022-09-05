const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')

module.exports = catchAsync(async (req, res) => {
  const user = req.user.getSafeInfo()

  if (req.query.expand !== undefined) {
    const [bookmarks, settings] = await Promise.all([
      Bookmark.findById(req.user._id).select('-_id').lean(),
      Settings.findById(req.user._id).select('-_id').lean(),
    ])

    user.bookmarks = bookmarks
    user.settings = settings
  }

  res.success({ user })
})
