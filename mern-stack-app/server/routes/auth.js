const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const User = require("../model/User.js");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth");
router.post("/register", async (req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({success: false, message: "Missing username and password"});
  }
  try {
    const user = await User.findOne({username});
    if (user)
      return res
        .status(400)
        .json({success: false, message: "Username already taken"});
    //all good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();
    //return token
    const accessToken = jwt.sign(
      {userId: newUser._id},
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({success: false, message: "internal server error"});
  }
});
router.post("/login", async (req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({success: false, message: "Missing uername and password"});
  }
  try {
    //check for extiting user
    const user = await User.findOne({username});
    if (!user)
      return res
        .status(400)
        .json({success: false, message: "incorrect username "});
    //Username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(400)
        .json({success: false, message: "incorrect password"});
    //all good
    const accessToken = jwt.sign(
      {userId: user._id},
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(400).json({
      success: true,
      message: "User logged in successfully",
      accessToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({success: false, message: "internal server error"});
  }
});
//check if user is logged in
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user)
      return res.status(400).json({success: false, message: "User not found"});
    res.json({success: true, user});
  } catch (err) {
    console.log(err);
    res.status(500).json({success: false, message: "internal server error"});
  }
});
module.exports = router;
