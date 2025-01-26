document.addEventListener('DOMContentLoaded', () => {
  // Basic scroll reveal for each <section>
  const sections = document.querySelectorAll('section');
  
  function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (rect.top < window.innerHeight && rect.bottom >= 0);
  }

  function revealSections() {
    sections.forEach(sec => {
      if (isInViewport(sec) && !sec.classList.contains('visible')) {
        sec.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealSections);
  revealSections();

  // Heartbeat steps (if using CSS approach, just ensure .heartbeat has a keyframes scale in your CSS)
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    // Hide answers by default
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';

    question.addEventListener('click', () => {
      // Toggle
      if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        // collapse
        answer.style.maxHeight = '0';
      } else {
        // expand
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});
