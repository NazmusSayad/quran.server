const Bookmark = require('../../model/bookmark-model')
const formatQuery = require('../../utils/format-query')

module.exports = async (req, res) => {
  try {
    await Bookmark.findByIdAndUpdate(req.user.bookmarks, {
      $set: formatQuery(req.query),
    })

    res.success(202, req.query)
  } catch (err) {
    res.fail(404, err)
  }
}
