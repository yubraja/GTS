const express = require('express');
const router = express.Router();
const User = require('../models/driver.js')
router.get('/driver', (req, res) => {
    User.find({})
        .then((users) => {
            res.render('users/index', { users });
        })
        .catch(console.error)
})