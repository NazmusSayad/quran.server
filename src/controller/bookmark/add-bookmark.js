const Bookmark = require('../../model/bookmark-model')
const formatAndValidateQuery = require('../../utils/format-query')

module.exports = catchAsync(async (req, res) => {
  await Bookmark.findByIdAndUpdate(req.user._id, {
    $set: formatAndValidateQuery(req.query),
  }).lean()

  res.success(req.query, 202)
})
