const ForumPost = require('../models/ForumPost')
const Comment = require('../models/Comment')

class ForumController {
    addPost(req, res) {
        const { post } = req.body
        const forumPost = new ForumPost({
            post,
            id_user: req.User
        })

        forumPost.save()
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => console.log(err))
    }

    async getAllPost(req, res) {
        try {
            const { page, limit } = req.query;
            const skip = (page - 1) * limit
            const getPost = await ForumPost.aggregate([
                { $match: {} },
                { $skip: skip },
                { $limit: limit * 1 },
                {
                    $lookup: {
                        from: "users",
                        localField: "id_user",
                        foreignField: "_id",
                        as: "user"
                    }
                },
                {
                    // Comment.aggregate([
                    //     { $match: {} }
                    // ]),
                    //  $match: {id_post_f : post._id} ,
                    $lookup: {
                        // $match: {id_post_f : post._id} ,
                        from: "comments",
                        localField: "_id",
                        foreignField: "id_post_f",
                        as: "comment"
                    }
                },
                {
                    // Comment.aggregate([
                    //     { $match: {} }
                    // ]),
                    //  $match: {id_post_f : post._id} ,
                    $lookup: {
                        // $match: {id_post_f : post._id} ,
                        from: "replays",
                        localField: "_id",
                        foreignField: "id_comment",
                        as: "replay"
                    }
                },
                // { $unwind: "$user" },
                // {
                //     "$project": {
                //         "post": 1,
                //         "createdAt":1,
                //         "user._id": 1,
                //         "user.first_name": 1,
                //         "comment._id":1
                //     }
                // },

            ])
            res.status(200).json(getPost)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ForumController()