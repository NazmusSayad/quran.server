const { readFileSync } = require('fs')
const transporter = require('./transporter')
const EMAIL_TEMPLATE = readFileSync(__dirname + '/template.html', 'utf-8')

module.exports = async (to, code) => {
  return transporter.sendMail({
    to,
    from: 'Verifier Bot',
    subject: 'Quran account verification code',
    html: EMAIL_TEMPLATE.replace('{%CODE%}', code),
  })
}
