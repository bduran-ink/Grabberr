const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Headphones", price: 25, image: "/images/apple-noise-cancelling-over-ear-MWW53AMA-front-angled.webp" },
  { id: 2, name: "Phone Charger", price: 10, image: "/images/chargerrr.avif" },
  { id: 3, name: "USB Cable", price: 5, image: "/images/1_54321__56923.jpg" },
  { id: 4, name: "Laptop Stand", price: 35, image: "/images/71cOnHXOg9L.jpg" }
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST create product
app.post("/products", (req, res) => {
  const newItem = req.body;
  newItem.id = products.length + 1;
  products.push(newItem);
  res.json({ message: "Product added", item: newItem });
});

// PUT update product
app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) return res.json({ message: "Not found" });

  products[index] = { ...products[index], ...req.body };
  res.json({ message: "Updated", item: products[index] });
});

// DELETE product
app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: "Deleted" });
});

app.listen(4000, () => console.log("Grabber API running on port 4000"));
