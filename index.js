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
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/notfound", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/notfound.html"));
});
