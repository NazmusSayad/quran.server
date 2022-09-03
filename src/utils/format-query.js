const AppError = require('../error/app-error')

const verseRegex = /^\d*(\:)\d*$/
const surahRegex = /^\d*\d$/

module.exports = ({ surah, verse }) => {
  const newBookmarkObj = {}

  if (verse) {
    if (!verseRegex.test(verse)) throw new AppError('Invalid verse')
    newBookmarkObj['verses.' + verse] = 1
  }
  if (surah) {
    if (!surahRegex.test(surah)) throw new AppError('Invalid surah')
    newBookmarkObj['surahs.' + surah] = 1
  }

  return newBookmarkObj
}
