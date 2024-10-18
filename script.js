// Select all cards
const cards = document.querySelectorAll('.service-card');

// Add hover effect using Anime.js
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    anime({
      targets: card,
      rotateY: '360deg',  // Rotate 360 degrees on hover
      duration: 1000,     // 1 second
      easing: 'easeInOutSine'
    });
  });

  // Reset the rotation on mouse leave
  card.addEventListener('mouseleave', () => {
    anime({
      targets: card,
      rotateY: '0deg',    // Return to original position
      duration: 1000,     // 1 second
      easing: 'easeInOutSine'
    });
  });
});