exports.VERIFY_EMAIL_EXPIRE_DURATION = 60 * 60 // 1 hour
exports.FORGET_PASS_OTP_EXPIRE_DURATION = 60 * 10 // 10 min
exports.OTP_CHARACTERS =
  '0123456789abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
exports.BCRYPT_SALT_ROUND = +process.env.BCRYPT_SALT_ROUND
exports.BCRYPT_SALT_ROUND2 = +process.env.BCRYPT_SALT_ROUND2
