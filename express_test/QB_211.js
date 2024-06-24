// Write an express.js script to define one JSON array of 3 objects having members name and age.
// Names must be sorted according to age.
// If user requests “sorted Names” URL, then all names should be printed according to ascending order of age.

import express from "express";

const app = express();

const users = [
  {
    name: "Akash",
    age: 19,
  },
  {
    name: "Tithi",
    age: 21,
  },
  {
    name: "Krish",
    age: 20,
  },
];

users.sort((a, b) => a.age - b.age);

app.get("/sorted-names", (req, res) => {
  res.send(users);
});

app.listen(3000, () => console.log("http://localhost:3000"));
