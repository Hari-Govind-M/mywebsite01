document.addEventListener('DOMContentLoaded', () => {
  // Select all step cards
  const steps = document.querySelectorAll('.step-card');

  /**
   * 1. Apply the "heartbeat" class to each step card,
   *    which references an @keyframes heartbeat animation
   *    in your CSS, causing a slow pulse effect.
   */
  steps.forEach(step => {
    step.classList.add('heartbeat');
  });

  /**
   * 2. Animate each step card into view with a delay,
   *    creating a staggered "fade + slide" sequence.
   */
  const animateSteps = () => {
    steps.forEach((step, index) => {
      setTimeout(() => {
        // Fade in (set opacity to 1)
        step.style.opacity = 1;
        // Slide to original position (translateY(0))
        step.style.transform = 'translateY(0)';
      }, index * 200); // each step delayed by 200ms * index
    });
  };

  // Trigger the staggered animation as soon as the DOM is ready
  animateSteps();
});
