const express = require("express");
const multer = require("multer");
const uploadfile = require("./service/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({storage:multer.memoryStorage()})

app.post("/create-post", upload.single("image"),async(req,res)=>{
   
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No image file provided" });
        }

        const result = await uploadfile(req.file.buffer);
        
        const post = new postModel({
            title: req.body.title || "Untitled",
            image: result.url,
            caption: req.body.caption
        })
        await post.save();
        res.json({message:"post created successfully",post});
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

app.get("/posts",async(req,res)=>{
    const posts = await postModel.find();
    res.json({message:"posts fetched successfully",posts});
})



module.exports = app;