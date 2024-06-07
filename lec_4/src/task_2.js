// You have been assigned to develop a user feedback form for a website using express.js and cookies implement the following requirements
// 1. create a form with the following fields (name - input, email - input, message - textarea, rating - radio(Bad, average, good, very good, excellent)
// 2. when the user submits the form store there feedback information like (name, email, message, rating) named feedback that expires in 10s
// 3. display the success msg to the user after submitting the form and create a link to display feedback from cookies
// 4. when user clicks on the link retrieve the cookie display details
// 5. add log-out to redirect to home
// Note: simple.html, app.js, get,

import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public", { index: "simple.html" }));
app.use(cookieParser());

app.get("/submit", (req, res) => {
  res.cookie("feedback", JSON.stringify(req.query), { maxAge: 10000 });
  res.send(`
      Form submitted successfully
      <a href="/feedback"> View Feedback </a>
  `);
});

app.get("/feedback", (req, res) => {
  if (req.cookies.feedback) {
    res.send(req.cookies.feedback);
  } else {
    res.send(`
      sorry your feedback expired
    `);
  }
});
export { app };
