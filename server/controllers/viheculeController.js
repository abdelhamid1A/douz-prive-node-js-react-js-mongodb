const Vehicule = require('../models/Vehicule')
const jwt = require('jsonwebtoken')
const helpersFunction = require('../helpers/index')
const mongoHelper = require('../helpers/mongo.helper')

class vehiculeController {
    async getVihecule(req,res) {
        const {limit,page,pagination,type,serachText} = req.query;
        let query={};
        if(type){
            query.type={ $regex: new RegExp(type), $options: "i" }
        }
        if(serachText){
            query.title={ $regex: new RegExp(serachText), $options: "i" }
        }
        // console.log(pagination);
        var options = {
            populate: [{
              path: 'userId',
              select: 'first_name'
            }],
            // sort: ({ createdAt: -1 })
          };
        //   var options = {
        //     select: 'title userId',
        //     // sort: { date: -1 },
        //     populate: 'user',
        //     // lean: true,
        //     // offset: 20,
        //     // limit: 10,
        //   };
        const vihecule = await Vehicule.paginate(query,{limit,page,options})
        res.send(vihecule)
    }
    async addVihecule(req,res) {
        try {
        //    const token =  helpersFunction.spliceToken(req.headers.authorization)
        //    console.log(token[1]);
           const userId =await mongoHelper.findUserUsingToken(req.headers.authorization)
           if(userId){
            //    console.log(req.headers.authorization);
               req.body.picture = req.file.filename
               const {type,picture,title,price,city,description,phone,is_accedent,model} = req.body
               // res.send(title)
               const vehicule = new Vehicule({
                   type,picture,title,price,city,description,phone,userId:userId._id,is_accedent,model
               })
               vehicule.save()
               .then(doc=>{
                   res.status(200).json({message:'success',data:doc})
               })
               .catch(err=>{
                   res.status(404).json({err})
               })

           }else{
            res.status(401).json({message:'error auth'})
           }

        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports = new vehiculeController()