/**
 * Americos Chemicals Pvt Ltd — Main UI Script
 * Handles: navigation, scroll effects, reveal animations, star rendering, active nav links
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     Hamburger menu
  ───────────────────────────────────────────── */
  function initHamburger() {
    var toggle = document.getElementById('menu-toggle');
    var navLinks = document.getElementById('nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      var expanded = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        e.target !== toggle &&
        !toggle.contains(e.target)
      ) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close when a nav link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ─────────────────────────────────────────────
     Sticky header with shadow
  ───────────────────────────────────────────── */
  function initStickyHeader() {
    var header = document.querySelector('header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ─────────────────────────────────────────────
     Scroll-reveal via IntersectionObserver
  ───────────────────────────────────────────── */
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: reveal all immediately
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ─────────────────────────────────────────────
     Active nav link detection
  ───────────────────────────────────────────── */
  function initActiveNav() {
    var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('nav a').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      // Normalise: strip trailing slash, handle relative hrefs
      var linkPath = href.replace(/\/$/, '');
      if (
        linkPath &&
        (currentPath === linkPath || currentPath.endsWith(linkPath))
      ) {
        link.classList.add('active');
      }
    });
  }

  /* ─────────────────────────────────────────────
     Star rating renderer
     Returns an HTML string of ★/½★/☆ unicode stars.
  ───────────────────────────────────────────── */
  window.renderStars = function (rating) {
    rating = parseFloat(rating) || 0;
    var html = '<span class="stars" aria-label="' + rating + ' out of 5 stars">';
    for (var i = 1; i <= 5; i++) {
      if (rating >= i) {
        html += '<span class="star filled" aria-hidden="true">&#9733;</span>'; // ★
      } else if (rating >= i - 0.5) {
        html += '<span class="star half" aria-hidden="true">&#189;&#9733;</span>'; // ½★
      } else {
        html += '<span class="star empty" aria-hidden="true">&#9734;</span>'; // ☆
      }
    }
    html += '</span>';
    return html;
  };

  /* ─────────────────────────────────────────────
     Smooth scroll for anchor links
  ───────────────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     Hero video mute toggle
  ───────────────────────────────────────────── */
  function initVideoMuteBtn() {
    var btn = document.querySelector('.video-mute-btn');
    var video = document.querySelector('.hero-video');
    if (!btn || !video) return;

    btn.addEventListener('click', function () {
      video.muted = !video.muted;
      btn.innerHTML = video.muted
        ? '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'
        : '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>';
      btn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
    });
  }

  /* ─────────────────────────────────────────────
     Staggered card reveal on category/product grids
  ───────────────────────────────────────────── */
  function initStaggeredCards() {
    var grids = document.querySelectorAll('.products-grid, .cat-grid, .testimonials-grid, .steps-grid');
    grids.forEach(function (grid) {
      var cards = grid.querySelectorAll('.product-card, .cat-card, .testimonial-card, .step-card');
      cards.forEach(function (card, idx) {
        card.style.transitionDelay = (idx * 0.07) + 's';
      });
    });
  }

  /* ─────────────────────────────────────────────
     Bootstrap all on DOM ready
  ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initHamburger();
    initStickyHeader();
    initScrollReveal();
    initActiveNav();
    initSmoothScroll();
    initVideoMuteBtn();
    initStaggeredCards();
  });
})();
