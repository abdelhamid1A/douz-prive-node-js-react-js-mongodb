require('dotenv').config({path:'./.env'})
const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
// const errorHandler = require('./middleware/error')
require('./config/db')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,auth-token"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "*"
    );
    next();
});
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const forumRouter = require('./routes/forum')
const commentRouter = require('./routes/comment')
const likeRouter = require('./routes/like')

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({ extended: true ,limit:'50mb',parameterLimit: 1000000}))

app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use('/forum',forumRouter)
app.use('/comment',commentRouter)
app.use('/like',likeRouter)
// app.use(errorHandler)

const port = process.env.PORT || 4000
app.listen(process.env.PORT,()=>{console.log('server run :'+port)})

module.exports = app