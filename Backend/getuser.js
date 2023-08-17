const jwt = require('jsonwebtoken')
const SIGN = "FitZone"

const getuser=(req,res,next)=>{
    let webtoken = req.header('authtoken');
    if(!webtoken){
        res.status(401).json({error:"invalid credentials"});
    }
    try{
        let authdata = jwt.verify(webtoken,SIGN);
        req.user = authdata.id;
        next();
    }
    catch(error){
        console.error(error);
        res.status(401).json({error:"invalid credentials"});
    }
}

module.exports = getuser;