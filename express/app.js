const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  console.log("404");
  res.status(404).send("OPS!!, page not found!!");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});
