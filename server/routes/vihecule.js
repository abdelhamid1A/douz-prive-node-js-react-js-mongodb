const express = require('express')
const router = express.Router()
const viheculeController = require('../controllers/viheculeController')
const {upload} = require('../config/upload')

router.post('/',
upload.single('picture'),
viheculeController.addVihecule)
router.get('/',viheculeController.getVihecule)



module.exports = router