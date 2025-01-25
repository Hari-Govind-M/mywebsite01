document.addEventListener('DOMContentLoaded', () => {
    const scrollingContainer = document.querySelector('.scrolling-container');
    const roles = document.querySelectorAll('.role');
    let currentPosition = -100; // Starting position off-screen

    function scrollCards() {
        currentPosition += 1; // Increment position
        scrollingContainer.style.transform = `translateX(${currentPosition}px)`;

        // Reset position when the last card scrolls off-screen
        if (currentPosition > window.innerWidth) {
            currentPosition = -scrollingContainer.offsetWidth;
        }

        requestAnimationFrame(scrollCards); // Continuously animate
    }

    scrollCards(); // Start the animation
});
