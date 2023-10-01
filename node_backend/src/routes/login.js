const User = require('../models/user');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

//login users
router.post('/', async (req, res) => {
    //checking email exists in user model
    const user = await User.findOne({ email: req.body.email });

    if (! user ) return res.status(400).json({msg:'invalid email or password'});
  
    if(user){
    //check verified user or not
    if (user && user.verified == false)
      return res.status(400).json({msg:'verify before login!'});
  
    //check password is correct for user 
    const validPass = bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({msg:'invalid email or password'});

    req.session.userId=user._id.toString()
    res.json({result:user})
    }
});
  

module.exports = router;
