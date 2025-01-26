document.addEventListener('DOMContentLoaded', () => {
    // Select the desktop table container
    const tableEl = document.querySelector('.eligibility-benefits .eligibility-table');

    // Select the mobile cards container
    const cardsEl = document.querySelector('.eligibility-benefits .eligibility-cards');

    // Simple function to fade elements in by adding a "visible" class
    const fadeIn = () => {
        if (tableEl) {
            tableEl.classList.add('visible');  // triggers CSS transition for desktop table
        }
        if (cardsEl) {
            cardsEl.classList.add('visible');  // triggers CSS transition for mobile cards
        }
    };

    // Apply fade-in after a short delay
    setTimeout(fadeIn, 200);
});
