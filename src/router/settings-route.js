const express = require('express')
const router = express.Router()
const Auth = require('../controller/auth-controller')
const Settings = require('../controller/settings-controller')

router.route('/').patch(Auth.check, Settings.update)

module.exports = router
