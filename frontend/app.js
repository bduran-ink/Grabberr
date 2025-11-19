// Load products from backend
fetch("http://localhost:4000/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `

      container.appendChild(card);
    });
  });

function addToCart(item) {
  alert(item + " added to cart!");
}
