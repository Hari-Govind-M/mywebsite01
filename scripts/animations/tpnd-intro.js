document.addEventListener('DOMContentLoaded', () => {
  // Select the particle container from the hero section
  const particleContainer = document.querySelector('.particle-container');

  // Adjust these for more/fewer particles or different behavior
  const PARTICLE_COUNT = 30;     // How many particles to create
  const MAX_SIZE = 10;          // Max particle diameter (pixels)
  const MIN_SIZE = 3;           // Min particle diameter (pixels)
  const MAX_SPEED = 1;          // Max vertical drift speed
  const MIN_SPEED = 0.2;        // Min vertical drift speed

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Create a new particle div
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particleContainer.appendChild(particle);

    // Random size within the specified range
    const size = Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE + 1)) + MIN_SIZE;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random initial position (percent of container width/height)
    let currentX = Math.random() * 100;
    let currentY = Math.random() * 100;
    particle.style.left = `${currentX}%`;
    particle.style.top = `${currentY}%`;

    // Random drifting speed
    const speed = (Math.random() * (MAX_SPEED - MIN_SPEED)) + MIN_SPEED;

    // Define an animation loop to move particles upward
    function drift() {
      // Move upward by speed factor
      currentY -= speed * 0.1;
      // If particle goes off the top, wrap it to the bottom
      if (currentY < -5) {
        currentY = 105;
        // Randomize X when it re-enters
        currentX = Math.random() * 100;
        particle.style.left = `${currentX}%`;
      }
      // Update position
      particle.style.top = `${currentY}%`;
      requestAnimationFrame(drift);
    }

    // Start drifting loop
    drift();
  }
});
