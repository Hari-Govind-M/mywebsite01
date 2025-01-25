document.addEventListener('DOMContentLoaded', () => {
    const scrollingContainer = document.querySelector('.scrolling-container');
    const roles = document.querySelectorAll('.role');
    let totalWidth = 0;

    // Calculate total width of all cards and gaps
    roles.forEach(role => {
        totalWidth += role.offsetWidth + 50; // Include the gap (50px from CSS)
    });
    scrollingContainer.style.width = `${totalWidth}px`;

    // Start the scrolling animation
    let currentPosition = -totalWidth; // Start fully off-screen to the left
    function scrollCards() {
        currentPosition += 1; // Move right
        scrollingContainer.style.transform = `translateX(${currentPosition}px)`;

        // Reset when fully off-screen to the right
        if (currentPosition > window.innerWidth) {
            currentPosition = -totalWidth;
        }

        requestAnimationFrame(scrollCards); // Animate continuously
    }

    scrollCards(); // Start animation
});
