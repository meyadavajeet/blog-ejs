const BlogPost = require("../models/post.model");

const create_post = async (req, res) => {
  try {
    const post = await BlogPost.create({
      title: `The Mythbuster’s Guide to Saving Money on Energy Bills`,
      body: `If you have been here a long time, you might remember when I went on ITV Tonight to
                dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money
                topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery
                opens up. You know those bullet-point lists. You start spotting them everything at this time of year.
                They go like this:`,
    });
    res.send(post);
  } catch (error) {
    console.log("error", error.message);
  }
};

const get_all_posts = async (req, res) => {
  try {
    const posts = await BlogPost.find({});
    res.send(posts);
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = {
  create_post: create_post,
  get_all_posts: get_all_posts,
};
