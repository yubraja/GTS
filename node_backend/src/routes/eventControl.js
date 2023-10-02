const Event = require('../models/event');
const express = require('express');
const router = express.Router();

//save event
router.post('/create', async (req, res) => {
    //checking email exists in user model
    const event = new Event({
        title: req.body.title,
        createdAt: req.body.Date,
    });

    await event.save();
});
  

module.exports = router;
