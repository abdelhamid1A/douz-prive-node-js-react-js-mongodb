const mongoose = require('mongoose')

const likeschema = mongoose.Schema({
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

const Like = mongoose.model('Like', likeschema)
module.exports = Like