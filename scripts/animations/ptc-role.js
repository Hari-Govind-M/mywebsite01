document.addEventListener('DOMContentLoaded', () => {
    const roles = document.querySelectorAll('.role');
    const totalRoles = roles.length;
    const rotationSpeed = 0.1; // Speed of rotation (degrees per frame)
    let currentAngle = 0;

    function rotateCards() {
        currentAngle += rotationSpeed;
        roles.forEach((role, index) => {
            const angle = (index / totalRoles) * 360 + currentAngle; // Calculate angle for each card
            const x = 200 * Math.cos((angle * Math.PI) / 180); // x-position
            const y = 200 * Math.sin((angle * Math.PI) / 180); // y-position
            role.style.transform = `translate(${x}px, ${y}px)`; // Position the card
        });
        requestAnimationFrame(rotateCards); // Continuously animate
    }

    rotateCards(); // Start animation
});
