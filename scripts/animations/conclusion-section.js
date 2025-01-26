document.addEventListener('DOMContentLoaded', () => {
  // Select the conclusion section and the list items within "Next Steps"
  const conclusionSec = document.querySelector('.conclusion-section');
  const nextStepsItems = document.querySelectorAll('.conclusion-section .next-steps li');

  /**
   * Checks if the given element is currently in the browser’s viewport.
   * @param {Element} elem - The DOM element to test.
   * @returns {boolean} - True if any part of the element is in view.
   */
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  /**
   * Reveals the conclusion section when it enters the viewport.
   * - Adds a 'visible' class to .conclusion-section for CSS-based fade/slide.
   * - Staggers the list items inside .next-steps with incremental timeouts.
   */
  function revealConclusion() {
    if (conclusionSec && !conclusionSec.classList.contains('visible')) {
      // If .conclusion-section is in the viewport but not yet "visible":
      if (isInViewport(conclusionSec)) {
        // Apply .visible to trigger CSS transitions (fade/slide for text)
        conclusionSec.classList.add('visible');

        // Staggered reveal for each list item (next steps)
        nextStepsItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
          }, index * 150); // 150ms * index => cascading effect
        });

        // If we only want to do this once, remove the scroll listener
        window.removeEventListener('scroll', revealConclusion);
      }
    }
  }

  // Check on scroll (user might scroll down to the conclusion)
  window.addEventListener('scroll', revealConclusion);

  // Initial check in case the section is already in view on page load
  revealConclusion();
});
