const express = require('express');
const router = express.Router();

//logout user and clear session
router.get('/',async(req,res)=>{
   //req.session.destroy()
    req.session.destroy((err)=>{
        res.clearCookie('sid')
        if(err){
          console.log(err)
          return
        }
})
})

module.exports = router;