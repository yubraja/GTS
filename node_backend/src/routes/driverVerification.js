const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Route to list out drivers for verification
router.get("/listout", async (req, res) => {
  try {
    const users = await User.find({
      role: "Driver",
      isActualDriver: false,
    });

    if (users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ message: "No drivers available for verification" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to update driver verification status
router.post("/update/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const filter = { _id: userId };
    const update = { $set: { isActualDriver: true } };

    const updatedUser = await User.findOneAndUpdate(filter, update, {
      new: true, // Return the updated document
    });

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
