
document.addEventListener("DOMContentLoaded", () => {
  // We'll track the mouse position and create small "particles."
  
  // Basic config — tweak for your desired effect:
  const PARTICLE_COUNT = 10;         // how many sparks to create at each move (for a thicker trail)
  const PARTICLE_SIZE = 8;          // diameter of each spark in px
  const PARTICLE_LIFETIME = 600;    // lifespan of each spark in ms
  const SPREAD = 20;                // random spread around cursor
  const COLOR = "#ff00c1";          // neon pinkish color (change if you want)
  
  // We'll listen for mouse moves
  document.addEventListener("mousemove", (e) => {
    // Create multiple sparks for a richer effect
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      createSpark(e.clientX, e.clientY);
    }
  });

  function createSpark(x, y) {
    const spark = document.createElement("div");
    spark.classList.add("cursor-spark");
    
    // random offset around the pointer for a scattered effect
    const offsetX = (Math.random() - 0.5) * SPREAD * 2;
    const offsetY = (Math.random() - 0.5) * SPREAD * 2;
    
    // position the spark
    spark.style.left = `${x + offsetX}px`;
    spark.style.top = `${y + offsetY}px`;
    spark.style.width = `${PARTICLE_SIZE}px`;
    spark.style.height = `${PARTICLE_SIZE}px`;
    spark.style.backgroundColor = COLOR;
    
    // add to body
    document.body.appendChild(spark);
    
    // Remove spark after PARTICLE_LIFETIME
    setTimeout(() => {
      spark.remove();
    }, PARTICLE_LIFETIME);
  }
});
