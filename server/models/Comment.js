const mongoose = require('mongoose')

const commentchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    id_user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    id_post_f: {
        type: mongoose.Types.ObjectId,
        ref: 'ForumPost'
    }
},
    {
        timestamps: true,
    })

const Comment = mongoose.model('Comment', commentchema)
module.exports = Comment