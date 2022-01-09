const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const {upload} = require('../config/upload')

// router.post('/signup',upload.single('picture'),userController.signUp)
router.post('/signup',userController.signUp)
router.post('/signin',userController.signIn)
router.get('/validation/:token',userController.accountVerify)


module.exports = router