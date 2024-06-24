import express from "express";
import multer from "multer";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "pug");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/specific");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // Adjusted file size limit to 10MB
  fileFilter: function (req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb("Only PDF format supported", false);
    }
  },
});

app.post("/upload", upload.single("myFile"), (req, res) => {
  if (req.file) {
    res.render("index", { message: "File uploaded successfully" });
  }
});

export { app };
