document.addEventListener('DOMContentLoaded', () => {
  // Grab the .hero-section element
  const heroSection = document.querySelector('.hero-section');

  /**
   * The .hero-section already starts at opacity: 0 in CSS.
   * We add the .visible class after 200ms, triggering a 
   * CSS transition that fades it in.
   */
  setTimeout(() => {
    heroSection.classList.add('visible');
  }, 200);
});
