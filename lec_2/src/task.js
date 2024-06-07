// WAP ExpressJS script to perform task as asked below
// 1. Create html file which contains 2 number input fields, 1 dropdown options(add, sub, mul, div) & submit btn
// 2. input field must contain value > 0 else throw message plz enter valid number, user must select any of the formula from the dropdown else give message you haven't select any formula note msg will be displayed on "/calculator"
// 3. if one formula is selected & numbers are entered then respective calculation will be performed on the page "/calculator"
// 4. use get method to request data

import express from "express";

const app = express();
app.use(express.static("public", { index: "task_2.html" }));
app.use(express.urlencoded({ extended: false }));

app.get("/calculator", (req, res) => {
  const n1 = Number(req.query.n1);
  const n2 = Number(req.query.n2);
  const operation = req.query.operation;
  if (n1 < 0 || n2 < 0) {
    res.send("<h1>Please Enter value Positive Numbers</h1>");
    return;
  }
  switch (operation) {
    case "add":
      res.send(`<h1>ANS: ${n1 + n2}</h1>`);
      break;
    case "sub":
      res.send(`<h1>ANS: ${n1 - n2}</h1>`);
      break;
    case "mul":
      res.send(`<h1>ANS: ${n1 * n2}</h1>`);
      break;
    case "div":
      res.send(`<h1>ANS: ${n1 / n2}</h1>`);
      break;
    default:
      res.send("<h1>You haven't selected any formula</h1>");
      break;
  }
});

export { app };
