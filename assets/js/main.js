/* ============================================================
   INDOMIT — Minimal Page Interactions
   ============================================================ */

(function () {
  'use strict';

  /* ---- NAV: scroll shadow ---- */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });


  /* ---- NAV: mobile toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      const isOpen = navLinks.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* ---- SCROLL ANIMATIONS: fade-up on intersection ---- */
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window && fadeElements.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    fadeElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }


  /* ---- CTA FORM: basic client-side handling ---- */
  const ctaForm = document.getElementById('ctaForm');

  if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = ctaForm.querySelector('input[type="email"]');
      var submitBtn = ctaForm.querySelector('button[type="submit"]');
      var email = emailInput.value.trim();

      if (!email) return;

      // Visual feedback
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Added';
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = 'var(--sage)';
      emailInput.value = '';

      // Reset after 3 seconds
      setTimeout(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
      }, 3000);

      // TODO: Wire to actual backend / email service
      console.log('[Indomit] Waitlist signup:', email);
    });
  }


  /* ---- SMOOTH SCROLL: polyfill-free anchor handling ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 0;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

})();
