// Gestion du menu mobile
(function() {
  'use strict';

  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');
  
  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener('click', function() {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('navbar-menu-open');
    toggle.classList.toggle('navbar-toggle-open');
  });

  // Fermer le menu quand on clique sur un lien
  const menuLinks = menu.querySelectorAll('.navbar-link');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('navbar-menu-open');
      toggle.classList.remove('navbar-toggle-open');
    });
  });
})();

