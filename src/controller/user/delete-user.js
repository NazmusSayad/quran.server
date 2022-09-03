const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const Forget = require('../../model/forget-pass-model')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

module.exports = catchAsync(async (req, res) => {
  await Bookmark.findByIdAndDelete(req.user.bookmarks)
  await Settings.findByIdAndDelete(req.user.settings)
  await Forget.findOneAndDelete({ user: req.user._id })
  await req.user.delete()
  res.success(null, 204)
})
