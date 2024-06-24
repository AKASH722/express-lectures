import { Router } from "express";

const router = new Router();

const movies = [
  {
    id: 101,
    name: "INCEPTION",
    year: 2014,
    runtime: 140,
  },
  {
    id: 102,
    name: "INTERSTELLAR",
    year: 2014,
    runtime: 160,
  },
  {
    id: 103,
    name: "OPPENHEIMER",
    year: 2023,
    runtime: 180,
  },
];

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id([0-9]{3})", (req, res) => {
  console.log(req.params.id);
  const movieByID = movies.filter((m) => m.id === Number(req.params.id));
  console.log(movieByID);
  if (movieByID.length) {
    res.json(movieByID);
  } else {
    res.send("<h2>Not Found</h2>");
  }
});

export { router };
