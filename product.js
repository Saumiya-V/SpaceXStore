let count = 1;
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let quants = document.getElementById("quants");
let addToCart = document.getElementById("cart");

quants.innerText = count; 

increase.addEventListener("click", function () {
    count++;
    quants.innerText = count;
});

decrease.addEventListener("click", function () {
    if (count > 1) { 
        count--;
        quants.innerText = count;
    }
});

// Add to Cart Function
addToCart.addEventListener("click", function () {
    let product = {
        name: "Unisex Starship Flight 8 T-Shirt",
        price: 30.00,
        quantity: count,
        image: "https://shop.spacex.com/cdn/shop/files/SpaceX_Starship_Flight_8_Tshirt_Back_600x.png?v=1741304703"
    };

    // Get existing cart data
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    let existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += count;
    } else {
        cart.push(product);
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update Cart Count in Navbar
    updateCartCount();
    alert("Product added to cart!");
});

// Update Cart Count in Navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.nav2 li:nth-child(3) a').innerText = `CART (${totalCount})`;
}

// Initialize Cart Count on Page Load
updateCartCount();