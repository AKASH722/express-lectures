// Student Form: name, email, course(CE, IT, CSE)
// On Submit: display of /student page using pug file

import express from "express";

const app = express();

const students = [];

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("student-form");
});

app.post("/submit", (req, res) => {
  students.push(req.body);
  res.redirect("/student");
});

app.get("/student", (req, res) => {
  res.render("students", { students });
});

export { app };
