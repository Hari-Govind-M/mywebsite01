document.addEventListener('DOMContentLoaded', () => {
    const scrollingContainer = document.querySelector('.scrolling-container');
    const roles = document.querySelectorAll('.role');
    const ptcRoleSection = document.querySelector('.ptc-role');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Function to animate cards
    function animateCards() {
        if (isInViewport(ptcRoleSection)) {
            roles.forEach((role, index) => {
                role.style.transition = 'transform 1s ease, opacity 1s ease';
                role.style.opacity = '1'; // Make cards visible
                if (index < 2) {
                    // Left side cards slide in from the left
                    role.style.transform = 'translateX(0)';
                } else {
                    // Right side cards slide in from the right
                    role.style.transform = 'translateX(0)';
                }
            });

            // Remove scroll listener once animation is complete
            window.removeEventListener('scroll', animateCards);
        }
    }

    // Initial position of cards (off-screen)
    roles.forEach((role, index) => {
        role.style.opacity = '0'; // Hidden initially
        if (index < 2) {
            role.style.transform = 'translateX(-100%)'; // Move left cards off-screen
        } else {
            role.style.transform = 'translateX(100%)'; // Move right cards off-screen
        }
    });

    // Trigger animation on scroll
    window.addEventListener('scroll', animateCards);
});
