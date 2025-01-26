document.addEventListener("DOMContentLoaded", () => {
  // Number of spark "particles" to create each mousemove
  const PARTICLE_COUNT = 10;
  // Size (width & height) of each spark in pixels
  const PARTICLE_SIZE = 8;
  // How long (in ms) each spark remains on screen before removal
  const PARTICLE_LIFETIME = 600;
  // Random offset range around the pointer for a scattered effect
  const SPREAD = 20;
  // Default color for the sparks (neon pink, #ff00c1)
  const COLOR = "#ff00c1";

  /**
   * On every mouse move, create multiple sparks 
   * for a thicker or more vivid trail.
   */
  document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      createSpark(e.clientX, e.clientY);
    }
  });

  /**
   * createSpark(x, y)
   * Generates a small "spark" near (x, y) 
   * with random offsets for a scattered effect.
   * 
   * @param {number} x - The mouse's X position
   * @param {number} y - The mouse's Y position
   */
  function createSpark(x, y) {
    // Create a new <div> for the spark
    const spark = document.createElement("div");
    spark.classList.add("cursor-spark");

    // Calculate random offsets to place the spark near the pointer
    const offsetX = (Math.random() - 0.5) * SPREAD * 2;
    const offsetY = (Math.random() - 0.5) * SPREAD * 2;

    // Position and size the spark
    spark.style.left = `${x + offsetX}px`;
    spark.style.top = `${y + offsetY}px`;
    spark.style.width = `${PARTICLE_SIZE}px`;
    spark.style.height = `${PARTICLE_SIZE}px`;
    spark.style.backgroundColor = COLOR;

    // Append the spark to the body so it appears on screen
    document.body.appendChild(spark);

    // Remove the spark after PARTICLE_LIFETIME ms 
    // to prevent DOM clutter and create a fading effect 
    // (if defined in CSS transitions).
    setTimeout(() => {
      spark.remove();
    }, PARTICLE_LIFETIME);
  }
});
