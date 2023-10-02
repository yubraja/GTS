const express = require('express');
const router = express.Router();
const User=require('../models/user')


//routes for actual Driver verification
router.get('/',async(req,res)=>{

    const user=await User.find()
    if(user){
        // user.isDriver=true
        // await user.save()
        // res.send(true)
        // return
        res.send(user)
    }
    // res.send(false)
    console.log(user)
})


module.exports = router;