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

// Add click event to recipe cards
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Toggle flipped class
  });
});