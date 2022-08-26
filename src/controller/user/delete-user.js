const Bookmark = require('../../model/bookmark-model')

module.exports = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.user.bookmarks)
    await req.user.delete()
    res.success(204)
  } catch (err) {
    res.fail(err)
  }
}
