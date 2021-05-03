const ErrorResponce = require('../utils/errorResponse')

const errHandler = (err,req,res,next)=>{
    let error = {...err};
    error.message = err.message
    if(err.code === 11000){
        const message = 'duplicate field';
        error = new ErrorResponce(message,400)
    }
}

module.exports = errHandler