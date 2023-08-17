const express = require('express')
const router = express.Router();
const Fav = require('../models/Fav')
const getuser = require('../getuser')


router.get('/getallfavs', getuser ,async (req,res)=>{
    try{ 
        let favs = await Fav.find({user:req.user});
        res.json(favs);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Some error occured"});
    }
})

router.post('/isfav',getuser,async(req,res)=>{
    try{
        let exercise = await Fav.findOne({user:req.user, exercise:req.body.exercise})
        if(!exercise) return res.status(200).json({isfav:false})
        else res.status(200).json({isfav:true})
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:"Some internal error occured"})
    }
})

router.post('/addfav',getuser,async (req,res)=>{
    try{
        await Fav.create({
            exercise:req.body.exercise,
            user:req.user,
            name:req.body.name,
            equipment:req.body.equipment,
            bodyPart:req.body.bodyPart,
            target:req.body.target
        })
        res.status(200).send("Succusfully added")
    }
    catch(error){
        console.error(error)
        res.status(500).json({error:"Some internal error occured"})
    }
})

router.delete('/removefav',getuser,async (req,res)=>{
    let todelete = await Fav.findOne({user:req.user, exercise:req.body.exercise})
    if(!todelete) return res.status(404).send("Not found")
    todelete = await Fav.findOneAndDelete({user:req.user, exercise:req.body.exercise})
    res.json({deleted:todelete,msg:"Deleted successfully"})
})


module.exports = router