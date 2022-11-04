//we will make functions in the 'controllers' folder, which will be used in apis that are created in 'routes' folder
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try{
        const newPostData = {
            caption : req.body.caption,
            image:{
                public_id:"req.body.public_id",
                url:"req.body.url"
            },
            owner:req.user._id
            
        }
        const newPost = await Post.create(newPostData);
        res.status(201).json({
            success:true,
            post:newPost
        })
    }
    catch(error){

    res.status(500).json({
        success:false,
        message:error.message
    })

    }
}