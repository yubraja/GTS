const Token = require("../models/token");
const User = require("../models/user");
const express = require("express");
const router = express.Router();
const sendEmailtoUser = require("../utils/emailtouser");
require("dotenv").config();

// Verify the user through email
router.post("/", async (req, res) => {
  try {
    // const user = await User.findOne({ _id: req.params.id });

    // if (!user) {
    //   return res.status(404).json({ error: "User not found" });
    // }

    const emailToSend = req.body.email;

    if (emailToSend) {
      await sendEmailtoUser(emailToSend);
      res.json({ msg: "Email sent" });
    } else {
      res.json({ msg: "User does not have an email" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
