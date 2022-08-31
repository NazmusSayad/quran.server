const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_)
  .then(() => {
    console.log('>>> MongoDB connected successfully...')
  })
  .catch(() => {
    console.log('!!! MongoDB connection failed...')
  })
