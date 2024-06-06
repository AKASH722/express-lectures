import express from "express";

const app_1 = express();

app_1.get("/", (req, res) => {
  res.write("Hello ExpressJS");
  res.send();
});

app_1.get("/about", (req, res) => {
  res.write("About Page");
  res.send();
});

app_1.get("/", (req, res) => {
  res.set("content-type", "text/html");
  res.send(`
    <h3> Hello </h3>
  `);
});

app_1.get("/json", (req, res) => {
  const obj = [
    {
      name: "Akash",
      age: 19,
    },
    {
      name: "Krish",
      age: 19,
    },
  ];
  // res.json(obj);
  res.send(obj);
});

export { app_1 };
