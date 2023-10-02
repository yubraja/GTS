const Token = require("../models/token");
const User = require("../models/user");
const crypto = import("crypto");
const bcrypt = require("bcryptjs");
const express = require("express");
const sendEmail = require("../utils/email");
const router = express.Router();
require("dotenv").config();

//register user
router.post("/register", async (req, res) => {
  const { role, email, firstName, lastName, longitude, latitude, number } =
    req.body;
  try {
    const userData = await User.findOne({ email: req.body.email });

    if (userData && userData.verified == true)
      return res
        .status(400)
        .json({ msg: "User with given email already exist! invalid " });

    if (userData && userData.verified == false)
      return res
        .status(400)
        .json({ msg: "verification email has been sent to your email success" });

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = await new User({
      role,
      email,
      firstName,
      lastName,
      longitude,
      latitude,
      number,
      password: hashPassword,
    }).save();

    let token = await new Token({
      userId: user._id,
      token: (await crypto).randomBytes(32).toString("hex"),
      expireIn: new Date().getTime() + 300 * 1000,
    }).save();
    const message = `${process.env.BASE_URL}/verify/${user.id}/${token.token}`;
    await sendEmail(user.email, "Verify Email", message);

    res
      .status(200)
      .json({ msg: "An Email sent to your account please verify success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
