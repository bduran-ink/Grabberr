// Load products from backend
fetch("http://localhost:4000/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image || 'images/1_54321__56923.jpg'}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
      `;

      container.appendChild(card);
    });
  }).catch(err => {
    console.error('Failed to load products', err);
  });

function addToCart(item) {
  alert(item + " added to cart!");
}
