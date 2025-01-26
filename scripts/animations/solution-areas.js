document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.core-solution-cards .card');

  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  function revealCards() {
    cards.forEach((card, index) => {
      if (isInViewport(card) && !card.classList.contains('visible')) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 100);
      }
    });
  }

  window.addEventListener('scroll', revealCards);
  revealCards();
});
