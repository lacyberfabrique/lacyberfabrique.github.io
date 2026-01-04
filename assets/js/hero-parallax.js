// Effet parallax sur le background de la section hero
(function() {
  'use strict';

  const hero = document.querySelector('.hero-section-fullscreen');
  if (!hero) {
    return; // Pas de hero sur cette page
  }

  // Désactiver sur mobile pour de meilleures performances
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    return;
  }

  // Fonction pour appliquer l'effet parallax
  function applyParallax() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    const heroTop = hero.getBoundingClientRect().top + scrollY;
    
    // Ne pas appliquer l'effet si on a dépassé la section hero
    if (scrollY > heroTop + heroHeight) {
      hero.style.backgroundPosition = 'center center';
      return;
    }

    // Calculer le décalage du background (se déplace plus lentement que le scroll)
    // Facteur de parallax : peut aller de 0 à 1.5+
    // - 0.5 = background bouge à 50% de la vitesse du scroll (effet parallax classique)
    // - 1.0 = background bouge à la même vitesse (pas d'effet parallax)
    // - > 1.0 = background bouge plus vite (effet inverse)
    const parallaxFactor = 0.5; // Ajustez cette valeur (0.3 à 1.5 pour un effet visible)
    const parallaxOffset = scrollY * parallaxFactor;
    
    // Appliquer le décalage au background-position
    // Le multiplicateur 0.2 contrôle l'intensité du mouvement vertical
    hero.style.backgroundPosition = `center ${50 + parallaxOffset * 0.2}%`;
  }

  // Écouter le scroll avec requestAnimationFrame pour de meilleures performances
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        applyParallax();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Appliquer au chargement initial
  applyParallax();
})();

