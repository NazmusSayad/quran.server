const Bookmark = require('../../model/bookmark-model')
const formatQuery = require('../../utils/format-query')
const AppError = require('../../error/app-error.js')
const catchAsync = require('../../error/catch-async.js')

module.exports = catchAsync(async (req, res) => {
  await Bookmark.findByIdAndUpdate(req.user.bookmarks, {
    $unset: formatQuery(req.query),
  })
    .select('')
    .lean()

  res.success(null, 204)
})
