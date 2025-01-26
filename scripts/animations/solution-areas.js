document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.core-solution-cards .card');
  const container = document.querySelector('.core-solution-cards');

  // Check if element is in the viewport
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  // Reveal cards with a staggered effect
  function revealCards() {
    cards.forEach((card, index) => {
      if (isInViewport(card) && !card.classList.contains('visible')) {
        // Stagger by index * 150ms
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 150);
      }
    });
  }

  // Listen for scroll & on load
  window.addEventListener('scroll', revealCards);
  revealCards(); // Trigger the reveal in case some cards are already visible
});
