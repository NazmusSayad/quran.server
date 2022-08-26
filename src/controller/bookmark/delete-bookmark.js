const Bookmark = require('../../model/bookmark-model')
const makeQueryObj = require('./make-query-obj')

module.exports = async (req, res) => {
  try {
    let bookmarkId = req.user.bookmarks

    if (!bookmarkId) {
      throw new Error(`User doesn't have any bookmark yet.`)
    }
    await Bookmark.findByIdAndUpdate(bookmarkId, {
      $unset: makeQueryObj(req.query),
    })

    res.success(204)
  } catch (err) {
    res.fail(err)
  }
}
