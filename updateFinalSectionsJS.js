const fs = require('fs');

const newJS = `
// ────────────────────────────────────────────────────
// FINAL SECTIONS ANIMATIONS & LOGIC
// ────────────────────────────────────────────────────
(function initFinalSections() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Generic fades
        if (entry.target.classList.contains('fade-up-elem') || entry.target.classList.contains('slide-in-left') || entry.target.classList.contains('slide-in-right')) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }

        // Tech Badge Grid Stagger
        if (entry.target.classList.contains('tech-grid-label')) {
          const badges = document.querySelectorAll('.t-badge');
          let delay = 0;
          badges.forEach(b => {
            setTimeout(() => { b.style.opacity = 1; b.style.transform = 'translateY(0)'; }, delay);
            delay += 50;
          });
          io.unobserve(entry.target);
        }

        // Showcases (Play Mockup Animations)
        if (entry.target.classList.contains('tech-trigger-wa')) {
          entry.target.querySelector('.wa-mock').classList.add('play');
          io.unobserve(entry.target);
        }
        if (entry.target.classList.contains('tech-trigger-chat')) {
          entry.target.querySelector('.cb-mock').classList.add('play');
          io.unobserve(entry.target);
        }
        if (entry.target.classList.contains('tech-trigger-pipe')) {
          entry.target.querySelector('.pipe-mock').classList.add('play');
          io.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.tech-new-section .fade-up-elem, .tech-new-section .slide-in-left, .tech-new-section .slide-in-right, .tech-grid-label, .tech-trigger-wa, .tech-trigger-chat, .tech-trigger-pipe, .port-new-section .fade-up-elem, .test-new-section .fade-up-elem, .contact-new-section .fade-up-elem').forEach(el => io.observe(el));

  // Initialize tech badges hidden
  document.querySelectorAll('.t-badge').forEach(b => {
    b.style.opacity = 0; b.style.transform = 'translateY(20px)'; b.style.transition = 'all 0.4s';
  });

  // Portfolio Filtering
  const tabs = document.querySelectorAll('.p-tab');
  const cards = document.querySelectorAll('.p-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
          // small delay for transition
          setTimeout(() => { card.style.opacity = 1; card.style.scale = 1; }, 50);
        } else {
          card.style.opacity = 0; card.style.scale = 0.95;
          setTimeout(() => card.classList.add('hidden'), 400);
        }
      });
    });
  });

})();
`;

fs.appendFileSync('main.js', newJS);
console.log('main.js appended with final sections JS successfully.');
