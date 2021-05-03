const express = require('express')
const router = express.Router()
const ForumController = require('../controllers/forumController')
const userAuth = require('../middleware/userAuth')

router.post('/',userAuth,ForumController.addPost)
router.get('/',ForumController.getAllPost)

module.exports = router