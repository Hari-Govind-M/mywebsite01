document.addEventListener('DOMContentLoaded', () => {
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
});
