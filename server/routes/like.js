const router = require('express').Router()
const likeController = require('../controllers/likeController')
const userAuth = require('../middleware/userAuth')

router.post('/',userAuth,likeController.addLike)

module.exports = router