const verseRegex = /^\d*(\:)\d*$/
const surahRegex = /^\d*\d$/

module.exports = ({ surah, verse }) => {
  const newBookmarkObj = {}

  if (verse) {
    if (!verseRegex.test(verse)) throw new ReqError('Invalid verse', 400)
    newBookmarkObj['verses.' + verse] = 1
  }

  if (surah) {
    if (!surahRegex.test(surah)) throw new ReqError('Invalid surah', 400)
    newBookmarkObj['surahs.' + surah] = 1
  }

  return newBookmarkObj
}
