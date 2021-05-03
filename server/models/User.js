const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name:{
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
    city:{
        type :String,
        required :true,
    },
    phone:{
        type :String,
        required :true,
    },
    last_connection:{
        type :Date,
        default :new Date(),
    },
    picture:{
        type :String,
    },
    is_valid:{
        type:Boolean,
        default:false
    }
},
  {
    timestamps: true,
  })
userSchema.methods.generatToken = function(){
    const token = jwt.sign({_id:this._id,is_valid:this.is_valid},process.env.TOKENKEY)
    return token
}
const User = mongoose.model('User',userSchema)
module.exports =User