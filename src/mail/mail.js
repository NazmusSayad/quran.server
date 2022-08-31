const transporter = require('./transporter')

module.exports = ({ to, subject, body }) => {
  return transporter.sendMail({
    to,
    from: 'Verifier Bot <quran.web.app@gmail.com>',
    subject,
    html: body,
  })
}
