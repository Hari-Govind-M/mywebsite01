document.addEventListener('DOMContentLoaded', () => {
  // Select all .ptc-card elements (e.g., in my-ptc-day.html)
  const cards = document.querySelectorAll('.ptc-card');

  // Speed at which the scale changes each frame
  const HEARTBEAT_SPEED = 0.0005; 
  // Upper and lower scale bounds for the pulse
  const MAX_SCALE = 1.03; 
  const MIN_SCALE = 1.0;

  /*
   * For each card, we run an infinite heartbeat loop
   * using requestAnimationFrame. Each card pulses 
   * independently, gently scaling in/out between MIN_SCALE and MAX_SCALE.
   */
  cards.forEach(card => {
    let scale = 1.0;
    let direction = 1; // 1 => scale up, -1 => scale down

    /**
     * heartbeat()
     * Continuously animates the card's scale property,
     * oscillating between MIN_SCALE and MAX_SCALE.
     */
    function heartbeat() {
      // Move scale up/down by HEARTBEAT_SPEED
      scale += direction * HEARTBEAT_SPEED;

      // If we exceed the max scale, reverse direction
      if (scale >= MAX_SCALE) {
        scale = MAX_SCALE;
        direction = -1;
      }
      // If we dip below min scale, reverse direction
      if (scale <= MIN_SCALE) {
        scale = MIN_SCALE;
        direction = 1;
      }

      // Apply the new scale transform to the card
      card.style.transform = `scale(${scale})`;

      // Request the next frame in the animation
      requestAnimationFrame(heartbeat);
    }

    // Begin the pulse loop
    requestAnimationFrame(heartbeat);
  });
});
