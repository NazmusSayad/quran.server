const transporter = require('./transporter')

module.exports = async (to, code) =>
  transporter.sendMail({
    from: 'Verifier Bot<quran.web.app@gmail.com>',
    to,
    subject: 'Quran account verification code!',
    html: `<i>${code}</i>`,
  })
