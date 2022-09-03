const Bookmark = require('../../model/bookmark-model')
const formatQuery = require('../../utils/format-query')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

module.exports = catchAsync(async (req, res) => {
  await Bookmark.findByIdAndUpdate(req.user.bookmarks, {
    $set: formatQuery(req.query),
  })
    .select('')
    .lean()

  res.success(req.query, 202)
})
