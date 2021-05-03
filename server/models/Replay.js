const mongoose = require('mongoose')

const replaySchema = mongoose.Schema({
    replay: {
        type: String,
        required: true
    },
    id_comment: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }
},
    {
        timestamps: true,
    })

const Replay = mongoose.model('Replay', replaySchema)
module.exports = Replay