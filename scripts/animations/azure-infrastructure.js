document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  // For card staggering inside each section
  // We'll look for certain card classes: .why-focus-card, .ecosystem-card, .tpd-step, .story-card
  // Then add small transition-delays in order.
  function staggerCards(cards) {
    cards.forEach((card, index) => {
      // add a small delay based on index
      card.style.transitionDelay = (index * 0.1) + 's';
    });
  }

  // 1) Scroll-based reveal of each section
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (rect.top < window.innerHeight && rect.bottom >= 0);
  }

  function revealSections() {
    sections.forEach(sec => {
      if (isInViewport(sec) && !sec.classList.contains('visible')) {
        sec.classList.add('visible');

        // Look for any special cards in this section, add small delay increments
        const focusCards = sec.querySelectorAll('.why-focus-card');
        const ecosystemCards = sec.querySelectorAll('.ecosystem-card');
        const tpdSteps = sec.querySelectorAll('.tpd-step');
        const storyCards = sec.querySelectorAll('.story-card');

        if (focusCards.length) staggerCards(focusCards);
        if (ecosystemCards.length) staggerCards(ecosystemCards);
        if (tpdSteps.length) staggerCards(tpdSteps);
        if (storyCards.length) staggerCards(storyCards);
      }
    });
  }

  window.addEventListener('scroll', revealSections);
  revealSections();

  // 2) Collapsible FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      item.classList.toggle('expanded'); 
    });
  });
});
