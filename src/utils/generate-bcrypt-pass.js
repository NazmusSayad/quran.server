const { hashSync } = require('bcrypt')

module.exports = input => {
  return hashSync(input, 5)
}
