const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true , useUnifiedTopology: true },(err,con)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected');
    }
})