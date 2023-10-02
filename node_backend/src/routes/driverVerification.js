const express = require('express');
const router = express.Router();
const User=require('../models/user')


//routes for actual Driver verification
router.get('/:id',async(req,res)=>{

    const user=await User.findById(req.params.id)
    if(user.isDriverVerified==false){
        user.isDriverVerified=true
        await user.save();
        res.send(user)
    }
    // res.send(false)
    console.log(user)
})


module.exports = router;