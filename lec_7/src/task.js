// Form: Message, Name, ID to PUG Template in h1, h2 and h3 tag respectively and display data in browser
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("data", {
    message: "Hello",
    name: "Akash",
    id: "29",
  });
});

export { app };
