document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Function to update active slide
    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });
    };

    // Show the next slide
    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        updateSlider();
    };

    // Show the previous slide
    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
        updateSlider();
    };

    // Attach event listeners to buttons
    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    // Auto-play the slider every 5 seconds
    setInterval(showNextSlide, 5000);
});
