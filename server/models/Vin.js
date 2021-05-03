const mongoose = require('mongoose')

const vinSchema = mongoose.Schema({
    vin:{
        type : String,
        required : true
    },
    state:{
        type : Boolean,
        required : true
    },
    id_admin:{
        type:mongoose.Types.ObjectId,
        ref:'Admin'
    }
},
  {
    timestamps: true,
  })

const Vin = mongoose.model('Vin',vinSchema)
module.exports =Vin