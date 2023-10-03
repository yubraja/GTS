const User = require('../models/user');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

//login users
router.post('/', async (req, res) => {
    //checking email exists in user model
    const user = await User.findOne({ email: req.body.email });

    if (! user ) return res.json({msg:'invalid email or password'});
  
    if(user){
    //check verified user or not
    if (user && user.verified == false)
      return res.json({msg:'verify before login! success'});
  
    //check password is correct for user 
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({msg:'invalid email or password'});
if(validPass){
    req.session.userId=user._id.toString()
    res.json({msg:"login successful Success"})
}
   
    }
});
  

module.exports = router;
