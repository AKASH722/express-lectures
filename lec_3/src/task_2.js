// process a form using post method form has fields like username, password, confirm password, gender, submit and reset button
// after entering field if password and confirm password match then form should be proceeded an all relevant and selected fields
// value should be printed otherwise by printing warning msg in red color it should terminate

import express from "express";

const app = express();
app.use(express.static("public", { index: "task_2.html" }));
app.use(express.urlencoded({ extended: false }));

app.post("/register", (req, res) => {
  const { password, confirm_password } = req.body;
  if (password !== confirm_password) {
    res.send(
      '<p style="color: red"> Password and Confirm Password does not match</p>'
    );
  }
  res.send({ ...req.body });
});

export { app };
