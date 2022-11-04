const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Name"],
    },
    avatar: {
        public_id: String,
        url: String,
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please Enter a password"],
        minlength: [6, "Password must be atleast 6 characters"],
        select: false, //this means that when a user data is accessed, everything except password will be called
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",

        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],



});

module.exports = mongoose.model("User", userSchema);