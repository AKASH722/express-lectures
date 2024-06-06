import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static("public"));

app.get("/process_get", (req, res) => {
  res.send({ ...req.query });
});

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "image.png"));
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

//to print message in nextLine splitting by '.' & from the HTML file contains form of text area for the message & submit button
app.use(express.static(__dirname, { index: "task1.html" }));
app.get("/get_text", (req, res) => {
  res.send(`<pre>${req.query.text.split(".").join("\n")}</pre>`);
});

export { app };
