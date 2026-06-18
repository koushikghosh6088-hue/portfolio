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
  const progress = document.getElementById('loader-progress');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 22;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    progress.style.width = pct + '%';
  }, 100);
  window.addEventListener('load', () => {
    setTimeout(() => { loader.classList.add('hidden'); }, 500);
  });
  setTimeout(() => loader.classList.add('hidden'), 2500);
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
  document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    dot.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    ring.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  }, { passive: true });
})();


// ────────────────────────────────────────────────────
// 4. NAVIGATION
// ────────────────────────────────────────────────────
(function initNav() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
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

// --- Particle Canvas ---
(function initParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  
  const mouse = { x: null, y: null, radius: 150 };
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.querySelector('.hero').offsetHeight || window.innerHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = 1.5;
      this.speedX = (Math.random() - 0.5) * 1;
      this.speedY = (Math.random() - 0.5) * 1;
    }
    update() {
      if (this.x > width || this.x < 0) this.speedX = -this.speedX;
      if (this.y > height || this.y < 0) this.speedY = -this.speedY;
      
      // Mouse interaction
      if (mouse.x != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 2;
          const directionY = forceDirectionY * force * 2;
          
          this.x -= directionX;
          this.y -= directionY;
        }
      }
      
      this.x += this.speedX;
      this.y += this.speedY;
    }
    draw() {
      ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance/120)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  init();
  animate();
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
  const indBtns = document.querySelectorAll('.p-ind-btn');
  const indPanels = document.querySelectorAll('.p-ind-panel');

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
  const portBtns = document.querySelectorAll('.p-port-btn');
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
});
