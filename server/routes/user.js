const express = require('express'),
      router = express.Router(),
      Controller = require('../controllers/user'),
      {authentication} = require('../middleware/auth')

router
    .post('/register', Controller.register)
    .post('/login', Controller.login)

module.exports = router