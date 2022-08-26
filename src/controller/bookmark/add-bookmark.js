const Bookmark = require('../../model/bookmark-model')
const validateQuery = require('./validate-query')

module.exports = async (req, res) => {
  try {
    const { surah, verse } = validateQuery(req.query)

    const newBookmarkObj = {}
    if (verse) newBookmarkObj['verses.' + verse] = 1
    if (surah) newBookmarkObj['surahs.' + surah] = 1

    await Bookmark.findByIdAndUpdate(req.user.bookmarks, {
      $set: newBookmarkObj,
    })

    res.success(202, { surah, verse })
  } catch (err) {
    res.fail(err)
  }
}
