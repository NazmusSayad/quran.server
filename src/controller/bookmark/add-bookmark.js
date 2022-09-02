const Bookmark = require('../../model/bookmark-model')
const formatQuery = require('../../utils/format-query')

module.exports = async (req, res) => {
  try {
    // HACK
    const bo = await Bookmark.findByIdAndUpdate(req.user.bookmarks, {
      $set: formatQuery(req.query),
    })
      .select('')
      .lean()

    console.log(bo)

    res.success(202, req.query)
  } catch (err) {
    res.fail(404, err)
  }
}
