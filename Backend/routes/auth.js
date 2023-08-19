const express = require('express')
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
const SIGN = process.env.JWT_SIGN


//Signup route
router.post('/signup', async (req, res) => {
    try {
        let duplicate = await User.findOne({ username: req.body.username })
        if (duplicate) return res.status(400).json({ success: false, error: "Username already exists" })

        let user = User.create({
            username: req.body.username,
            password: req.body.password
        })
        const authtoken = jwt.sign({ id: user.id }, SIGN)
        res.json({ success: true, authtoken })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: "Some internal error Occured" })
    }
})


//Login route
router.post('/login', async (req,res)=>{
    try{
        let user = await User.findOne({username:req.body.username})
        if(!user) return res.status(400).json({success:false, error:"user doesnt exist"})
        if(user.password!==req.body.password) return res.status(400).json({success:false, error:"Wrong credentials"})
        const authtoken =jwt.sign({id:user.id},SIGN);
        res.json({success:true,authtoken})
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router