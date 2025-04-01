function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.querySelector(".cart-conainer");

  // If cart is empty
  if (cart.length === 0) {
      cartContainer.innerHTML = `<p>YOUR CART IS EMPTY</p>
                                 <button onclick="window.location.href='index.html'">SHOP OUR PRODUCTS</button>`;
      return;
  }

  cartContainer.innerHTML = ""; // Clear default message

  cart.forEach((item, index) => {
      let productDiv = document.createElement("div");
      productDiv.classList.add("cart-item");
      productDiv.innerHTML = `
      <h2>CART</h2>
          <img src="${item.image}" width="100">
          <p>${item.name}</p>
          <p>$${item.price.toFixed(2)}</p>
          <div class="quantity-controls">
              <button onclick="changeQuantity(${index}, -1)">-</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${index}, 1)">+</button>
          </div>
          <button onclick="removeFromCart(${index})">Remove</button>
         
      `;
      cartContainer.appendChild(productDiv);
  });
}

// Change Quantity
function changeQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity + change > 0) {
      cart[index].quantity += change;
  } else {
      cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Refresh cart UI
  updateCartCount();
}

// Remove Product
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Refresh cart UI
  updateCartCount();
}

// Update Cart Count in Navbar
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector('.nav2 li:nth-child(3) a').innerText = `CART (${totalCount})`;
}

// Load Cart on Page Load
loadCart();
updateCartCount();