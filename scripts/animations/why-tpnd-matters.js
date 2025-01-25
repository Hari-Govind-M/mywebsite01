document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');

    // Add fade-in effect
    heroSection.style.opacity = 0;
    heroSection.style.transition = 'opacity 1.5s ease-in-out';

    // Trigger the fade-in after DOM is fully loaded
    setTimeout(() => {
        heroSection.style.opacity = 1;
    }, 200);
});
