const mongoose = require('mongoose');
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const mongoosePaginate = require('mongoose-paginate-v2');

const vehiculeScheme = mongoose.Schema({
    picture:{
        type : String,
        required : true
    },
    title:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    userId:{
        type : String,
        required : true,
        ref: User
    },
    type:{
        type : String,
        required : true
    },
    is_accedent:{
        type : String,
        required : true,
        default : false
    },
    // model:{
    //     type : Number,
    //     required : true
    // },
},
    {
        timestamps: true,
    })
vehiculeScheme.plugin(mongoosePaginate);
const Vehicule = mongoose.model('Vehicule',vehiculeScheme)
module.exports = Vehicule