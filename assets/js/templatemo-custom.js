(function(){
  'use strict';

  // Header background toggle on scroll
  const header = document.querySelector('header');
  const headerText = document.querySelector('.header-text');
  function toggleHeaderBg() {
    if (!header) return;
    const scroll = window.scrollY || document.documentElement.scrollTop;
    const box = headerText ? headerText.getBoundingClientRect().height : 0;
    const headerH = header.getBoundingClientRect().height;
    if (scroll >= Math.max(0, box - headerH)) header.classList.add('background-header');
    else header.classList.remove('background-header');
  }
  window.addEventListener('scroll', toggleHeaderBg, { passive: true });
  window.addEventListener('load', toggleHeaderBg);

  // Mobile menu toggle
  const menuTrigger = document.querySelector('.menu-trigger');
  const nav = document.querySelector('.header-area .nav');
  if (menuTrigger && nav) {
    menuTrigger.addEventListener('click', function() {
      menuTrigger.classList.toggle('active');
      const isOpen = nav.getAttribute('data-open') === 'true' || nav.style.display === 'block';
      if (isOpen) {
        nav.style.display = 'none';
        nav.setAttribute('data-open', 'false');
      } else {
        nav.style.display = 'block';
        nav.setAttribute('data-open', 'true');
      }
    });
    // Close nav when clicking a link (mobile)
    nav.addEventListener('click', function(e) {
      const target = e.target;
      if (target && target.tagName === 'A' && window.innerWidth < 991) {
        menuTrigger.classList.remove('active');
        nav.style.display = 'none';
        nav.setAttribute('data-open', 'false');
      }
    });
  }

  // Smooth scroll and active link highlight
  const links = Array.from(document.querySelectorAll('.scroll-to-section a[href^="#"]'));
  function getTop(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + (window.pageYOffset || document.documentElement.scrollTop);
  }
  function getHeight(el) {
    return el.getBoundingClientRect().height;
  }
  function setActive() {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    links.forEach(function(a){
      const id = a.getAttribute('href') || '';
      if (!id || !id.startsWith('#') || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      const top = getTop(el);
      const height = getHeight(el);
      if (top <= scrollPos + 2 && top + height > scrollPos + 2) a.classList.add('active');
      else a.classList.remove('active');
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('load', setActive);
  links.forEach(function(a){
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = getTop(target) + 1;
      window.scrollTo({ top: top, behavior: 'smooth' });
      try { history.replaceState(null, '', href); } catch(_) {}
    });
  });
})();