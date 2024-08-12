const express = require("express");
const {
  create_post,
  get_all_posts,
} = require("../controllers/post.controller");
//router object
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/post", (req, res) => {
  res.render("post");
});
router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/notfound", (req, res) => {
  res.render("notfound");
});

router.get("/create-new-post", (req, res) => {
  res.render("new-post");
});

/**
 * BACKEND ROUTES START
 */
router.post("/create-post", create_post);
router.get("/get-all-posts", get_all_posts);
/**
 * BACKEND ROUTES END
 */
module.exports = router;
