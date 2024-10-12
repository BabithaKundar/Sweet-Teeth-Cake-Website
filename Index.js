let cart = [];
const cartLink = document.getElementById('cart-link');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const cakeElement = button.parentElement;
        const cakeId = cakeElement.dataset.id;
        const cakeName = cakeElement.querySelector('h3').innerText;
        const cakePrice = parseFloat(cakeElement.querySelector('p').innerText.replace('Rs', ''));

        cart.push({ id: cakeId, name: cakeName, price: cakePrice });
        updateCart();
    });
});

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
    updateCartDisplay();
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function updateCart() {
    cartLink.innerText = Cart (${cart.length});
}

function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = ${item.name} - ${item.price}Rs;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    totalPriceElement.innerText = Total: ${total}Rs;
}
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cakes = document.querySelectorAll('.cake');

    cakes.forEach(cake => {
        const title = cake.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            cake.style.display = 'block';
        } else {
            cake.style.display = 'none';
        }
    });
})