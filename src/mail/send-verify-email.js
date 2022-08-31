const { readFileSync } = require('fs')
const EMAIL_TEMPLATE = readFileSync(__dirname + '/template-verify.html', 'utf-8')
const mail = require('./mail')

module.exports = async (to, code) => {
  return mail({
    to,
    subject: 'Quran account verification code',
    body: EMAIL_TEMPLATE.replace('{%CODE%}', code),
  })
}
