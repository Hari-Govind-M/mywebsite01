document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  // function checks if element is in viewport
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (rect.top < window.innerHeight && rect.bottom >= 0);
  }

  // function to add .visible to sections + stagger their cards
  function revealSections() {
    sections.forEach(sec => {
      if (isInViewport(sec) && !sec.classList.contains('visible')) {
        sec.classList.add('visible');

        // find any relevant cards to stagger
        const wfc = sec.querySelectorAll('.why-focus-card');
        const eco = sec.querySelectorAll('.ecosystem-card');
        const tpd = sec.querySelectorAll('.tpd-step');
        const story = sec.querySelectorAll('.story-card');

        function staggerCards(cards) {
          cards.forEach((card, index) => {
            card.style.transitionDelay = (index * 0.1) + 's';
            // also set them to full opacity once section is .visible
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
          });
        }
        if (wfc.length)  staggerCards(wfc);
        if (eco.length)  staggerCards(eco);
        if (tpd.length)  staggerCards(tpd);
        if (story.length) staggerCards(story);
      }
    });
  }

  // Collapsible FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });

  window.addEventListener('scroll', revealSections);
  revealSections();
});
