import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: "./public/temp",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("file-upload");
});

app.post("/upload", upload.single("pic"), (req, res) => {
  if (req.file) {
    res.send(`${req.file.originalname}`);
  } else {
    res.send("An error occurred");
  }
});

export { app };
