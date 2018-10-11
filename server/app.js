require('dotenv').config()

const express = require('express'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      bodyParser= require('body-parser'),
      port = process.env.PORT || 3000,
      axios = require('axios'),
      app = express()


const userRouter = require('./routes/user')      

mongoose.connect('mongodb://localhost:27017/phase2-livecode1');

app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors())

    .use('/users', userRouter)

    
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})