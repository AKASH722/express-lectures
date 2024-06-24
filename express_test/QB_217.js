// write an express.js script to make one index.html file in this file we write simple heading tag
// and make one css file index.css put style using appropriate selector
// and link with js file and show output on localhost:3030.

import express from "express";

const app = express();

app.use(express.static("public", { index: "index_1.html" }));

app.listen(3030, () => console.log("http://localhost:3030"));
