// Shopping cart logic
// Cart will be stored in localStorage as 'cartItems'

function getCart() {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
}

function setCart(cart) {
    localStorage.setItem('cartItems', JSON.stringify(cart));
}

function addToCart(item) {
    const cart = getCart();
    // If item exists, increase quantity
    const found = cart.find(i => i.name === item.name);
    if (found) {
        found.qty += 1;
    } else {
        cart.push({...item, qty: 1});
    }
    setCart(cart);
    alert('Added to cart!');
}

function removeFromCart(name) {
    let cart = getCart();
    cart = cart.filter(i => i.name !== name);
    setCart(cart);
    renderCart();
}

function renderCart() {
    const cart = getCart();
    const tbody = document.getElementById('cart-body');
    const totalSpan = document.getElementById('cart-total');
    tbody.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()}₫</td>
            <td>${item.qty}</td>
            <td>${(item.price * item.qty).toLocaleString()}₫</td>
            <td><button onclick=\"removeFromCart('${item.name}')\">Remove</button></td>
        `;
        tbody.appendChild(tr);
        total += item.price * item.qty;
    });
    totalSpan.textContent = total.toLocaleString() + '₫';
}

function clearCart() {
    setCart([]);
    renderCart();
}

// For ShoppingCart.html only
if (window.location.pathname.includes('ShoppingCart.html')) {
    window.onload = renderCart;
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-login");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (e) {
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Kiểm tra email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault(); // Ngăn form gửi đi
        return;
        }

        // Kiểm tra mật khẩu rỗng
        if (password.length === 0) {
        alert("Please enter your password.");
        e.preventDefault();
        return;
        }

        // Nếu qua kiểm tra thì form sẽ gửi bình thường
    });
});

