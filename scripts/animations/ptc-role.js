document.addEventListener('DOMContentLoaded', () => {
  // Container that holds the .role elements
  const scrollingContainer = document.querySelector('.scrolling-container');
  // Individual role cards
  const roles = document.querySelectorAll('.role');
  // Parent section used to check if we’re in the viewport
  const ptcRoleSection = document.querySelector('.ptc-role');

  /**
   * Checks if the entire ptcRoleSection is fully in the viewport
   * (top >= 0 and bottom <= window height).
   * 
   * Adjust if you want partial visibility triggers.
   * @param {HTMLElement} element - The element to check.
   * @returns {boolean}
   */
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  /**
   * animateCards():
   * - If the .ptc-role section is fully visible,
   *   slide each .role card from left or right into view.
   * - Remove the scroll listener once done (one-time animation).
   */
  function animateCards() {
    if (isInViewport(ptcRoleSection)) {
      roles.forEach((role, index) => {
        // Add transition for a smooth slide & fade
        role.style.transition = 'transform 1s ease, opacity 1s ease';
        role.style.opacity = '1'; 
        // If it's one of the first two cards, slide from the left; else from the right
        if (index < 2) {
          role.style.transform = 'translateX(0)';
        } else {
          role.style.transform = 'translateX(0)';
        }
      });

      // Remove the scroll listener so it doesn’t keep firing
      window.removeEventListener('scroll', animateCards);
    }
  }

  /**
   * Initial State:
   * - Cards hidden at 0 opacity
   * - First two cards off-screen to the left,
   *   next ones off-screen to the right
   */
  roles.forEach((role, index) => {
    role.style.opacity = '0'; // hide initially
    if (index < 2) {
      // Slide in from left
      role.style.transform = 'translateX(-100%)';
    } else {
      // Slide in from right
      role.style.transform = 'translateX(100%)';
    }
  });

  // Listen for scroll to trigger the animation
  window.addEventListener('scroll', animateCards);
});
