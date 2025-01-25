document.addEventListener('DOMContentLoaded', () => {
    const phases = document.querySelectorAll('.phase');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Animate phases when they enter the viewport
    function animatePhases() {
        phases.forEach(phase => {
            if (isInViewport(phase)) {
                phase.style.opacity = '1';
                phase.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial state
    phases.forEach(phase => {
        phase.style.opacity = '0';
        phase.style.transform = 'translateY(20px)';
        phase.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger animation on scroll
    window.addEventListener('scroll', animatePhases);
});
