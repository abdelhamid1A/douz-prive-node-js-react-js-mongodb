const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/adminController')
const adminAuth = require('../middleware/adminAuth')

router.get('/',(req,res)=>{
    res.send('hello')
})
router.post('/signUp',AdminController.signUp)
router.post('/signIn',AdminController.signIn)
router.post('/addVin',adminAuth,AdminController.addVin)

module.exports = router