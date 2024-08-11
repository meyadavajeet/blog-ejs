const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  title: String,
  body: String,
});

const BlogPost = mongoose.model("posts", BlogPostSchema);
module.exports = BlogPost;
