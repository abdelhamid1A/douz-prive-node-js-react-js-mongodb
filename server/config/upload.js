const multer  = require('multer');

const storage = multer.diskStorage({
  
  destination : function (req,file,cb) {
    cb(null , '../frontend/src/imagesUploded')
  },
  filename : function(req,file,cb){
    cb(null, new Date().toISOString().replace(/:/g, '-')+file.originalname)
  }
  
})
const upload = multer({
  storage:storage,
  limits : {
    fileSize : 2000000
  },
  fileFilter(req, file, cb) {
    if (file.mimetype === 'image/png' || "image/jpg"){
      cb(null, true)
    }else{
      cb(new Error('Please upload an image .png or .jpg'))
    }
    }
})
module.exports = {upload}