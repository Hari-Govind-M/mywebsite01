document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  // For card staggering inside each section
  // We'll look for certain card classes:
  // .why-focus-card, .service-card, .challenge-card, .tpd-step, .story-card
  function staggerCards(cards) {
    cards.forEach((card, index) => {
      // add a small delay based on index
      card.style.transitionDelay = (index * 0.1) + 's';
    });
  }

  // Check if an element is in the viewport
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (rect.top < window.innerHeight && rect.bottom >= 0);
  }

  function revealSections() {
    sections.forEach(sec => {
      if (isInViewport(sec) && !sec.classList.contains('visible')) {
        sec.classList.add('visible');

        // Look for any special cards in this section, then add small delays
        const focusCards = sec.querySelectorAll('.why-focus-card');
        const serviceCards = sec.querySelectorAll('.service-card');
        const challengeCards = sec.querySelectorAll('.challenge-card');
        const tpdSteps = sec.querySelectorAll('.tpd-step');
        const storyCards = sec.querySelectorAll('.story-card');

        if (focusCards.length) staggerCards(focusCards);
        if (serviceCards.length) staggerCards(serviceCards);
        if (challengeCards.length) staggerCards(challengeCards);
        if (tpdSteps.length) staggerCards(tpdSteps);
        if (storyCards.length) staggerCards(storyCards);
      }
    });
  }

  window.addEventListener('scroll', revealSections);
  revealSections();

  // Collapsible FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });
});
