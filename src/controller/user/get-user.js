const formatBookmark = require('../bookmark/helpers/format-bookmark')

module.exports = async (req, res) => {
  try {
    const populateMode = req.query.expand !== undefined
    if (populateMode) (await req.user.populate('bookmarks settings'))

    const user = { ...req.user._doc }
    delete user.password
    user.token = req.userToken
    if (populateMode) user.bookmarks = formatBookmark(user.bookmarks._doc)

    res.success(200, { user })
  } catch (err) {
    res.fail(err)
  }
}
