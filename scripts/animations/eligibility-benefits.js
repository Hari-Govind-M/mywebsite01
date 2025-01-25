
document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.eligibility-benefits table');

    // Add fade-in animation to the table
    const animateTable = () => {
        table.classList.add('visible');
    };

    // Trigger animation after a small delay
    setTimeout(animateTable, 200);
});
