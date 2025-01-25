document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Function to animate cards with wave effect
    const animateCards = () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = 1; // Fade in
                card.style.transform = 'translateY(0)'; // Move into place
                // Add heartbeat class after wave animation completes
                setTimeout(() => {
                    card.classList.add('heartbeat');
                }, 600); // Delay adding heartbeat to avoid interference
            }, index * 200); // Delay each card by 200ms
        });
    };

    // Trigger animation when the DOM is fully loaded
    animateCards();
});
