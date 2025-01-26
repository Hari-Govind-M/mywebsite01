document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.ptc-card');

  // Immediately reveal all cards on load
  cards.forEach(card => {
    card.classList.add('revealed');
  });
});
