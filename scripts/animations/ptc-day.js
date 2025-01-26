document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.ptc-step');

  // Check if element is in the viewport
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  // Reveal steps on scroll
  function revealSteps() {
    steps.forEach(step => {
      if (!step.classList.contains('visible') && isInViewport(step)) {
        step.classList.add('visible');
      }
    });
  }

  // Listen for scroll + run once on load
  window.addEventListener('scroll', revealSteps);
  revealSteps();
});
