//1. index.html
//2. submit -> save session page ,store username in session
//3. after saving session redirect to fetch session page read session value, put a logout
//4. destroy the session on this page and redirect to index.html
import express from "express";
import session from "express-session";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"));
app.use(
  session({
    secret: "AR",
    resave: true,
    saveUninitialized: true,
  })
);

app.post("/save-session", (req, res) => {
  req.session.username = req.body.username;
  res.redirect("/fetch-session");
});

app.get("/fetch-session", (req, res) => {
  if (req.session.username) {
    res.send(`
            ${req.session.username}
            <a href="/logout"> Logout </a>
        `);
  } else {
    res.redirect("/");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

export { app };
