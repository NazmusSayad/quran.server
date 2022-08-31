const Bookmark = require('../../model/bookmark-model')
const Settings = require('../../model/settings-model')
const Forget = require('../../model/forget-pass-model')

module.exports = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.user.bookmarks)
    await Settings.findByIdAndDelete(req.user.settings)
    await Forget.findOneAndDelete({ user: req.user._id })
    await req.user.delete()
    res.success(204)
  } catch (err) {
    res.fail(404, err)
  }
}
