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

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const ejs = require("ejs");
const connect_to_mongo_db = require("./config/database_mongo");
const router = require("./routes/routes");
app.use(express.static("public"));
dotenv.config();
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

connect_to_mongo_db();

app.use("/", router);

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/post", (req, res) => {
//   res.render("post");
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

// app.get("/notfound", (req, res) => {
//   res.render("notfound");
// });
