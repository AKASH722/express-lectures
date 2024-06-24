// write an express.js script to load an HTML file having username and password and submit button.
// On clicking submit button.
// It should jump on "check" page using "POST" method.
// If username is "admin" ,
// then jump on next middleware to print "welcome… admin" ,
// if username is not "admin" ,
// then stay on same middleware to print "warning msg" in red color.

import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public", { index: "login_form.html" }));

app.post("/check", (req, res, next) => {
  const { username } = req.body;
  if (username === "admin") {
    next();
  } else {
    res.send('<p style="color: red">warning msg</p>');
  }
});

app.post("/check", (req, res) => {
  res.write("<h1> Welcome Admin </h1>");
  res.send();
});

app.listen(3000, () => console.log("http://localhost:3000"));
