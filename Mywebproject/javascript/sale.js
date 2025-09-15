const products = {
p1: { name: "Original Blend 200g", price: 500 },
p2: { name: "Original Blend 500g", price: 900 },
p3: { name: "Special Blend 200g", price: 700 },
p4: { name: "Special Blend 500g", price: 1200 }
};

let cart = [];

function add() {
const productId = document.getElementById("product").value;
const quantity = parseInt(document.getElementById("number").value);

if (!products[productId] || quantity < 1 || quantity > 5) {
    alert("Please select a valid product and quantity (1–5).");
    return;
}

cart.push({ productId, quantity });

const product = products[productId];
alert(`Added to cart:\n\nProduct: ${product.name}\nPrice: ¥${product.price}\nQuantity: ${quantity}`);

displayCart();
}

function calc() {
if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
}

let subtotal = 0;
let details = "Order Summary:\n\n";

cart.forEach(item => {
    const product = products[item.productId];
    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;
    details += `${product.name}\n  Price: ¥${product.price} × ${item.quantity} = ¥${itemTotal}\n\n`;
});

let shipping = 0;
if (subtotal < 2000) {
    shipping = 500;
} else if (subtotal < 3000) {
    shipping = 250;
}

const total = subtotal + shipping;

details += `Subtotal: ¥${subtotal}\nShipping Fee: ¥${shipping}\nTotal Amount: ¥${total}`;
alert(details);
}

function clearCart() {
cart = [];
document.getElementById("product").selectedIndex = 0;
document.getElementById("number").value = "";
  document.getElementById("cart-display").innerHTML = ""; // Clears display area if exists
alert("Cart has been cleared.");
}

function displayCart() {
const cartDisplay = document.getElementById("cart-display");
  if (!cartDisplay) return; // Skip if no display area exists

cartDisplay.innerHTML = cart.map(item => {
    const product = products[item.productId];
    return `<p>${product.name} × ${item.quantity}</p>`;
}).join("");
}