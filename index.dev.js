process.env.NODE_ENV ||= 'development'
console.clear()
require('dotenv').config()
require('./src/server')
