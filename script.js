


const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const adressInput = document.getElementById("adress");
const addressWarn = document.getElementById("address-warn");

let cart = [];
cartBtn.addEventListener("click",function() {
    cartModal.style.display = "flex";
})

cartModal.addEventListener("click", function(evento) {
    if(evento.target === cartModal){
        cartModal.style.display = "none";
    }
})
closeModalBtn.addEventListener("click", function() {
    cartModal.style.display = "none";
})

menu.addEventListener("click", function(evento) {
    let parentButton = evento.target.closest(".add-to-cart-btn")

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

        // add no carrinho
        addToCart(name, price)
    }
})

function addToCart(name,price){
    cart.push({
        name,
        price,
        quantity: 1,
    })
}

