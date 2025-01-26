document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.core-solution-cards .card');

  // Function to check if element is in viewport
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  // Reveal cards with a stagger effect
  function revealCards() {
    cards.forEach((card, index) => {
      if (isInViewport(card) && !card.classList.contains('visible')) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 150);
      }
    });
  }

  // Listen for scroll + run on load
  window.addEventListener('scroll', revealCards);
  revealCards();
});
