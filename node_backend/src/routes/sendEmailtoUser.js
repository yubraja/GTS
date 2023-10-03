const User = require("../models/user");
const express = require("express");
const sendEmail = require("../utils/email");
const router = express.Router();


require("dotenv").config();

// send email to userEmail sent from frontend
router.post("/sendEmailtoUser", async (req, res) => {
    const email = req.body.email;

    // sendEmail through node mailer

});

module.exports = router;
