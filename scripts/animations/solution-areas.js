document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const solutionAreasSection = document.querySelector('.core-solution-cards');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Function to animate cards
    function animateCards() {
        if (isInViewport(solutionAreasSection)) {
            cards.forEach((card, index) => {
                card.style.transition = 'transform 1s ease, opacity 1s ease';
                card.style.opacity = '1'; // Make cards visible
                if (index % 2 === 0) {
                    // Left side cards slide in from the left
                    card.style.transform = 'translateX(0)';
                } else {
                    // Right side cards slide in from the right
                    card.style.transform = 'translateX(0)';
                }
            });

            // Remove scroll listener once animation is complete
            window.removeEventListener('scroll', animateCards);
        }
    }

    // Initial position of cards (off-screen)
    cards.forEach((card, index) => {
        card.style.opacity = '0'; // Hidden initially
        if (index % 2 === 0) {
            card.style.transform = 'translateX(-100%)'; // Move left cards off-screen
        } else {
            card.style.transform = 'translateX(100%)'; // Move right cards off-screen
        }
    });

    // Trigger animation on scroll
    window.addEventListener('scroll', animateCards);
});
