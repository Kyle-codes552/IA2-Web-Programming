// IA#2 JavaScript 

// Load cart from localStorage or create empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart
function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
    alert(name + " added to cart");
}

// Display cart
function displayCart() {
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        cartDiv.innerHTML += `
            <p>
                ${item.name} - $${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </p>
        `;
        total += item.price;
    });

    cartDiv.innerHTML += `<h3>Total: $${total}</h3>`;
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

// Clear cart (for checkout)
function clearCart() {
    localStorage.removeItem("cart"); // clears stored cart
    displayCart(); // refreshes the page
}

// FORM VALIDATION
function validateForm() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Email cannot be empty");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email format");
        return false;
    }

    return true;
}