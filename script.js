document.addEventListener('DOMContentLoaded', () => {
  
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseover', function() {
      this.style.background = 'rgba(255, 165, 0, 300)';
      this.style.transition = 'background 0.3s ease';
    });
   
    card.addEventListener('mouseout', function() {
      this.style.background = '';
    });
  });

});


