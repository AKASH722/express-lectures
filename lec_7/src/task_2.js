// Pug File: Text Field and A password Field
// Submit -> Next Page -> (login) data will be displayed in h1 tag welcome user and your password is in display.pug file

import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/login", (req, res) => {
  res.render("display", req.body);
});

export { app };
