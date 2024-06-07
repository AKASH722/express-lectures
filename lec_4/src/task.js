// create a login form on index.html file after giving submit button it should jump to /next page and value of username should be stored inside cookie, perform the task
// get method observe and check inside browser that cookie is stored perfectly or not

import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.post("/next", (req, res) => {
  res.cookie("username", req.body.username);
  res.send(`
    <a href="/logout"> logout </a>
  `);
});

app.get("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

export { app };
