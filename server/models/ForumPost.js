const mongoose = require('mongoose')

const postForumSchema = mongoose.Schema({
  post: {
    type: String,
    required: true
  },
  id_user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
},
  {
    timestamps: true,
  })

const PostForum = mongoose.model('PostForum', postForumSchema)
module.exports = PostForum