const jwt = require('jsonwebtoken')

const verify = async (req, res, next, key) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decodetoken = jwt.verify(token, key);
        req.Id = decodetoken;
        next();
      } catch (error) {
        res.status(401).send({ message: error.message });
      }
    }
  
    if (!req.headers.authorization) {
      res.status(401).send("Not Authorized, No token");
    }
  }
  
module.exports = verify;