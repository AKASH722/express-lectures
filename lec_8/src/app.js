import express from "express";
import { router } from "./movie_router.js";

const app = express();

app.use("/", router);

export { app };
