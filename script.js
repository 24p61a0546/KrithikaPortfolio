/**
 * ============================================================================
 * Krithika Bathula - Personal Portfolio JavaScript
 * Modern, Lightweight Interactions (Zero Frameworks)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DOM Element Selectors
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const toggleIcon = document.getElementById('toggleIcon');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('header.section, section.section');
  const contactBtn = document.getElementById('contactButton');

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle (Accessible & Keyboard Friendly)
  // --------------------------------------------------------------------------
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu state
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('is-open', !isExpanded);
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      
      // Toggle icon between bars and times (close)
      if (toggleIcon) {
        if (!isExpanded) {
          toggleIcon.classList.remove('fa-bars');
          toggleIcon.classList.add('fa-times');
        } else {
          toggleIcon.classList.remove('fa-times');
          toggleIcon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
          if (toggleIcon) {
            toggleIcon.classList.remove('fa-times');
            toggleIcon.classList.add('fa-bars');
          }
        }
      });
    });

    // Close menu when clicking outside of navbar
    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        if (toggleIcon) {
          toggleIcon.classList.remove('fa-times');
          toggleIcon.classList.add('fa-bars');
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Sticky Navbar Elevation on Scroll
  // --------------------------------------------------------------------------
  const handleScrollElevation = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScrollElevation, { passive: true });
  handleScrollElevation(); // Initial check

  // --------------------------------------------------------------------------
  // 4. ScrollSpy / Active Link Highlighting using IntersectionObserver
  // --------------------------------------------------------------------------
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in top-middle viewport
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // --------------------------------------------------------------------------
  // 5. Contact Button Placeholder Guard
  // --------------------------------------------------------------------------
  if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
      const href = contactBtn.getAttribute('href');
      // If the email placeholder is still present, notify user gracefully
      if (href && href.includes('[your-email@example.com]')) {
        e.preventDefault();
        alert(
          "Notice: The email address is currently set to a placeholder ([your-email@example.com]).\n\n" +
          "You can update this with your actual email in index.html, or reach out via GitHub at https://github.com/24p61a0546."
        );
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Smooth Scroll for Internal Anchors
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Set focus to target for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Scroll-Triggered Animations via IntersectionObserver
  // --------------------------------------------------------------------------
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    animatedElements.forEach((el) => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      }
    );

    // Apply staggered animation delays for items inside grids
    document.querySelectorAll('.skills-grid, .about-highlights, .projects-grid').forEach((grid) => {
      const children = grid.querySelectorAll('.animate-on-scroll');
      children.forEach((item, index) => {
        item.style.transitionDelay = `${(index % 4) * 0.08}s`;
      });
    });

    animatedElements.forEach((el) => animationObserver.observe(el));
  } else {
    animatedElements.forEach((el) => el.classList.add('is-visible'));
  }

  console.log('[Portfolio] Krithika Bathula portfolio initialized successfully with professional animations.');
});
