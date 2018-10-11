const User = require('../models/user'),
      hash = require('bycjwt')

module.exports = {

    authentication: function(req, res, next) {
        let userObj = hash.jwtdecode(process.env.TOKEN)


        console.log(userObj);
        User.findOne({ email: userObj.email}, function(err, user) {

            if (user === undefined) {
                res.status(400).json({message: 'User not found'})
            }
            else {
                next()
            }
        })

    }
}