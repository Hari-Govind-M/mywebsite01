document.addEventListener('DOMContentLoaded', () => {
    const scrollingContainer = document.querySelector('.scrolling-container');
    const roles = document.querySelectorAll('.role');
    let totalWidth = 0;

    // Calculate total width of all cards and gaps
    roles.forEach(role => {
        totalWidth += role.offsetWidth + 50; // Include the gap (50px from CSS)
    });
    scrollingContainer.style.width = `${totalWidth}px`;

    // Keep the cards static
    scrollingContainer.style.transform = 'translateX(0)';
});
