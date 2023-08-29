const express = require('express')
const router = express.Router();
const Fav = require('../models/Fav')
const getuser = require('../middlewares/getuser')

//Route to get a list of all favs of a particular user
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

//Route to check if an exercise is a fav of a given user
router.get('/isfav',getuser,async(req,res)=>{
    try{
        let exercise = await Fav.findOne({user:req.user, exercise:req.header('exercise')})
        if(!exercise)  res.status(200).json({isfav:false})
        else res.status(200).json({isfav:true})
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:"Some internal error occured"})
    }
})

//Route to add an exercise to fav for a given user
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
        res.status(200).send({msg:"Succusfully added",user:req.user})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error:"Some internal error occured"})
    }
})


//Route to remove an exercise from fav for a given user
router.delete('/removefav',getuser,async (req,res)=>{
    let todelete = await Fav.findOne({user:req.user, exercise:req.body.exercise})
    if(!todelete) return res.status(404).send("Not found")
    todelete = await Fav.findOneAndDelete({user:req.user, exercise:req.body.exercise})
    res.json({deleted:todelete,msg:"Deleted successfully"})
})


module.exports = router