/* ====================================================
   JOINT AI LABS — main.js (Perf-First Edition)
   Removed: Three.js · Neural Canvas (lag sources)
   Kept: Lenis · GSAP · Chat · WA · Typing · Counters
   ==================================================== */

'use strict';

// ────────────────────────────────────────────────────
// 1. PAGE LOADER
// ────────────────────────────────────────────────────
(function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const progress = document.getElementById('loader-progress');
  const pctText = document.getElementById('loader-pct');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 22;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    if (progress) progress.style.width = pct + '%';
    if (pctText) pctText.innerText = Math.round(pct) + '%';
  }, 100);
  
  // Also ensure the counter hits 100% on load before hiding
  window.addEventListener('load', () => {
    if (pctText) pctText.innerText = '100%';
    if (progress) progress.style.width = '100%';
    setTimeout(() => { loader.classList.add('hidden'); }, 600);
  });
  setTimeout(() => {
    if (pctText) pctText.innerText = '100%';
    if (progress) progress.style.width = '100%';
    loader.classList.add('hidden');
  }, 3000);
})();


// ────────────────────────────────────────────────────
// 2. LENIS SMOOTH SCROLL (Lightweight)
// ────────────────────────────────────────────────────
let lenis;
(function initLenis() {
  if (typeof Lenis === 'undefined') return;
  lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

  // Do NOT run custom RAF if GSAP is available; we sync via GSAP ticker later.
  if (typeof gsap === 'undefined') {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -80 }); }
    });
  });
})();


// ────────────────────────────────────────────────────
// 3. CUSTOM CURSOR
// ────────────────────────────────────────────────────
(function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring || window.innerWidth < 768) return;

  // Hardware-accelerated cursor snap (zero layout thrashing)
  let cX = window.innerWidth/2, cY = window.innerHeight/2;
  let rafC = false;
  document.addEventListener('mousemove', e => {
    cX = e.clientX; cY = e.clientY;
    if (!rafC) {
      requestAnimationFrame(() => {
        if(dot) dot.style.transform = `translate3d(calc(${cX}px - 50%), calc(${cY}px - 50%), 0)`;
        if(ring) ring.style.transform = `translate3d(calc(${cX}px - 50%), calc(${cY}px - 50%), 0)`;
        rafC = false;
      });
      rafC = true;
    }
  }, { passive: true });
})();


// ────────────────────────────────────────────────────
// 4. NAVIGATION
// ────────────────────────────────────────────────────
(function initNav() {
  const navbar = document.getElementById('navbar');

  let rafS = false;
  window.addEventListener('scroll', () => {
    if(!rafS) {
      requestAnimationFrame(() => {
        if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
        rafS = false;
      });
      rafS = true;
    }
  }, { passive: true });

  // Active section highlight for both Desktop Nav and Mobile Bottom Nav
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link[data-section]');
  const mobileLinks = document.querySelectorAll('.mbn-item[data-section]');
  
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        desktopLinks.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
        mobileLinks.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(s => io.observe(s));
})();


// ────────────────────────────────────────────────────
// 5. GSAP SCROLL ANIMATIONS (No heavy parallax scrub)
// ────────────────────────────────────────────────────
(function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Official Lenis + ScrollTrigger sync
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // Refresh ScrollTrigger after loader finishes to prevent incorrect calculations
  window.addEventListener('load', () => {
    setTimeout(() => ScrollTrigger.refresh(), 600);
    setTimeout(() => ScrollTrigger.refresh(), 2600);
  });

  // Hero entrance
  gsap.timeline({ delay: 0.1 })
    .from('.hero-eyebrow',        { opacity: 0, y: -20, duration: 0.6, ease: 'power3.out' })
    .from('.hero-heading .h-word', { opacity: 0, y: 50, stagger: 0.06, duration: 0.7, ease: 'power4.out' }, '-=0.3')
    .from('.hero-sub',             { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.hero-services-strip',  { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .from('.hero-ctas',            { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .from('.hero-stats-row',       { opacity: 0, y: 10, duration: 0.5, ease: 'power3.out' }, '-=0.3');

  // Generic data-gsap reveals
  document.querySelectorAll('[data-gsap]').forEach(el => {
    const from = { fadeUp: {y:45,opacity:0}, fadeLeft:{x:-50,opacity:0}, fadeRight:{x:50,opacity:0}, scaleIn:{scale:0.9,opacity:0} }[el.dataset.gsap] || {y:30,opacity:0};
    gsap.from(el, { ...from, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' } });
  });

  // Service cards
  document.querySelectorAll('.svc-card').forEach(card => {
    gsap.from(card, { opacity: 0, y: 50, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' } });
  });

  // Portfolio items
  gsap.from('.portfolio-item', {
    opacity: 0, scale: 0.92, stagger: 0.08, duration: 0.65, ease: 'power3.out',
    scrollTrigger: { trigger: '.portfolio-grid', start: 'top 88%' }
  });

  // Process steps
  document.querySelectorAll('.pt-step').forEach(s => {
    gsap.from(s, { opacity: 0, x: -35, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: s, start: 'top 90%' } });
  });

  // Stat blocks
  gsap.from('.stat-block', {
    opacity: 0, y: 35, stagger: 0.08, duration: 0.65, ease: 'power3.out',
    scrollTrigger: { trigger: '.stats-section', start: 'top 88%' }
  });

  // Pricing cards
  gsap.from('.pricing-card', {
    opacity: 0, y: 40, stagger: 0.1, duration: 0.75, ease: 'power3.out',
    scrollTrigger: { trigger: '.pricing-grid', start: 'top 88%' }
  });

})();


// ────────────────────────────────────────────────────
// 6. COUNTER ANIMATION
// ────────────────────────────────────────────────────
(function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const start = performance.now();
      const dur = 1600;
      function step(now) {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(eased * target);
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(c => io.observe(c));
})();


// ────────────────────────────────────────────────────
// 7. TYPING EFFECT (Hero eyebrow)
// ────────────────────────────────────────────────────
(function initTyping() {
  const el = document.getElementById('hero-typing-text');
  if (!el) return;
  const phrases = [
    'AI-Powered Business Solutions',
    'Custom Web Applications',
    'AI Chatbots & Agents',
    'WhatsApp Sales Automation',
    'Business Management Systems',
    'Mobile App Development',
  ];
  let pi = 0, ci = 0, deleting = false;
  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ci + 1); ci++;
      if (ci === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
    } else {
      el.textContent = phrase.slice(0, ci - 1); ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 45 : 75);
  }
  setTimeout(type, 1500);
})();


// ────────────────────────────────────────────────────
// 8. (Console Counter Removed)
// ────────────────────────────────────────────────────



// ────────────────────────────────────────────────────
// NEW SERVICES ANIMATIONS
// ────────────────────────────────────────────────────
(function initNewServices() {
  const cards = document.querySelectorAll('.s-card');
  const cta = document.querySelector('.s-bottom-cta');
  const dashBars = document.querySelectorAll('.mock-dash');
  const phoneVals = document.querySelectorAll('.mp-st-val');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('s-card')) {
          const delay = Array.from(cards).indexOf(entry.target) * 100;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('s-bottom-cta')) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('mock-dash')) {
          setTimeout(() => entry.target.classList.add('animate'), 300);
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('mp-st-val')) {
          animateValue(entry.target);
          observer.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(c => observer.observe(c));
  if(cta) observer.observe(cta);
  dashBars.forEach(d => observer.observe(d));
  phoneVals.forEach(v => observer.observe(v));

  function animateValue(obj) {
    const target = parseInt(obj.getAttribute('data-target'));
    const duration = 2000;
    const start = Date.now();
    
    function step() {
      const p = Math.min((Date.now() - start) / duration, 1);
      const val = Math.floor(p * target);
      if (target > 1000) {
        // Format as Indian currency style or standard thousands (e.g. 48500 -> 48.5K or 48,500)
        obj.textContent = target >= 10000 ? '₹' + (val / 1000).toFixed(1) + 'K' : val;
      } else {
        obj.textContent = val + (obj.classList.contains('v-ord') ? '' : '+');
      }
      if (p < 1) requestAnimationFrame(step);
      else {
        // Final format
        if (target === 48500) obj.textContent = '₹48.5K';
        if (target === 124) obj.textContent = '124';
        if (target === 890) obj.textContent = '890+';
      }
    }
    requestAnimationFrame(step);
  }
})();

// ────────────────────────────────────────────────────
// 11. SHOWCASE TABS
// ────────────────────────────────────────────────────
(function initTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const indicator = document.getElementById('tab-indicator');

  function moveIndicator(btn) {
    if (!indicator) return;
    const navRect = btn.closest('.tab-nav').getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    indicator.style.left = (btnRect.left - navRect.left) + 'px';
    indicator.style.width = btnRect.width + 'px';
  }

  const active = document.querySelector('.tab-btn.active');
  if (active) setTimeout(() => moveIndicator(active), 80);

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
      moveIndicator(btn);
    });
  });

  // Interactive chatbot (showcase tab)
  const input = document.getElementById('fcd-input-field');
  const sendBtn = document.getElementById('fcd-send-btn');
  const msgs = document.getElementById('fcd-messages');

  const replies = {
    hello: "Hello! 👋 Welcome to Joint AI Labs! How can I help?",
    hi: "Hi there! 😊 I'm JointBot, your AI assistant. What are you looking for?",
    services: "We offer: 🌐 Website Design, 🤖 AI Chatbots, 💬 WhatsApp Agents, 📊 Business ERP, 📱 Mobile Apps!",
    pricing: "Plans start from ₹4,999/month. We have Starter, Pro, and Enterprise tiers. Want a quote?",
    contact: "📞 8017683428 | 70033 83676\n✉️ jointailabs@gmail.com\n🌐 www.jointailabs.com",
    chatbot: "Our GPT-4 chatbots handle unlimited conversations, integrate with your CRM, and run 24/7! 🤖",
    whatsapp: "Our WhatsApp AI agents automate your entire sales funnel — from lead capture to booking! 💬",
    website: "We build fast, SEO-optimized, stunning websites that convert! React, Next.js, and more. 🌐",
    mobile: "iOS + Android apps using React Native & Flutter. Beautiful UI, blazing performance! 📱",
    default: "Great question! Our team would love to help. Want a FREE consultation call? 📅",
  };

  function addMsg(text, type) {
    const d = document.createElement('div');
    d.className = `fcd-msg ${type}-msg`; d.textContent = text;
    msgs?.appendChild(d);
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }

  function getReply(val) {
    const low = val.toLowerCase();
    for (const [k, r] of Object.entries(replies)) {
      if (k !== 'default' && low.includes(k)) return r;
    }
    return replies.default;
  }

  function send() {
    const val = input?.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';
    setTimeout(() => addMsg(getReply(val), 'bot'), 700 + Math.random() * 400);
  }

  sendBtn?.addEventListener('click', send);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  setTimeout(() => { if (msgs) addMsg("👋 Hi! I'm JointBot, powered by GPT-4. Ask me anything about our services!", 'bot'); }, 400);
})();


// ────────────────────────────────────────────────────
// 12. PORTFOLIO FILTER
// ────────────────────────────────────────────────────
(function initFilter() {
  document.querySelectorAll('.pf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.portfolio-item').forEach(item => {
        const cats = item.dataset.category || '';
        const show = filter === 'all' || cats.split(' ').includes(filter);
        item.style.display = show ? '' : 'none';
        if (show) item.style.animation = 'fadeIn 0.4s ease both';
      });
    });
  });
})();


// ────────────────────────────────────────────────────
// 13. FAQ ACCORDION
// ────────────────────────────────────────────────────
(function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => { o.classList.remove('open'); o.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false'); });
      if (!isOpen) { item.classList.add('open'); item.querySelector('.faq-q')?.setAttribute('aria-expanded', 'true'); }
    });
  });
})();


// ────────────────────────────────────────────────────
// 14. PRICING TOGGLE
// ────────────────────────────────────────────────────
(function initPricing() {
  const toggle = document.getElementById('pricing-toggle');
  const amounts = document.querySelectorAll('.pc-amount[data-monthly]');
  let yearly = false;
  toggle?.addEventListener('click', () => {
    yearly = !yearly;
    toggle.classList.toggle('on', yearly);
    amounts.forEach(el => {
      const val = yearly ? el.dataset.yearly : el.dataset.monthly;
      if (val) el.textContent = parseInt(val).toLocaleString('en-IN');
    });
  });
})();


// ────────────────────────────────────────────────────
// 15. AI PIPELINE STEP ANIMATION
// ────────────────────────────────────────────────────
(function initPipeline() {
  const steps = document.querySelectorAll('.pipeline-step');
  if (!steps.length) return;
  let cur = 0;
  setInterval(() => {
    steps.forEach(s => s.classList.remove('ps-active'));
    steps[cur].classList.add('ps-active');
    cur = (cur + 1) % steps.length;
  }, 1400);
})();


// ────────────────────────────────────────────────────
// 16. CONTACT FORM
// ────────────────────────────────────────────────────
(function initForm() {
  const form = document.getElementById('contact-form-main');
  const submitBtn = document.getElementById('cf-submit-btn');
  const submitText = document.getElementById('cf-submit-text');
  const successMsg = document.getElementById('form-success');

  function validate() {
    let ok = true;
    const name = document.getElementById('cf-name');
    const nameErr = document.getElementById('cf-name-error');
    if (!name?.value.trim()) { if (nameErr) nameErr.textContent = 'Please enter your name'; ok = false; }
    else if (nameErr) nameErr.textContent = '';

    const email = document.getElementById('cf-email');
    const emailErr = document.getElementById('cf-email-error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.value)) { if (emailErr) emailErr.textContent = 'Valid email required'; ok = false; }
    else if (emailErr) emailErr.textContent = '';

    const msg = document.getElementById('cf-message');
    const msgErr = document.getElementById('cf-message-error');
    if ((msg?.value.trim().length || 0) < 10) { if (msgErr) msgErr.textContent = 'Please describe your project (min 10 chars)'; ok = false; }
    else if (msgErr) msgErr.textContent = '';
    return ok;
  }

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate()) return;
    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.textContent = 'Sending...';
    await new Promise(r => setTimeout(r, 1600));
    if (submitText) submitText.textContent = '✓ Sent!';
    if (submitBtn) submitBtn.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
    setTimeout(() => {
      if (successMsg) { successMsg.hidden = false; successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
      form.reset();
      if (submitBtn) { submitBtn.disabled = false; submitBtn.style.background = ''; }
      if (submitText) submitText.textContent = 'Send Message & Get Free Quote';
    }, 600);
  });

  ['cf-name', 'cf-email', 'cf-message'].forEach(id => {
    document.getElementById(id)?.addEventListener('blur', validate);
  });
})();


// ────────────────────────────────────────────────────
// 17. (Hero Metrics Removed)
// ────────────────────────────────────────────────────

// Signature
console.log('%c⚡ JOINT AI LABS %c\nAI-Powered Business Solutions', 'color:#00d4ff;font-size:18px;font-weight:900;', 'color:rgba(255,255,255,0.5);');


// ────────────────────────────────────────────────────
// 18. SCROLL TRAVELER (Rocket that follows scroll)
// ────────────────────────────────────────────────────
(function initScrollTraveler() {
  const traveler = document.getElementById('scroll-traveler');
  if (!traveler) return;

  let ticking = false;
  let lastScrollY = window.scrollY;

  function updateTraveler() {
    const scrolled = window.scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const percent = Math.min(1, Math.max(0, scrolled / max));
    // Map 0–1 scroll to 0%–100% of the track height
    traveler.style.top = (percent * 100) + '%';
    ticking = false;
  }

  // Use Lenis scroll events if available (smoother), else native scroll
  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', ({ scroll, limit }) => {
      const percent = Math.min(1, Math.max(0, scroll / limit));
      traveler.style.top = (percent * 100) + '%';
    });
  } else {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateTraveler);
        ticking = true;
      }
    }, { passive: true });
  }

  // Initialise position on load
  updateTraveler();
})();

// ────────────────────────────────────────────────────
// 12. HERO JS (Particles & Text Rotator)
// ────────────────────────────────────────────────────


// --- Particle Canvas (Optimised: 150 particles, pauses offscreen) ---
(function initCyberWarp() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: false });

  let width, height;
  let particles = [];
  const MAX = 150; // ← was 600, massive perf gain
  const mouse = { x: 0, y: 0, tX: 0, tY: 0, on: false };
  let scrollSpeed = 0, lastSY = window.scrollY;
  let heroVisible = true; // visibility gate
  let animId = 0;

  // Observe hero visibility — stop drawing when offscreen
  const heroEl = document.querySelector('.hero');
  if (heroEl && typeof IntersectionObserver !== 'undefined') {
    new IntersectionObserver(([e]) => {
      heroVisible = e.isIntersecting;
      if (heroVisible && !animId) animId = requestAnimationFrame(animate);
    }, { threshold: 0 }).observe(heroEl);
  }

  // Throttled scroll speed tracker
  let scrollTick = false;
  window.addEventListener('scroll', () => {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY;
      scrollSpeed = Math.min(40, scrollSpeed + Math.abs(sy - lastSY) * 0.16);
      lastSY = sy;
      scrollTick = false;
    });
  }, { passive: true });

  // Mouse / touch
  document.addEventListener('mousemove', e => { mouse.tX = e.clientX; mouse.tY = e.clientY; mouse.on = true; }, { passive: true });
  document.addEventListener('touchmove', e => { if (e.touches[0]) { mouse.tX = e.touches[0].clientX; mouse.tY = e.touches[0].clientY; mouse.on = true; } }, { passive: true });
  document.addEventListener('mouseout', () => { mouse.on = false; });
  document.addEventListener('touchend', () => { mouse.on = false; });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = heroEl ? heroEl.offsetHeight : window.innerHeight;
    mouse.tX = mouse.x = width / 2;
    mouse.tY = mouse.y = height / 2;
  }
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); });

  // Particle uses typed properties for JIT-friendliness
  function createParticle(init) {
    const r = Math.random;
    const x0 = (r() - 0.5) * 1600, y0 = (r() - 0.5) * 1600;
    const rn = r();
    return {
      x: x0, y: y0, z: init ? r() * 1000 : 1000,
      spd: 3.5 + r() * 5.5,
      col: rn < 0.45 ? '0,212,255' : rn < 0.9 ? '139,92,246' : '255,255,255',
      ang: Math.atan2(y0, x0),
      rad: Math.sqrt(x0 * x0 + y0 * y0),
      orb: (r() - 0.5) * 0.006,
      px: 0, py: 0
    };
  }

  for (let i = 0; i < MAX; i++) particles.push(createParticle(true));
  resize();

  const MOUSE_R2 = 180 * 180; // squared threshold — avoids sqrt per particle

  function animate() {
    if (!heroVisible) { animId = 0; return; } // stop RAF chain when invisible

    scrollSpeed *= 0.92;
    const ta = Math.max(0.06, 0.2 - (scrollSpeed / 40) * 0.14);
    ctx.fillStyle = 'rgba(3,7,18,' + ta + ')';
    ctx.fillRect(0, 0, width, height);

    // Smooth mouse lerp
    if (mouse.on) { mouse.x += (mouse.tX - mouse.x) * 0.1; mouse.y += (mouse.tY - mouse.y) * 0.1; }
    else { mouse.x += (width / 2 - mouse.x) * 0.05; mouse.y += (height / 2 - mouse.y) * 0.05; }

    const oX = width / 2 + (mouse.x - width / 2) * 0.35;
    const oY = height / 2 + (mouse.y - height / 2) * 0.35;

    for (let i = 0; i < MAX; i++) {
      const p = particles[i];
      p.z -= p.spd + scrollSpeed;
      if (p.z <= 0) { particles[i] = createParticle(false); continue; }

      p.ang += p.orb;
      p.x = Math.cos(p.ang) * p.rad;
      p.y = Math.sin(p.ang) * p.rad;

      const fov = 380;
      p.px = (p.x / p.z) * fov + oX;
      p.py = (p.y / p.z) * fov + oY;

      // Mouse warp — uses squared distance (no sqrt)
      if (mouse.on) {
        const dx = mouse.x - p.px, dy = mouse.y - p.py;
        const d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_R2 && d2 > 1) {
          const f = (1 - d2 / MOUSE_R2) * 3.5;
          const inv = 1 / Math.sqrt(d2); // single sqrt only for close particles
          p.x += dx * inv * f;
          p.y += dy * inv * f;
          p.rad = Math.sqrt(p.x * p.x + p.y * p.y);
        }
      }

      if (p.px < 0 || p.px > width || p.py < 0 || p.py > height) continue;

      const sz = Math.max(1.5, (1 - p.z / 1000) * 6.5);
      const al = Math.max(0, Math.min(1, (1 - p.z / 1000) * 0.85));
      ctx.fillStyle = 'rgba(' + p.col + ',' + al + ')';
      ctx.fillRect(p.px, p.py, sz, sz);
    }

    animId = requestAnimationFrame(animate);
  }

  animId = requestAnimationFrame(animate);
})();

// --- Scroll-Linked 3D Section Reveals ---
(function initWarpScroll() {
  const sections = document.querySelectorAll('.reveal-warp');
  if (sections.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // Only remove active class if the element has gone back below the viewport
        if (entry.boundingClientRect.top > window.innerHeight) {
          entry.target.classList.remove('active');
        }
      }
    });
  }, {
    threshold: 0.01, // Trigger as soon as edge is crossed
    rootMargin: "0px 0px 180px 0px" // Trigger 180px before entering viewport
  });
  
  sections.forEach(sec => observer.observe(sec));
})();

// --- Text Rotator ---
(function initTextRotator() {
  const rotatorText = document.getElementById('h-rotator');
  if (!rotatorText) return;

  const words = ["Websites", "Mobile Apps", "AI Agents", "Automation", "Business Software"];
  let wordIndex = 0;

  setInterval(() => {
    rotatorText.classList.add('slide-up-out');
    
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      rotatorText.innerText = words[wordIndex];
      rotatorText.classList.remove('slide-up-out');
      rotatorText.classList.add('slide-down-in');
      
      // Force reflow
      void rotatorText.offsetWidth;
      
      rotatorText.classList.remove('slide-down-in');
    }, 500); // Wait for fade out
    
  }, 3000); // 2.5s visible + 0.5s transition
})();

// ────────────────────────────────────────────────────
// 13. SPLINE LOAD
// ────────────────────────────────────────────────────
(function loadSpline() {
  const robotWrap = document.getElementById('global-robot');
  if (robotWrap) {
    const initRobot = () => {
      // Defer Spline loading by 800ms after load completion to ensure smooth page entrance
      setTimeout(() => {
        robotWrap.innerHTML = '<spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" loading="lazy" events-target="global"></spline-viewer>';
        
        // Attempt to completely remove the logo from the shadow DOM
        const checkInterval = setInterval(() => {
          const viewer = document.querySelector('spline-viewer');
          if (viewer && viewer.shadowRoot) {
            // Inject custom CSS directly into Spline's Shadow DOM
            const style = document.createElement('style');
            style.textContent = '#logo, a[href*="spline.design"], .spline-watermark { display: none !important; opacity: 0 !important; pointer-events: none !important; }';
            viewer.shadowRoot.appendChild(style);
            
            // Also try to physically remove the node
            const logo = viewer.shadowRoot.querySelector('#logo');
            if (logo) logo.remove();
            
            clearInterval(checkInterval);
          }
        }, 500);

        // Stop checking after 15 seconds
        setTimeout(() => clearInterval(checkInterval), 15000);
      }, 800);
    };

    if (document.readyState === 'complete') {
      initRobot();
    } else {
      window.addEventListener('load', initRobot);
    }
  }
})();

// ────────────────────────────────────────────────────
// NEW ABOUT ANIMATIONS
// ────────────────────────────────────────────────────
(function initNewAbout() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Handle generic fade/slide elements
        if (entry.target.classList.contains('fade-up-elem') || entry.target.classList.contains('slide-in-left') || entry.target.classList.contains('slide-in-right')) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }

        // Handle Stats Counters
        if (entry.target.classList.contains('a-stats-grid')) {
          const counters = entry.target.querySelectorAll('.a-counter');
          counters.forEach(c => animateAboutCounter(c));
          io.unobserve(entry.target);
        }

        // Handle Timeline
        if (entry.target.classList.contains('a-timeline')) {
          entry.target.classList.add('draw-line');
          const nodes = entry.target.querySelectorAll('.a-node');
          let delay = 500;
          nodes.forEach(node => {
            setTimeout(() => node.classList.add('show'), delay);
            delay += 300;
          });
          io.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up-elem, .slide-in-left, .slide-in-right, .a-stats-grid, .a-timeline').forEach(el => io.observe(el));

  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  function animateAboutCounter(obj) {
    const target = parseInt(obj.getAttribute('data-target'));
    const duration = 2000;
    const start = Date.now();
    
    function step() {
      const p = Math.min((Date.now() - start) / duration, 1);
      const easedP = easeOutQuart(p);
      const val = Math.floor(easedP * target);
      obj.textContent = val;
      
      if (p < 1) requestAnimationFrame(step);
      else obj.textContent = target;
    }
    requestAnimationFrame(step);
  }
})();

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

// ────────────────────────────────────────────────────
// REDESIGN: PROCESS PIPELINE INTERACTION
// ────────────────────────────────────────────────────
(function initPipeline() {
  const nodes = document.querySelectorAll('.p-node');
  const progress = document.getElementById('pipe-progress');
  if (!progress || nodes.length === 0) return;

  function setPipeline(activeIndex) {
    nodes.forEach((node, idx) => {
      if (idx <= activeIndex) {
        node.classList.add('lit');
      } else {
        node.classList.remove('lit');
      }
    });
    
    const pct = (activeIndex / (nodes.length - 1)) * 100;
    if (window.innerWidth <= 768) {
      progress.style.width = '100%';
      progress.style.height = pct + '%';
    } else {
      progress.style.height = '100%';
      progress.style.width = pct + '%';
    }
  }

  // Initialize to first step
  setPipeline(0);

  nodes.forEach((node, index) => {
    node.addEventListener('mouseenter', () => {
      setPipeline(index);
    });
    // For mobile touch
    node.addEventListener('click', () => {
      setPipeline(index);
    });
  });

  // Handle resize to fix progress bar direction
  window.addEventListener('resize', () => {
    let activeIdx = 0;
    nodes.forEach((n, i) => { if (n.classList.contains('lit')) activeIdx = i; });
    setPipeline(activeIdx);
  });
})();


/* =========================================================
   PREMIUM REDESIGN SCRIPTS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Industries Sticky Showcase Logic
  const indBtns = document.querySelectorAll('#industries .ind-tab');
  const indPanels = document.querySelectorAll('#industries .ind-panel');

  if(indBtns.length > 0 && indPanels.length > 0) {
    indBtns.forEach(btn => {
      // Switch on click and hover for a more premium fluid feel
      btn.addEventListener('click', () => switchIndustry(btn));
      btn.addEventListener('mouseenter', () => switchIndustry(btn));
    });

    function switchIndustry(activeBtn) {
      const targetInd = activeBtn.getAttribute('data-ind');
      
      // Update buttons
      indBtns.forEach(b => b.classList.remove('active'));
      activeBtn.classList.add('active');

      // Update panels
      indPanels.forEach(p => {
        if(p.id === 'panel-' + targetInd) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }
  }

  // 2. Process Vertical Timeline Logic
  const procWrap = document.querySelector('.p-proc-wrap');
  const procLineFill = document.getElementById('proc-line-fill');
  const procSteps = document.querySelectorAll('.p-proc-step');

  if(procWrap && procLineFill && procSteps.length > 0) {
    // Handle Scroll for the Neon Line
    window.addEventListener('scroll', () => {
      const wrapRect = procWrap.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline we have scrolled past
      // Start filling when the top of the timeline hits the middle of the screen
      let fillPercentage = 0;
      
      const startPoint = wrapRect.top - (windowHeight / 2);
      const totalHeight = wrapRect.height;
      
      if(startPoint < 0) {
        fillPercentage = Math.min(100, Math.max(0, (Math.abs(startPoint) / totalHeight) * 100));
      }
      
      procLineFill.style.height = fillPercentage + '%';
    });

    // Handle IntersectionObserver for fading in the cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px"
    });

    procSteps.forEach(step => {
      observer.observe(step);
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const portBtns = document.querySelectorAll('.port-tab');
  const portPanels = document.querySelectorAll('.p-port-panel');

  if(portBtns.length > 0 && portPanels.length > 0) {
    portBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-port');
        
        portBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        portPanels.forEach(p => {
          if(p.id === 'port-panel-' + target) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    });
  }

  // Portfolio Arrows Logic
  const portPanelsArrow = document.querySelectorAll('.p-port-panel');
  portPanelsArrow.forEach(panel => {
    const scrollBox = panel.querySelector('.p-port-scroll');
    if(!scrollBox) return;

    // Create Prev Button
    const prevBtn = document.createElement('div');
    prevBtn.className = 'p-port-arrow prev';
    prevBtn.innerHTML = '&#10094;'; // Left chevron
    
    // Create Next Button
    const nextBtn = document.createElement('div');
    nextBtn.className = 'p-port-arrow next';
    nextBtn.innerHTML = '&#10095;'; // Right chevron

    panel.appendChild(prevBtn);
    panel.appendChild(nextBtn);

    // Scroll Logic
    prevBtn.addEventListener('click', () => {
      const cardWidth = scrollBox.querySelector('.o-cs-card').offsetWidth + 40;
      scrollBox.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      const cardWidth = scrollBox.querySelector('.o-cs-card').offsetWidth + 40;
      scrollBox.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  });
});

  // Pricing Tab Logic
  const priceBtns = document.querySelectorAll('.price-tab');
  const pricePanels = document.querySelectorAll('.price-panel');

  if (priceBtns.length > 0 && pricePanels.length > 0) {
    priceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-price');
        
        // Remove active class from all buttons and panels
        priceBtns.forEach(b => b.classList.remove('active'));
        pricePanels.forEach(p => p.classList.remove('active'));
        
        // Add active to clicked button and target panel
        btn.classList.add('active');
        const targetPanel = document.getElementById('price-' + target);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

// ────────────────────────────────────────────────────
// 15. CONTACT FORM & INTERACTIVE CHIPS LOGIC
// ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.form-chip');
  const serviceInput = document.getElementById('selected-service-input');
  
  if (chips.length > 0 && serviceInput) {
    const selectedServices = new Set();
    
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const val = chip.getAttribute('data-value');
        if (selectedServices.has(val)) {
          selectedServices.delete(val);
          chip.classList.remove('active');
        } else {
          selectedServices.add(val);
          chip.classList.add('active');
        }
        
        // Update hidden input
        serviceInput.value = Array.from(selectedServices).join(',');
        
        // Remove validation warning if at least one selected
        if (selectedServices.size > 0) {
          serviceInput.setCustomValidity('');
        }
      });
    });
  }
});

// Global functions for Form Submission (called from onsubmit in HTML)
function handleFormSubmit(event) {
  event.preventDefault();
  
  const nameVal = document.getElementById('form-name').value.trim();
  const phoneVal = document.getElementById('form-phone').value.trim();
  const serviceInput = document.getElementById('selected-service-input');
  const messageVal = document.getElementById('form-message').value.trim();
  
  // Custom validation check for chips
  if (!serviceInput.value) {
    serviceInput.setCustomValidity('Please select at least one service.');
    serviceInput.reportValidity();
    
    // Shake chips container to draw attention
    const chipsContainer = document.querySelector('.form-chips');
    if (chipsContainer) {
      chipsContainer.style.animation = 'none';
      setTimeout(() => {
        chipsContainer.style.animation = 'shakeChips 0.5s ease-in-out';
      }, 10);
    }
    return;
  }
  
  // Add keyframe for shaking chips if not already present
  if (!document.getElementById('shake-chips-keyframes')) {
    const style = document.createElement('style');
    style.id = 'shake-chips-keyframes';
    style.innerHTML = '\n      @keyframes shakeChips {\n        0%, 100% { transform: translateX(0); }\n        20%, 60% { transform: translateX(-6px); }\n        40%, 80% { transform: translateX(6px); }\n      }\n    ';
    document.head.appendChild(style);
  }

  // Display visual success toast
  const toast = document.getElementById('form-success-toast');
  if (toast) {
    toast.classList.add('active');
  }
  
  console.log('Form Submitted successfully:', {
    name: nameVal,
    phone: phoneVal,
    services: serviceInput.value,
    message: messageVal
  });
}

function closeSuccessToast() {
  const toast = document.getElementById('form-success-toast');
  const form = document.getElementById('contact-form');
  
  if (toast) {
    toast.classList.remove('active');
  }
  
  if (form) {
    form.reset();
    // Reset active states of service chips
    document.querySelectorAll('.form-chip').forEach(chip => {
      chip.classList.remove('active');
    });
    const serviceInput = document.getElementById('selected-service-input');
    if (serviceInput) serviceInput.value = '';
  }
}
