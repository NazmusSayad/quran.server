module.exports = bookmarks => {
  delete bookmarks._id
  const newBookmarks = {}

  for (let key in bookmarks) {
    const keyValues = bookmarks[key]
    newBookmarks[key] = Object.keys(keyValues)
  }

  return newBookmarks
}
