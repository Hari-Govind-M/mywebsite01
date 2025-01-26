document.addEventListener('DOMContentLoaded', () => {
  const conclusionSec = document.querySelector('.conclusion-section');
  const nextStepsItems = document.querySelectorAll('.conclusion-section .next-steps li');

  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  function revealConclusion() {
    if (conclusionSec && !conclusionSec.classList.contains('visible')) {
      if (isInViewport(conclusionSec)) {
        // Add .visible to the entire section
        conclusionSec.classList.add('visible');

        // Stagger the list items
        nextStepsItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
          }, index * 150); 
        });

        // Optionally remove the scroll event if we only do this once
        window.removeEventListener('scroll', revealConclusion);
      }
    }
  }

  // Check on scroll
  window.addEventListener('scroll', revealConclusion);

  // Initial check in case it's already in view
  revealConclusion();
});
