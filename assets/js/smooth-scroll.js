// Smooth scroll avec vitesse contrôlée pour la flèche hero
(function() {
  'use strict';

  // Fonction de smooth scroll avec vitesse personnalisée
  function smoothScrollTo(target, duration) {
    const targetElement = document.querySelector(target);
    if (!targetElement) {
      return;
    }

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Durée par défaut si non spécifiée (en millisecondes)
    duration = duration || 1500; // 1.5 secondes par défaut (plus lent que le scroll normal)

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    // Fonction d'easing pour un mouvement fluide
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Gérer les clics sur la flèche hero-scroll-down
  const scrollDownLinks = document.querySelectorAll('.hero-scroll-down, a[href="#content"]');
  scrollDownLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && (href === '#content' || href.includes('#content'))) {
        // Scroll lent vers #content (2 secondes)
        smoothScrollTo('#content', 2000);
      }
    });
  });
})();

