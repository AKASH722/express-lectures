// 1. Create a html file which contains one text field for name, email id filed and checkbox for subscription
// html file will load on home page email id and name are required on login page welcome user and email id data
// should be printed
// 2. if user check the subscription then thanks for the subscription msg will be printed and logout link will be
// display under the msg
// 3. if user click logout link then will be redirected to the home page
// 4. if user has not opted for the subscription then you can subscribe to get daily updates msg will be printed and
// subscribe link will be displayed under msg
// 5. if user click subscribe link then will be redirected to the subscription page, in this page thank-you for
// the visit msg will be printed and logout link will be displayed under the message
// Note: use concept of the middleware, and you can use any of http method

import express from "express";
const app = express();
app.use(express.static("public", { index: "task_3.html" }));
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res, next) => {
  const { name, email } = req.body;
  res.contentType("html");
  res.write(`Welcome ${name}`);
  res.write("<br/>");
  res.write(`Your email id is ${email}`);
  next();
});

app.post("/", (req, res, next) => {
  res.write("<br/>");
  if (req.body.subscription === "true") {
    res.write("Thank-you for subscription");
  } else {
    res.write("You can get daily update");
    res.write("<br/>");
    res.write(`<a href="/subscribe">Subscribe</a>`);
  }
  next();
});

app.post("/", (req, res, next) => {
  res.write("<br/>");
  res.write('<a href="/logout"> logout </a>');
  res.send();
});

app.get("/logout", (req, res) => {
  res.redirect("/");
});

app.get("/subscribe", (req, res) => {
  res.send(`
    Thank-you for subscription <br/>
    <a href="/logout"> logout </a>
  `);
});
export { app };
