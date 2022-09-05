const { readFileSync } = require('fs')
const EMAIL_TEMPLATE = readFileSync(
  __dirname + '/template-forget.html',
  'utf-8'
)
const mail = require('./mail')

module.exports = (to, code) => {
  return mail({
    to,
    subject: 'Quran account password reset code',
    body: EMAIL_TEMPLATE.replace('{%CODE%}', code),
  })
}
