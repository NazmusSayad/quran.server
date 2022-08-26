const Bookmark = require('../../model/bookmark-model')
const formatQuery = require('./format-query')

module.exports = async (req, res) => {
  try {
    await Bookmark.findByIdAndUpdate(req.user.bookmarks, {
      $unset: formatQuery(req.query),
    })

    res.success(204)
  } catch (err) {
    res.fail(err)
  }
}
