// Initialize cart and total amount
let cart = [];
let totalAmount = 0;

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalAmount += itemPrice;
    updateCartUI();
}

// Function to update cart UI (for demonstration purposes)
function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    
    // Clear previous content
    cartItemsElement.innerHTML = '';
    
    // Update cart items list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });
    
    // Update total amount
    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Function to subscribe to newsletter
function subscribeToNewsletter(email) {
    // Normally, you would send the email to a backend service for subscription handling
    alert(`Subscribed successfully to newsletter with email: ${email}`);
}

// Function to perform search
function performSearch(query) {
    // Simulate search results - replace with actual search logic
    alert(`Searching for: ${query}`);
}

// Function to perform search
function performSearch(query) {
    // Simulate search results - replace with actual search logic
    alert(`Searching for: ${query}`);
}
