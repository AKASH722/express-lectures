// Pug file: Text and Email
// //data to submit

import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("form");
});
app.post("/data", (req, res) => {
  res.render("data", req.body);
});

// Form: Message, Name, ID to PUG Template in h1, h2 and h3 tag respectively and display data in browser

export { app };
