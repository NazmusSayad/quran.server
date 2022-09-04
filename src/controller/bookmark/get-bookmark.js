const Bookmark = require('../../model/bookmark-model')

module.exports = catchAsync(async (req, res) => {
  let bookmarkQuery = Bookmark.findById(req.user._id)

  if (req.query.verses !== undefined) {
    bookmarkQuery = bookmarkQuery.select('verses')
  }
  if (req.query.surahs !== undefined) {
    bookmarkQuery = bookmarkQuery.select('surahs')
  }

  const bookmarks = await bookmarkQuery.lean()
  bookmarks._id = undefined
  bookmarks.verses ||= {}
  bookmarks.surahs ||= {}
  res.success(bookmarks)
})
