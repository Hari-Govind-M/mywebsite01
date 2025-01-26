
document.addEventListener('DOMContentLoaded', () => {
  // Grab the parent .who-we-are section
  const whoWeAreSection = document.querySelector('.who-we-are');
  // Left and right containers
  const leftContent = document.querySelector('.who-we-are .left');
  const rightContent = document.querySelector('.who-we-are .right');

  /**
   * Simple viewport check:
   * Returns true if any part of the section is in view. 
   * If you want the entire section visible, adjust this logic.
   */
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  /**
   * revealWhoWeAre():
   * - Once the .who-we-are section is visible, 
   *   fade+slide in the left and right content.
   */
  function revealWhoWeAre() {
    if (whoWeAreSection && isInViewport(whoWeAreSection)) {
      // Animate left content (fade from left)
      leftContent.style.opacity = 1;
      leftContent.style.transform = 'translateX(0)';

      // Animate right content (fade from right)
      rightContent.style.opacity = 1;
      rightContent.style.transform = 'translateX(0)';

      // Remove the scroll listener so it doesn't re-run
      window.removeEventListener('scroll', revealWhoWeAre);
    }
  }

  // Initial off-screen placement:
  // Set the content invisible and slightly offset
  if (leftContent) {
    leftContent.style.opacity = 0;
    leftContent.style.transform = 'translateX(-50px)'; // Slide in from the left
    leftContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  }

  if (rightContent) {
    rightContent.style.opacity = 0;
    rightContent.style.transform = 'translateX(50px)'; // Slide in from the right
    rightContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  }

  // Listen for scroll events
  window.addEventListener('scroll', revealWhoWeAre);

  // Initial check in case it's already in view
  revealWhoWeAre();
});
