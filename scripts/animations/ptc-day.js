
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.ptc-card');
  const HEARTBEAT_SPEED = 0.0005; // Adjust for slower/faster pulse
  const MAX_SCALE = 1.03;        // Upper limit of scale
  const MIN_SCALE = 1.0;         // Lower limit of scale

  cards.forEach(card => {
    // Each card has its own heartbeat cycle
    let scale = 1.0;
    let direction = 1; // 1 means scaling up, -1 means scaling down

    function heartbeat() {
      // Move scale up/down
      scale += direction * HEARTBEAT_SPEED;

      // If we exceed max, switch direction down
      if (scale >= MAX_SCALE) {
        scale = MAX_SCALE;
        direction = -1;
      }
      // If we dip below min, switch direction up
      if (scale <= MIN_SCALE) {
        scale = MIN_SCALE;
        direction = 1;
      }

      // Apply the transform
      card.style.transform = `scale(${scale})`;
      
      // Next frame
      requestAnimationFrame(heartbeat);
    }

    // Start the loop
    requestAnimationFrame(heartbeat);
  });
});
