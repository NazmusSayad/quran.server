const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const Forget = require('../../model/forget-pass-model')

module.exports = catchAsync(async (req, res) => {
  await Promise.all([
    Forget.findByIdAndDelete(req.user._id),
    Bookmark.findByIdAndDelete(req.user._id),
    Settings.findByIdAndDelete(req.user._id),
    req.user.delete(),
  ])

  res.success(null, 204)
})
