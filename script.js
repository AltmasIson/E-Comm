let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert(`Your total is $${total.toFixed(2)}. Thank you for shopping!`);
    cart = [];
    total = 0;
    displayCart();
});
