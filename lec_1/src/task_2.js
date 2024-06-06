// JSON Array of 3 obj (name, age) => name
// must be sorted according to age
// sorted-names then all names should be sent according to accessing order of age

import express from "express";

const app = express();

const students = [
  {
    name: "Akash",
    age: 20,
  },
  {
    name: "John",
    age: 18,
  },
  {
    name: "Krish",
    age: 19,
  },
].sort((a, b) => a.age - b.age);

app.get("/sorted-names", (req, res) => {
  res.send(students);
});

// Json Obj { array of obj } in table form on browser

app.get("/students-table", (req, res) => {
  res.send(`
    <table border="1" rules="all">
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      ${students
        .map(({ name, age }) => {
          return `
              <tr>
                <td>${name}</td>
                <td>${age}</td>
              </tr>
            `;
        })
        .join("")}
    </table>
  `);
});

app.get("/table", (req, res) => {
  const json = [
    {
      name: "Akash",
      age: 20,
    },
    {
      name: "John",
      age: 18,
    },
    {
      name: "Krish",
      age: 19,
    },
  ];

  res.send(`
      
  `);
});
export { app };
