document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const engagementModelSection = document.querySelector('.engagement-model');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Function to animate cards
    function animateCards() {
        if (isInViewport(engagementModelSection)) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible'); // Add animation class
                }, index * 200); // Delay each card by 200ms
            });

            // Remove scroll listener after animation is triggered
            window.removeEventListener('scroll', animateCards);
        }
    }

    // Debounced scroll listener
    let debounceTimer;
    window.addEventListener('scroll', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(animateCards, 100);
    });
});
