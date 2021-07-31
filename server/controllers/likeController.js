const Like = require('../models/Like')
const jwt = require('jsonwebtoken')

class LikeController{
    async addLike(req,res){
        
        const {id_post_f} = req.body
        try {
            const like = new Like({
                id_user:req.User,
                id_post_f
            })
            await like.save()
            res.status(200).send("seved")
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

module.exports = new LikeController()