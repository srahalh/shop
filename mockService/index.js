"use strict";

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const products = require("./mock/products.json");

app.get("/api/product", (_request, response) => {
  response.json(products);
});

app.get("/api/product/:id", (request, response, next) => {
  const { id } = request.params;
  const product = products.filter((product) => product.id === id);

  if (product && product.length === 1) response.json(product);

  next();
});

app.post("/api/cart", (_request, response) => {
  response.json({ count: 1 });
});

app.use((_request, response) => {
  response.status(404).json({ error: "Not found", code: 404 });
});

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
