const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  console.log(req.body.name);
  const { name } = req.body;

  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: "Please provide credentials" });
  }
  return res.status(201).send({ success: true, person: name }); 
});

app.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});
