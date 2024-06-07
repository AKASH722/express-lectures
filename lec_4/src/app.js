import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("jwt", "jwt");
  res.send(req.cookies);
});

app.get("/clear", (req, res) => {
  res.clearCookie("jwt");
  res.send(req.cookies);
});
export { app };
