const express = require("express");
const { send } = require("express/lib/response");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

//? req => middleware => res

//? 1. use vs route
//? 2. options - our own / express / third party

//? app.use(logger); --> our own
//? app.use(express.static('./public')) --> express
//? app.use(morgan("tiny")); --> third party

// app.use("/api", logger);
// api/home/about/products

//? Multiple Middleware functions

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
