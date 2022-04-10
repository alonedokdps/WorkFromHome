const express = require("express");
const router = express.Router();
const Post = require("../model/Post.js");
const verifyToken = require("../middleware/auth");
router.post("/", verifyToken, async (req, res) => {
  const {title, description, url, status} = req.body;
  if (!title)
    return res.status(404).json({success: false, message: "title is required"});
  try {
    const newPost = new Post({
      title,
      description,
      url: url.startsWith("https://") ? url : `https://${url}`,
      status: status || "TO LEARN ",
      user: req.userId,
    });
    await newPost.save();
    res.json({success: true, message: "Post created successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).json({success: false, message: "internal server error"});
  }
});
router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({user: req.userId}).populate("user", [
      "username",
    ]);
    res.json({success: true, posts});
  } catch (err) {
    console.log(err);
    res.status(500).json({success: false, message: "internal server error"});
  }
});
router.put("/:id", verifyToken, async (req, res) => {
  const {title, description, url, status} = req.body;
  if (!title)
    return res.status(404).json({success: false, message: "title is required"});
  try {
    let updatedPost = {
      title,
      description: description || "",
      url: (url.startsWith("https://") ? url : `https://${url}`) || "",
      status: status || "TO LEARN",
    };
    const postUpdateCondition = {_id: req.params.id, user: req.userId};
    updatedPost = await Post.findOneAndUpdate(
      postUpdateCondition,
      updatedPost,
      {new: true}
    );
    //user not authorised to update post or post not found
    if (!updatedPost)
      return res.status(401).json({
        success: false,
        message: "Post not found or user not authorised",
      });
    res.json({success: true, message: "Excellent progress "});
  } catch (err) {
    console.log(err);
    res.status(500).json({success: false, message: "internal server error"});
  }
});
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const postDeleteCondition = {_id: req.params.id, user: req.userId};
    const deletePost = await Post.findOneAndDelete(postDeleteCondition);
    //user not authorised to update post or post not found
    if (!deletePost)
      return res.status(401).json({
        success: false,
        message: "Post not found or user not authorised",
      });
    res.json({success: true, post: deletePost});
  } catch (err) {
    console.log(err);
    res.status(500).json({success: false, message: "internal server error"});
  }
});
module.exports = router;
