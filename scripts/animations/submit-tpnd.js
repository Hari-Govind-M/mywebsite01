document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step-card');

    // 1. Add the heartbeat class to each step card
    steps.forEach(step => {
        step.classList.add('heartbeat');
    });

    // 2. Animate step cards with a delay
    const animateSteps = () => {
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.style.opacity = 1;  // Fade in
                step.style.transform = 'translateY(0)';  // Slide into place
            }, index * 200);  // Delay each step by 200ms
        });
    };

    // Trigger animation when DOM is fully loaded
    animateSteps();
});
