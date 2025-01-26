document.addEventListener('DOMContentLoaded', () => {
  // Grab the "table" container (desktop layout)
  const tableEl = document.querySelector('.eligibility-benefits .eligibility-table');

  // Grab the "cards" container (mobile layout)
  const cardsEl = document.querySelector('.eligibility-benefits .eligibility-cards');

  /**
   * fadeIn()
   * Adds a "visible" class to both the desktop table
   * and mobile cards (if they exist), triggering a CSS 
   * fade-in transition defined in eligibility-benefits.css.
   */
  const fadeIn = () => {
    if (tableEl) {
      tableEl.classList.add('visible'); 
      // .visible typically changes 'opacity: 0' to 'opacity: 1'
      // or removes 'display: none' in CSS
    }
    if (cardsEl) {
      cardsEl.classList.add('visible');
    }
  };

  // Delay the fade-in by 200ms to create a subtle timing effect
  setTimeout(fadeIn, 200);
});
