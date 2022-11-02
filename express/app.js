const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});
