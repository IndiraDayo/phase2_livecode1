const User = require('../models/user'),
      hash = require('bycjwt')


class Controlller {

    static register(req,res) {
        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            // password: hash.bcencode(req.body.password)
            password: req.body.password
        })
        user.save(function(err, user) {
            console.log('coba');
            
            if (err) {
                console.log('masuk');
                
                res.status(500).json({err})
            }
            else {
                res.status(201).json({
                    success: true,
                    message:`Account ${req.body.name} registered`,
                    password: hash.bcencode(req.body.password)
                })
            }
        })
    }

    static login(req,res) {
        const email = req.body.email
        const password = req.body.password

        User.findOne({email: email}, function(err, user) {
            // console.log(req.body.password);
            // console.log(user.password);
            
            // console.log(hash.bcdecode(password, user.password))
            // console.log(user.password)
            if (hash.bcdecode(password, user.password)) {
                let intoToken = {
                    name: user.name,
                    email: user.email
                }
    
                if (err) {
                    req.status(500).json({err})
                }
                else {
                    process.env.TOKEN = hash.jwtencode(intoToken)
                    res.status(201).json({token:process.env.TOKEN})
                }
            }
            else {
                console.log('Password salah');
                req.status(500).json({message: 'Password salah'})
            }
        })
    }
}

module.exports = Controlller