import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.write(`Date: ${new Date()}`);
  next();
});

app.get("/", (req, res, next) => {
  res.write(`\nHello`);
  next();
});

app.get("/", (req, res) => {
  res.send();
});

export { app };
