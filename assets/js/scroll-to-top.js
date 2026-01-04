// Bouton retour en haut de page
(function() {
  'use strict';
  
  const scrollButton = document.getElementById('scroll-to-top');
  if (!scrollButton) return;
  
  // Fonction pour vérifier la position du scroll
  function checkScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Afficher le bouton si on a scrollé plus de 100px
    if (scrollY > 100) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  }
  
  // Fonction pour remonter en haut
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Écouter le scroll
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  
  // Écouter le clic sur le bouton
  scrollButton.addEventListener('click', scrollToTop);
  
  // Vérifier la position initiale
  checkScroll();
})();

