const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    image: String,
    caption: String,
  
});

module.exports = mongoose.model("Post", postSchema);
