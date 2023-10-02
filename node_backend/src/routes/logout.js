const express = require('express');
const router = express.Router();

//logout user and clear session
router.get('/',async(req,res)=>{
   //req.session.destroy()
    req.session.destroy((err)=>{
        res.clearCookie('sid')
        res.json({msg:'You are not logged in anymore! invalid'})
        if(err){
          console.log(err)
          return
        }
})
})

module.exports = router;