const User = require('../models/User')
const bcrypt = require('bcrypt')
const { sendMail } = require('./methodscontroller')
const jwt = require('jsonwebtoken')
// const {uplod, upload} = require('../config/upload')
class Usercontroller {
    // signup method 
    async signUp(req, res) {
        // upload
        // console.log(req.body);
        // console.log(req.file);
        // return
        try {
            const findEmail = await User.findOne({ email: req.body.email })
            if (findEmail) {
                res.status(400).json({ message: 'this email already signup ' })
            } else {
                req.body.picture = req.file.filename
                const { first_name, last_name, email, password, city, phone, picture } = req.body
                // console.log(123);
                console.log(req.body);
                // return 
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
                                const token = jwt.sign({ _id: doc._id, is_valid: doc.is_valid }, process.env.TOKENKEY)
                                const info = { token, email: doc.email }
                                sendMail(info)
                                res.status(200).json(doc);
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
    async signIn(req, res) {
        try {
            const findUser = await User.findOne({ email: req.body.email })
            if (findUser) {
                bcrypt.compare(req.body.password, findUser.password, (err, result) => {
                    if (result) {
                        const token = findUser.generatToken()
                        delete findUser._doc.password
                        res.status(200).json({ user: findUser, token })
                    } else {
                        res.status(404).json({ message: 'email or password incorrect' })
                    }
                })
            } else {
                res.status(400).json({ message: 'you don\'t have an account go to page signup page' })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // validation account 
    async accountVerify(req, res) {
        const token = req.params.token
        try {
            const decodeToken = await jwt.verify(token, process.env.TOKENKEY)
            if (decodeToken) {
                const { _id } = decodeToken
                try {
                    const findUser = await User.findById(_id)
                    if (findUser) {
                        if (findUser.is_valid) {
                            res.status(202).json({ message: 'this account is valid try to login' })
                            return
                        }

                        findUser.updateOne({ is_valid: true }, { new: true })
                            .then(doc => {
                                const token = findUser.generatToken()
                                delete findUser._doc.password
                                findUser.is_valid = true
                                res.status(202).json({ token, findUser })
                            })
                            .catch(err => { console.log(err) })

                    }
                } catch (error) {
                    console.log(error);
                }

            } else {
                res.status(401).json({ message: 'this link is not correct ' })
            }
        } catch (error) {
            res.status(401).json({ message: 'this link is not correct ' })
        }
    }
}



module.exports = new Usercontroller()