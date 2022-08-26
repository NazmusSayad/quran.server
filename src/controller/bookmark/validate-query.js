const verseRegex = /^\d*(\:)\d*$/
const surahRegex = /^\d*\d$/

module.exports = ({ surah, verse }) => {
  if (verse && !verseRegex.test(verse)) throw new Error('Invalid verse.')
  if (surah && !surahRegex.test(surah)) throw new Error('Invalid surah.')

  return { surah, verse }
}
