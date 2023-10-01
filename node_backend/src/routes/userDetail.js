const express = require('express');
const router = express.Router();
const User=require('../models/user')


router.get('/',async(req,res)=>{
 const userId=req.session.userId
 const user=await User.findOne({_id:userId})
if(user){
    res.send(user)
    res.send(false)
}
})


module.exports = router;