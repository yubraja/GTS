const Token = require('../models/token');
const User = require('../models/user');
const express = require('express');
const router = express.Router();
require('dotenv').config();


//verify the user through email
router.get('/:id/:token', async (req, res) => {
    try {
      let userData= await User.findOne({ _id: req.params.id });
      if (!userData) return res.status(400).json({msg:'Invalid link'});
      let token;

    if(userData){
        token = await Token.findOne({
         userId: userData._id,
         token: req.params.token,
       });
     }
      if (!token) return res.status(400).json({msg:'Invalid link'});
      if (token){
        const currentTime= new Date().getTime()
        const diff=token.expireIn-currentTime
        if(diff<0){
          res.status(400).json({msg:'link expired'})
        }
      }
      
      await Token.findByIdAndRemove(token._id);


      if(userData){
      await userData.updateOne({ _id: userData._id, verified: true });
       userData= await User.findOne({ _id: req.params.id });
    if(userData.verified){
      res.redirect('http://localhost:3000/');    //redirect to verify page after verified
    }
     }
    } catch (error) {
      res.status(400).json({msg:error});
    }
  });

  module.exports = router;