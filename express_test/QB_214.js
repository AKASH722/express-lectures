// write a sript to meet foll requirements.
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesessionpage.
// store username in session.
// 3) After saving session, redirect to fetchsession page and read session value.
// put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

import express from "express";
import session from "express-session";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  }),
);
app.post("/savesessionpage", (req, res) => {
  req.session.username = req.body.username;
  res.redirect("/fetchsession");
});

app.get("/fetchsession", (req, res) => {
  res.send(`
    username: ${req.session.username} <br>
    <a href="/logout">Logout</a>
  `);
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(3000, () => console.log("http://localhost:3000"));
