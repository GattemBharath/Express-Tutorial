const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

//? static assets
app.use(express.static("./methods-public"));

//? parse form data
app.use(express.urlencoded({ extended: false }));
`
//? parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
