document.addEventListener("DOMContentLoaded", () => {
  const PARTICLE_COUNT = 10;
  const PARTICLE_SIZE = 8;
  const PARTICLE_LIFETIME = 600;
  const SPREAD = 20;
  const COLOR = "#ff00c1";

  document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      createSpark(e.clientX, e.clientY);
    }
  });

  function createSpark(x, y) {
    const spark = document.createElement("div");
    spark.classList.add("cursor-spark");
    
    const offsetX = (Math.random() - 0.5) * SPREAD * 2;
    const offsetY = (Math.random() - 0.5) * SPREAD * 2;

    spark.style.left = `${x + offsetX}px`;
    spark.style.top = `${y + offsetY}px`;
    spark.style.width = `${PARTICLE_SIZE}px`;
    spark.style.height = `${PARTICLE_SIZE}px`;
    spark.style.backgroundColor = COLOR;

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, PARTICLE_LIFETIME);
  }
});
