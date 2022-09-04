const Bookmark = require('../../model/bookmark-model')
const formatAndValidateQuery = require('../../utils/format-query')

module.exports = catchAsync(async (req, res) => {
  await Bookmark.findByIdAndUpdate(req.user._id, {
    $unset: formatAndValidateQuery(req.query),
  }).lean()

  res.success(null, 204)
})
