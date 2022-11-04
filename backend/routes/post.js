// we will make apis in this, use functions that have been made in 'controllers' folder
const express = require("express");
const { createPost } = require("../controllers/post");
const router = express.Router();

router.route("/posts/upload").post(createPost);

module.exports = router;