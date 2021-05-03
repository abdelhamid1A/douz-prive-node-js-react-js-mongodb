const User = require('../models/User')
const bcrypt = require('bcrypt')
const {sendMail} = require('./methodscontroller')
const jwt = require('jsonwebtoken')
const {uplod} = require('../config/upload')
class Usercontroller {
    index(req, res) {
        res.send('hello')
    }

    // signup method 
    async signUp(req, res) {
        console.log(req.body);
        console.log(req.file);
        // return
        try {
            const findEmail = await User.findOne({ email: req.body.email })
            if (findEmail) {
                res.status(400).json({ message: 'this email already signup ' })
            } else {
                if(!req.file){
                    req.body.picture='default image.jpg'
                }else{
                    uplod.single('picture')
                    req.body.picture=req.file.filename
                }
                const { first_name, last_name, email, password, city, phone,picture } = req.body
                bcrypt.hash(password, 10, (err, hash) => {
                    if (hash) {
                        
                        const user = new User({
                            first_name,
                            last_name,
                            email,
                            password: hash,
                            city,
                            phone,
                            picture
                        })
                        user.save()
                            .then(doc => {
                                const token = jwt.sign({_id:doc._id,is_valid:doc.is_valid},process.env.TOKENKEY,{expiresIn:'10m'})
                                const info = {token,email:doc.email}
                                sendMail(info)
                                res.status(200).json( doc );
                            })
                            .catch(error => console.log(error))
                    }
                })


            }

        } catch (error) {
            console.log(error);
        }

    }

    // signIn method 
    async signIn (req,res){
        try {
            const findUser = await User.findOne({ email: req.body.email })
            if (findUser) {
                bcrypt.compare(req.body.password,findUser.password,(err,result)=>{
                    if(result){
                        const token = findUser.generatToken()
                        res.status(200).json({user:findUser,token})
                    }else{
                        res.status(404).json({message:'email or password incorrect'})
                    }
                })
            } else {
                res.status(400).json({ message: 'you don\'t have an account go to page signup page' })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Usercontroller()