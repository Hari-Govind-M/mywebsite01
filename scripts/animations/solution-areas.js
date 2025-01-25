document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Function to apply animation with delay
    const animateCards = () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateX(0)'; // Move into place
            }, index * 200); // Delay each card by 200ms
        });
    };

    // Call animation function when the DOM is loaded
    animateCards();
});

