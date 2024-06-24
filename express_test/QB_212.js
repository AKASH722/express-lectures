// Process a form using post method.
// Form has fields like username, password, confirm password, gender, submit and reset buttons.
// After entering all fields, If password and confirm password matches, then form should be processed and all relevant and selected fields’ values should be printed.
// Otherwise, by printing warning message in red color, it should terminate. No need to write file having form elements

import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public", { index: "form.html" }));

app.post("/register", (req, res) => {
  const { username, password, confirm_password, gender } = req.body;
  if (password === confirm_password) {
    res.send(`
      username: ${username}<br>
      password: ${password}<br>
      confirm_password: ${confirm_password}<br>
      gender: ${gender}
    `);
  } else {
    res.send(
      '<p style="color: red"> Password and Confirm Password should be same</p>',
    );
  }
});

app.listen(3000, () => console.log("http://localhost:3000"));
