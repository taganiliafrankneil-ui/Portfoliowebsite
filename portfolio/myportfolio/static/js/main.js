/* ============================================================
   FRANK NEIL TAGANILI — main.js v3
   ─ Parallax (hero bg + hero img)
   ─ Navbar scroll + active link
   ─ Improved scroll reveal with stagger
   ─ Project card stagger
   ─ Skill pill stagger
   ─ Section progress indicator
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR ───────────────────────────────────────────── */
  const navbar = document.getElementById('mainNavbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });


  /* ── 2. ACTIVE NAV LINK ──────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  const activeLinkObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(
          `.navbar-nav .nav-link[href="#${entry.target.id}"]`
        );
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => activeLinkObs.observe(s));


  /* ── 3. MOBILE NAV COLLAPSE ──────────────────────────────── */
  const navMenu = document.getElementById('navMenu');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });


  /* ── 4. PARALLAX ─────────────────────────────────────────── */
  const heroBg  = document.querySelector('.hero-parallax-bg');
  const heroImg = document.querySelector('.hero-img');
  const heroSection = document.getElementById('home');

  const handleParallax = () => {
    if (!heroSection) return;

    const scrollY = window.scrollY;
    const heroH   = heroSection.offsetHeight;

    // Only run parallax while hero is in view
    if (scrollY > heroH * 1.2) return;

    // Background layer — moves slower (subtle depth)
    if (heroBg) {
      heroBg.style.transform = `translateY(${scrollY * 0.18}px)`;
    }

    // Hero image — moves at medium speed
    if (heroImg) {
      heroImg.style.transform = `scale(1.08) translateY(${scrollY * 0.12}px)`;
    }
  };

  window.addEventListener('scroll', handleParallax, { passive: true });


  /* ── 5. SCROLL REVEAL (fade-in classes) ─────────────────── */
  const fadeEls = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right'
  );

  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Small delay based on element's inline animation-delay if set
        const delay = entry.target.style.animationDelay || '0ms';
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay) || 0);
        fadeObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => fadeObs.observe(el));


  /* ── 6. PROJECT CARD STAGGER ─────────────────────────────── */
  const projectCards = document.querySelectorAll('.project-card');

  if (projectCards.length) {
    // Set initial hidden state
    projectCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const cardObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = [...projectCards].indexOf(entry.target);
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, idx * 100);
          cardObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });

    projectCards.forEach(c => cardObs.observe(c));
  }


  /* ── 7. SKILL PILL STAGGER ───────────────────────────────── */
  const pills = document.querySelectorAll('.skill-pill');
  const skillsSection = document.getElementById('skills');

  if (pills.length && skillsSection) {
    pills.forEach(p => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(12px)';
      p.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    });

    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        pills.forEach((p, i) => {
          setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
          }, i * 50);
        });
      }
    }, { threshold: 0.1 }).observe(skillsSection);
  }


  /* ── 8. SECTION PARALLAX (non-hero sections) ─────────────── */
  // Subtle upward shift on scroll for each section heading
  const sectionHeadings = document.querySelectorAll(
    '.about-quote, .portfolio-header, .edu-card, .contact-headline'
  );

  const shiftObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  sectionHeadings.forEach(el => {
    el.style.transition = 'opacity 1s ease, transform 1s ease';
    shiftObs.observe(el);
  });


  /* ── 9. ABOUT STATS COUNT-UP ─────────────────────────────── */
  const aboutSection = document.getElementById('about');

  if (aboutSection) {
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // Animate stat values with a subtle scale pop
        document.querySelectorAll('.about-stat__val').forEach((val, i) => {
          setTimeout(() => {
            val.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            val.style.transform = 'scale(1.15)';
            setTimeout(() => { val.style.transform = 'scale(1)'; }, 300);
          }, i * 120);
        });
      }
    }, { threshold: 0.4 }).observe(aboutSection);
  }


  /* ── 10. SMOOTH SCROLL OFFSET (fixed navbar) ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navbarH = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});