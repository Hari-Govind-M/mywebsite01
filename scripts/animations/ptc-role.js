document.addEventListener('DOMContentLoaded', () => {
  // Container that holds the .role elements
  const scrollingContainer = document.querySelector('.scrolling-container');
  // Individual role cards
  const roles = document.querySelectorAll('.role');
  // Parent section used to check if it’s in the viewport
  const ptcRoleSection = document.querySelector('.ptc-role');

  /**
   * Checks if the element is at least partially in the viewport.
   * (If you prefer fully in view, revert to your existing logic.)
   * @param {HTMLElement} elem - The element to check.
   * @returns {boolean}
   */
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  /**
   * animateCards():
   * - Once the .ptc-role section is partially in the viewport,
   *   fade+slide each .role card in a staggered sequence.
   * - Remove the scroll listener after the animation so it’s one-time.
   */
  function animateCards() {
    if (ptcRoleSection && isInViewport(ptcRoleSection)) {
      roles.forEach((role, index) => {
        setTimeout(() => {
          // If not already visible
          if (!role.classList.contains('ptc-revealed')) {
            // Add transition for a smooth slide & fade
            role.style.transition = 'transform 1s ease, opacity 1s ease';
            // Make visible
            role.style.opacity = '1';
            // Slide to original position
            role.style.transform = 'translateX(0)';
            // Mark as revealed to avoid re-triggering
            role.classList.add('ptc-revealed');
          }
        }, index * 150); // stagger each card by 150ms
      });

      // Remove scroll listener so animation doesn’t repeat
      window.removeEventListener('scroll', animateCards);
    }
  }

  /**
   * Initial Off-Screen Placement:
   * - Hide cards at opacity 0
   * - First half from the left, second half from the right
   */
  roles.forEach((role, index) => {
    role.style.opacity = '0'; // Hidden initially
    if (index < roles.length / 2) {
      // Slide in from left
      role.style.transform = 'translateX(-100%)';
    } else {
      // Slide in from right
      role.style.transform = 'translateX(100%)';
    }
  });

  // Listen for scroll to trigger the reveal
  window.addEventListener('scroll', animateCards);

  // Immediate check in case user is already near that section
  animateCards();
});
