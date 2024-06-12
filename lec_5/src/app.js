import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "AR",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  if (req.session.page) {
    req.session.page++;
  } else {
    req.session.page = 1;
  }
  res.send(`
    <p style="color: ${req.session.page !== 1 ? "green" : "blue"}"> PageCount: ${req.session.page}  </p>
  `);
});

export { app };
