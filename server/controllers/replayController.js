const Replay = require('../models/Replay')

class ReplayController {
    async addReplay(req, res) {
        const repl = new Replay({
            replay: req.body.replay,
            id_comment: req.body.id_comment
        })
        try {
            const saveReplay = await repl.save()
            res.status(200).json(saveReplay)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ReplayController()