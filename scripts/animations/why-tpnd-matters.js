document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');

    // Ensure the hero section starts transparent (already in CSS as opacity: 0)

    // After a short delay, add .visible to trigger the CSS fade-in
    setTimeout(() => {
        heroSection.classList.add('visible');
    }, 200);
});
