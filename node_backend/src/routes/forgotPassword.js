const User = require('../models/user');
const otp=require('../models/otp')
const express = require('express');
const router = express.Router();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/otp');

router.post('/reset', async (req, res) => {
  try {
    const otps= await otp.findOne({email:req.body.email})
    if(otps)  return res.status(400).json({msg:'otp has already sent'})
    const user = await User.findOne({ email: req.body.email }) 
    if(!user) return res.status(400).json({msg:'email doesnt exist'})
     
    const otpCode=Math.floor((Math.random()*10000)+1)
     const otpData=new otp({
      email:req.body.email,
      code:otpCode,
      expireIn:new Date().getTime()+ 500*1000
     })
     await otpData.save()
    if(user)
    await sendEmail(user.email, 'reset password', String(otpCode));

    res.status(200).json({msg:'code has been sent to your email success'});
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

router.post('/update', async (req, res) => {
    try {
      const data = await otp.findOne({code:req.body.code})
      if(!data) return res.json({msg:'invalid email or otp'})
      const email=data.email
      if (data){
        const currentTime= new Date().getTime()
        const diff=data.expireIn-currentTime
        if(diff<0){
          res.json({msg:'invalid --> token expired'})
         const otpId=data._id
        await otp.findByIdAndRemove(otpId);
        }
        
      }
        //hash password
      const user=await User.findOne({email}) 
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      if(user){
        user.password=hashPassword
        await user.save()
      }
       res.json({msg:'password changed successfully--> success'})
       const otpId=data._id
       await otp.findByIdAndRemove(otpId);
    } catch (error) {
      //res.status(400).send({ msg: error.message });
    }
  });


module.exports = router;
