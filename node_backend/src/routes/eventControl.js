const Event = require('../models/event');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
//save event
router.post('/create', async (req, res) => {
    const id=req.session.userId;
    const user=await User.findOne({_id:id});
    const role=user.role;
    if(role!=="Driver"){
        res.json({msg:"can't create event"})
    }
    const event = new Event({
        driver:id,
        title: req.body.title,
        cId: req.body.id,
        start: req.body.start,
        end: req.body.end,
        allday:req.body.allDay
    });
    await event.save();
});

router.get('/getEvents', async (req, res) => {
   const events=await Event.find();
   if(events){
   res.json({events:events})
   }
});
  
  

module.exports = router;
