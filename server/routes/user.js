const express = require('express'),
      router = express.Router(),
      Controller = require('../controllers/user')

router
    .post('/register', Controller.register)
    .post('/login', Controller.login)

module.exports = router