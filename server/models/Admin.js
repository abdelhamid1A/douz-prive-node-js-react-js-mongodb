const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const adminSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : [true,'entre votre mot de passe svp :)']
    },
    is_admin:{
        type:Boolean,
        default:true
    }
},
  {
    timestamps: true,
  })
adminSchema.methods.generatToken = function(){
    const token = jwt.sign({_id:this._id,is_admin:this.is_admin},process.env.TOKENKEYFORADMIN)
    return token
}
const Admin = mongoose.model('Admin',adminSchema)
module.exports =Admin