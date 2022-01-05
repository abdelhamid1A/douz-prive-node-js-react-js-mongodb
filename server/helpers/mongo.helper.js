const jwt = require('jsonwebtoken');
const User = require('../models/User')
const helpersFunction = require('./index')

const findUserUsingToken = async (value)=>{
    const token = helpersFunction.spliceToken(value)[1]
    const decodeToken = await jwt.verify(token, process.env.TOKENKEY)
    // console.log(decodeToken);
    const findUser = await User.findById(decodeToken._id)
    return findUser
}

module.exports = {findUserUsingToken}