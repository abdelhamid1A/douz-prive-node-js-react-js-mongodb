const Admin = require('../models/Admin')
const Vin = require('../models/Vin')
const bcrypt = require('bcrypt')

class AdminController {
    async signUp(req, res) {
        const { name, email, password } = req.body
        bcrypt.hash(password, 10, (err, hash) => {
            if (hash) {
                const admin = new Admin({
                    name,
                    email,
                    password: hash
                })
                admin.save()
                    .then(doc => {
                        res.status(200).send(doc)
                    })
                    .catch(err => console.log(err))
            }
        })
    }

    async signIn(req, res) {
        const { email, password } = req.body
        try {
            const findAdmin = await Admin.findOne({ email })
            if (findAdmin) {
                bcrypt.compare(password, findAdmin.password, (err, result) => {
                    if (result) {
                        const token = findAdmin.generatToken()
                        res.status(200).json({ user: findAdmin, token })
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

    async addVin(req, res) {
        const { vin, state } = req.body
        const vn = new Vin({
            vin,
            state,
            id_admin:req.Admin
        })
        vn.save()
        .then(doc=>{
            res.status(200).send(doc)
        })
        .catch(err=>console.log(err))
    }
}
module.exports = new AdminController()