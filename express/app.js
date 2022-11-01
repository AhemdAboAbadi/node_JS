const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});
app.get("/api/products/", (req, res) => {
  console.log("🚀 ~ file: app.js ~ line 11 ~ app.get ~ req", req)
  res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const singleProduct = products.find(
    (product) => product.id === parseFloat(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  return res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.send(
    //   '<h1>no products matched your search</h1><a href="/">back home</a>'
    // );
    res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);

  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("OPS!!, page not found!!");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});
