// WAP script meet following requirements
// 1. Create "session.html" containing form username, password, Login Btn display on localhost
// 2. onClick login btn redirect to "/save" page store username & password in session
//    then redirect to "/fetch" read value, logout link btn here on this page check authentication of user
// 	 username & password must be admin & admin@123 respectively
// 3. if above condition is true then display "Welcome Admin" & logout link on "/fetch"
// 4. onClick logout link redirect to "/destroy" & destroy the session there & display "Session Destroyed" link of login form
//    else display please enter valid username & password & login link on "/fetch"

import express from "express";
import session from "express-session";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public", { index: "session.html" }));
app.use(
  session({
    secret: "AR",
    saveUninitialized: true,
    resave: true,
  })
);

app.post("/save", (req, res) => {
  req.session.username = req.body.username;
  req.session.password = req.body.password;
  res.redirect("/fetch");
});

app.get("/fetch", (req, res) => {
  if (req.session.username && req.session.password) {
    if (
      req.session.username === "admin" &&
      req.session.password === "admin@123"
    ) {
      res.send(`
            <h1>Welcome Admin </h1>
            <a href="/destroy"> Logout </a>
        `);
    } else {
      req.session.destroy();
      res.send(`
        Please enter valid username & password
        <a href = "/">Login</a>
      `);
    }
  } else {
    res.redirect("/");
  }
});

app.get("/destroy", (req, res) => {
  req.session.destroy();
  res.send(`
        Session Destroyed
        <a href = "/">Login</a>
      `);
});

export { app };
