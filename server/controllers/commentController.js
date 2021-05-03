const Comment = require('../models/Comment')

class CommentController {
    
    async addCommnent(req,res){
        const {comment,id_post_f} = req.body
        const com = new Comment({
            comment,
            id_post_f,
            id_user:req.User
        })
        try {
            const saveCommnet = await com.save()
            res.status(200).send(saveCommnet)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CommentController()