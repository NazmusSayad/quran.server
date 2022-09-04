const Bookmark = require('../../model/bookmark-model')
const formatQuery = require('../../utils/format-query')
const { catchAsync } = require('../../core')

module.exports = catchAsync(async (req, res) => {
  await Bookmark.findByIdAndUpdate(req.user.bookmarks, {
    $set: formatQuery(req.query),
  })
    .select('')
    .lean()

  res.success(req.query, 202)
})
