// Multiple File Upload (max:5)

import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: "./public/temp/multiple",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"));

app.post(
  "/upload",
  upload.fields({ name: "pics", maxCount: 5 }),
  (req, res) => {
    res.send();
  }
);

export { app };
