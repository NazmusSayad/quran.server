const Bookmark = require('../../model/bookmark-model')
const { catchAsync } = require('../../core')

module.exports = catchAsync(async (req, res) => {
  let bookmarkQuery = Bookmark.findById(req.user.bookmarks)

  if (req.query.verses !== undefined) {
    bookmarkQuery = bookmarkQuery.select('verses')
  }
  if (req.query.surahs !== undefined) {
    bookmarkQuery = bookmarkQuery.select('surahs')
  }

  const bookmarks = await bookmarkQuery.lean()
  res.success(bookmarks)
})
