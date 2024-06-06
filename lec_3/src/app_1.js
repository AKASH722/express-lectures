import express from "express";
// import bodyParser from "body-parser";
const app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.post("/process", (req, res) => {
  res.send(`
    ${req.body.username}
    ${req.body.password}
  `);
});

export { app };
