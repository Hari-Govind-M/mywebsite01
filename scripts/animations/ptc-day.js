document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.ptc-card');

  // Check if an element is visible in viewport
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  // Reveal cards on scroll
  function revealCards() {
    cards.forEach(card => {
      if (!card.classList.contains('revealed') && isInViewport(card)) {
        card.classList.add('revealed');
      }
    });
  }

  // Run on scroll and on load
  window.addEventListener('scroll', revealCards);
  revealCards();
});
