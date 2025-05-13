const products = [
    { id: 1, name: "Áo Thun", price: 150000 },
    { id: 2, name: "Quần Jeans", price: 250000 },
    { id: 3, name: "Giày Sneaker", price: 500000 },
  ];
  
  const cart = [];
  
  function renderProducts() {
    const productsEl = document.getElementById("products");
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()} VND</p>
        <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
      `;
      productsEl.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartItemsEl = document.getElementById("cart-items");
    cartItemsEl.innerHTML = "";
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;
      cartItemsEl.appendChild(li);
      total += item.price;
    });
  
    document.getElementById("total").textContent = total.toLocaleString();
  }
  
  renderProducts();
  