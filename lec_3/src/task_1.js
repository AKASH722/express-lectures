// to load a html file having username and password also submit button, on clicking submit button it should jump /check page using post msg if username is admin then print msg welcome admin, if username isn't admin then print msg in red color please log in with admin
import express from "express";
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.post("/check", (req, res) => {
  if (req.body.username === "admin") {
    res.send("welcome admin");
  } else {
    res.send('<p style="color: red">please log in with admin</p>');
  }
});

export { app };
