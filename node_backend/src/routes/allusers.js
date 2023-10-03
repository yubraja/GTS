const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Route to list out user,driver and admin for verification
router.get("/", async (req, res) => {
  try {
    const users = await User.find({
        role: { $in: ["User", "Driver"] },
    });

    if (users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ message: "No User Registration Available " });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
