document.addEventListener('DOMContentLoaded', () => {
    // Ensure all cards are immediately visible
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
    });
});
