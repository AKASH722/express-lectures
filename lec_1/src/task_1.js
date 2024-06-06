// HomePage: Hello Home Page => big and blue color font
// StudentPage: Welcome to Student Page
// AboutPage: About us => red color and italic font
// Note: render res and routing concept

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.type(".html").send(`
      <h1 style="color: blue">Hello HomePage</h1>
    `);
});

app.get("/student", (req, res) => {
  res.contentType("html").send(`
    <p>Welcome to Student Page</p>
  `);
});

app.get("/about", (req, res) => {
  // res.set("content-type", "text/html");
  res.send(`
      <i style="color: red">About Us</i>
    `);
});

export { app };
