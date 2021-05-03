const router = require('express').Router()
const CommentController = require('../controllers/commentController')
const replayController = require('../controllers/replayController')
const userAuth = require('../middleware/userAuth')

router.post('/',userAuth,CommentController.addCommnent)
router.post('/addReplay',userAuth,replayController.addReplay)

module.exports = router