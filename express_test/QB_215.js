// write an express.js script to print "hello World" also run on localhost:4000

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(4000, () => console.log("http://localhost:4000"));
