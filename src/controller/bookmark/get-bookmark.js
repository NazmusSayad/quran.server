const Bookmark = require('../../model/bookmark-model')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

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
