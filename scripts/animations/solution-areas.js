document.addEventListener('DOMContentLoaded', () => {
  // Select all .card elements specifically within .core-solution-cards
  const cards = document.querySelectorAll('.core-solution-cards .card');

  /**
   * Checks if the given element is in the visible viewport area.
   * @param {Element} elem - The DOM element to test.
   * @returns {boolean} - True if at least part of the elem is within the viewport.
   */
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  /**
   * revealCards():
   * - Loops through each .card and checks if it's in the viewport.
   * - If a card is in view and doesn't have .visible yet, 
   *   applies a short setTimeout before adding "visible."
   * - The index-based delay (index * 100) creates a staggered reveal effect.
   */
  function revealCards() {
    cards.forEach((card, index) => {
      // If the card is in view and not yet revealed:
      if (isInViewport(card) && !card.classList.contains('visible')) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 100); // stagger each card by 100ms
      }
    });
  }

  // Listen for scroll events to check which cards are in view
  window.addEventListener('scroll', revealCards);

  // Run it immediately in case some cards are already on-screen
  revealCards();
});
