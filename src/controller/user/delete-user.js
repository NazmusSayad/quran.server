const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const Forget = require('../../model/forget-pass-model')

module.exports = catchAsync(async (req, res) => {
  await Forget.findByIdAndDelete(req.user._id)
  await Bookmark.findByIdAndDelete(req.user._id)
  await Settings.findByIdAndDelete(req.user._id)
  await req.user.delete()
  res.success(null, 204)
})
