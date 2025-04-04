// Existing JavaScript for About Us cards
document.addEventListener("DOMContentLoaded", function () {
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Find the closest parent card element
      const card = button.closest(".card");
      console.log("Card element:", card); // Debugging: Log the card element

      // Toggle the "expanded" class on the specific card
      card.classList.toggle("expanded");

      // Debugging: Log the state of the expanded class
      console.log("Card expanded:", card.classList.contains("expanded"));
    });
  });
});

// Existing JavaScript for recipe cards
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Toggle flipped class
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.getElementById("cart-button");
  const cartPanel = document.getElementById("cart-panel");
  const closeCartButton = document.getElementById("close-cart");
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalPrice = document.getElementById("cart-total-price");
  const buyButtons = document.querySelectorAll(".buy-btn, .cart-btn");

  let cart = {};

  // 🛒 Toggle Cart Visibility (Slide in/out)
  cartButton.addEventListener("click", () => {
    cartPanel.classList.toggle("open");
  });

  closeCartButton.addEventListener("click", () => {
    cartPanel.classList.remove("open");
  });

  // 🛍️ Add Product to Cart
  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productBox = this.closest(".product-box");
      const productName = productBox.querySelector(".product-name").textContent;
      const productPrice = parseFloat(
        productBox.querySelector(".product-price").textContent.replace("$", "")
      );

      if (cart[productName]) {
        cart[productName].quantity += 1;
      } else {
        cart[productName] = {
          price: productPrice,
          quantity: 1,
        };
      }

      updateCartUI();
    });
  });

  // 🔄 Update Cart UI
  function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    Object.keys(cart).forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      const itemTotal = cart[item].price * cart[item].quantity;
      total += itemTotal;

      cartItem.innerHTML = `
        <span>${item} x${cart[item].quantity} - $${itemTotal.toFixed(2)}</span>
        <button class="remove-btn" data-item="${item}">Remove</button>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    cartTotalPrice.textContent = total.toFixed(2);

    // Attach remove event to each remove button
    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const itemName = this.getAttribute("data-item");
        delete cart[itemName];
        updateCartUI();
      });
    });
  }
});



