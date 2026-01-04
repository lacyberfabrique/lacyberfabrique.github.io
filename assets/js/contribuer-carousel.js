// Initialisation du carousel Owl Carousel pour la page Contribuer
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery === 'undefined' || typeof jQuery.fn.owlCarousel === 'undefined') {
      console.warn('jQuery ou Owl Carousel non chargé');
      return;
    }

    const $carousel = jQuery('.ways-carousel');
    
    if ($carousel.length === 0) {
      return;
    }

    // Récupérer les paramètres depuis data-settings
    const settingsAttr = $carousel.attr('data-settings');
    let settings = {
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      stagePadding: 20,
      margin: 30,
      responsive: {
        768: {
          items: 2,
          stagePadding: 30,
          margin: 30
        },
        1024: {
          items: 3,
          stagePadding: 40,
          margin: 40
        }
      }
    };

    if (settingsAttr) {
      try {
        const customSettings = JSON.parse(settingsAttr);
        settings = Object.assign(settings, customSettings);
      } catch (e) {
        console.warn('Erreur lors du parsing des paramètres du carousel:', e);
      }
    }

    // Initialiser le carousel
    $carousel.owlCarousel(settings);

    // Réinitialiser le carousel lors du redimensionnement
    let resizeTimer;
    jQuery(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.owlCarousel(settings);
      }, 250);
    });
  });
})();

