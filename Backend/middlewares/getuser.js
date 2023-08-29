const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
const SIGN = process.env.JWT_SIGN



//Middleware to verify authtoken and get user from it 
const getuser=(req,res,next)=>{
    let webtoken = req.header('authtoken');
    if(!webtoken){
        res.status(401).json({error:"invalid credentials"});
    }
    try{
        let authdata = jwt.verify(webtoken,SIGN);
        req.user = authdata.id;
        console.log(authdata)
        next();
    }
    catch(error){
        console.error(error);
        res.status(401).json({error:"invalid credentials"});
    }
}

module.exports = getuser;