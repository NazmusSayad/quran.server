const transporter = require('./transporter')

module.exports = ({ to, subject, body }) => {
  return transporter.sendMail({
    to,
    subject,
    from: `Verifier Bot <${process.env.EMAIL}>`,
    html: body,
  })
}
