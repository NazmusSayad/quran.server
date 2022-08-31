const Bookmark = require('../../model/bookmark-model')

module.exports = async (req, res) => {
  try {
    let bookmarkQuery = Bookmark.findById(req.user.bookmarks)

    if (req.query.verses !== undefined) {
      bookmarkQuery = bookmarkQuery.select('verses')
    }
    if (req.query.surahs !== undefined) {
      bookmarkQuery = bookmarkQuery.select('surahs')
    }

    const bookmarks = await bookmarkQuery
    res.success(200, bookmarks)
  } catch (err) {
    res.fail(err)
  }
}
