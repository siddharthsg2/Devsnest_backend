const express = require("express");
const app = express();

app.listen(1111);

const path = require("path");
var root = __dirname;
// console.log(root);
app.set("views", path.join(root, "/views"));
app.set("view engine", "jade");
app.use("/", (req, res) => {
  res.render("content", { name: "Saksham " });
});

app.get("/", (req, res) => {
  /* 
  res.download(root + "/public/bg.png");
  Mind- "./public/bg.png" won't work here
  */
  // res.sendFile(path.join(root, "./public/bg.png"));
  /*
  here it works with or without '.' before public.  
  //gotta give the absolute path and not the relative. Why? Ans- https://beqode.com/blog/absolute-vs-relative-import-paths-nodejs
  
  */
});