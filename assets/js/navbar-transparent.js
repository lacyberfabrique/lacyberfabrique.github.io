// Gestion de la navbar transparente/blanche sur la landing page
(function() {
  'use strict';

  const hero = document.querySelector('.hero-section-fullscreen');
  if (!hero) {
    return; // Pas sur la landing page
  }

  document.body.classList.add('landing-page');

  const body = document.body;
  const navbar = document.querySelector('.site-header');
  
  if (!navbar) {
    return;
  }

  // Fonction pour vérifier si on scroll
  function checkScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Ajouter la classe dès qu'on scroll (même 1px)
    if (scrollY > 0) {
      body.classList.add('navbar-scrolled');
    } else {
      body.classList.remove('navbar-scrolled');
    }
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

  // Gérer les clics sur les boutons CTA pour scroller
  const scrollButtons = document.querySelectorAll('[data-scroll-navbar]');
  scrollButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      const href = button.getAttribute('href');
      
      // Si le lien pointe vers le contenu ou commence par #, on va scroller
      if (href && (href.includes('#content') || href.startsWith('#'))) {
        // Ajouter la classe immédiatement car on va scroller
        setTimeout(function() {
          body.classList.add('navbar-scrolled');
        }, 50);
      } else {
        // Vérifier après un court délai
        setTimeout(function() {
          checkScroll();
        }, 100);
      }
    });
  });
  
  // Gérer aussi les liens qui pointent vers #content
  const contentLinks = document.querySelectorAll('a[href="#content"]');
  contentLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      setTimeout(function() {
        body.classList.add('navbar-scrolled');
      }, 50);
    });
  });

  // Vérifier la position initiale
  checkScroll();
})();
