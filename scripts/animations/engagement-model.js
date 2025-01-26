document.addEventListener('DOMContentLoaded', () => {
  // Select all individual .card elements in the engagement model
  const cards = document.querySelectorAll('.card');
  
  // Select the parent section that triggers the reveal
  const engagementModelSection = document.querySelector('.engagement-model');

  /**
   * Check if the specified element is within the viewport.
   * @param {HTMLElement} element - The element to test.
   * @returns {boolean} - True if any portion of the element is visible on screen.
   */
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top < window.innerHeight && rect.bottom > 0);
  }

  /**
   * Animate cards once the engagement model section is in view.
   * - Adds a "visible" class to each card in a staggered manner.
   * - Removes the scroll listener afterward so it only triggers once.
   */
  function animateCards() {
    if (isInViewport(engagementModelSection)) {
      // Loop through each card with a 200ms stagger
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible'); // This triggers the fade/slide or any CSS transition
        }, index * 200);
      });

      // Once the animation is triggered, remove the event listener
      window.removeEventListener('scroll', animateCards);
    }
  }

  /**
   * Debounced scroll listener
   * - Waits 100ms after the last scroll event before calling animateCards().
   * - This avoids calling animateCards() too many times during continuous scrolling.
   */
  let debounceTimer;
  window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(animateCards, 100);
  });
});
