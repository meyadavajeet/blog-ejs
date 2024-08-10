// const http = require("http");
// const fs = require("fs");
// const homePage = fs.readFileSync("./views/index.html");
// const aboutPage = fs.readFileSync("./views/about.html");
// const contactPage = fs.readFileSync("./views/contact.html");
// const notFoundPage = fs.readFileSync("./views/notfound.html");
// const server = http.createServer((req, res) => {
//   if (req.url === "/about") res.end(aboutPage);
//   else if (req.url === "/contact") res.end(contactPage);
//   else if (req.url === "/") res.end(homePage);
//   else {
//     res.writeHead(404);
//     res.end(notFoundPage);
//   }
// });
// server.listen(3000);

const express = require("express"); // require express module
const app = express(); // calls express function to start new Express app
const path = require("path");
const ejs = require("ejs");
app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "views/index.html"));
  res.render("index");
});

app.get("/post", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "views/post.html"));
  res.render("post");
});
app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "views/about.html"));
  res.render("about");
});

app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "views/contact.html"));
  res.render("contact");
});

app.get("/notfound", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "views/notfound.html"));
});
