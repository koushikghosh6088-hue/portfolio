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

  // Instant snap without trailing animation (Fixes lag & removes animation)
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, { passive: true });
})();


// ────────────────────────────────────────────────────
// 4. NAVIGATION
// ────────────────────────────────────────────────────
(function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks?.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => { hamburger?.classList.remove('open'); navLinks.classList.remove('open'); });
  });

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link[data-section]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
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

  // ── DYNAMIC ROBOT SCROLL ANIMATIONS (Desktop Only) ──
  // The robot stays strictly in the newly created 40% empty right-lane,
  // preventing any overlap with text while smoothly transitioning scales/positions.
  const robotWrap = document.querySelector('.global-robot-wrap');
  if (robotWrap && window.innerWidth > 900) {
    
    // 1. Hero -> About: Robot shifts slightly and scales to fit About lane
    gsap.to(robotWrap, {
      yPercent: 8,
      scale: 1.0,
      opacity: 0.9,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1.5
      }
    });

    // 2. About -> Services: Robot floats up slightly and scales
    gsap.to(robotWrap, {
      yPercent: -2,
      scale: 1.1,
      opacity: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#services',
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1.5
      }
    });

    // 3. Services -> Demos: Robot centers and scales down
    gsap.to(robotWrap, {
      yPercent: 5,
      scale: 0.9,
      opacity: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#showcase',
        start: 'top bottom',
        end: 'top 30%',
        scrub: 1.5
      }
    });

    // 4. Fade out gently for Portfolio/Contact so it doesn't distract
    gsap.to(robotWrap, {
      opacity: 0.05,
      yPercent: 15,
      scale: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#portfolio',
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 1.5
      }
    });
  }

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
// 9. CHATBOT DEMO ANIMATION (Service section)
// ────────────────────────────────────────────────────
(function initChatDemo() {
  const msgs = document.querySelectorAll('#dc-messages .dc-msg');
  const typing = document.querySelector('.dc-typing');

  function animateChat() {
    msgs.forEach((m, i) => { if (i > 0) { m.classList.add('hidden'); } });
    if (typing) typing.style.display = 'none';

    let delay = 500;
    for (let i = 1; i < msgs.length; i++) {
      const msg = msgs[i];
      if (msg.classList.contains('bot') && typing) {
        setTimeout(() => { typing.style.display = 'flex'; }, delay);
        delay += 1100;
        const d = delay;
        setTimeout(() => { typing.style.display = 'none'; msg.classList.remove('hidden'); }, d);
        delay += 700;
      } else {
        const d = delay;
        setTimeout(() => { msg.classList.remove('hidden'); }, d);
        delay += 600;
      }
    }
    setTimeout(animateChat, delay + 3000);
  }

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateChat(); io.disconnect(); }
  }, { threshold: 0.3 });
  const c = document.getElementById('demo-chat-ui');
  if (c) io.observe(c);
})();


// ────────────────────────────────────────────────────
// 10. WHATSAPP DEMO ANIMATION
// ────────────────────────────────────────────────────
(function initWADemo() {
  const msgs = document.querySelectorAll('#wa-messages .wa-msg');
  function animate() {
    msgs.forEach((m, i) => { if (i > 0) { m.classList.add('hidden'); m.style.display = 'none'; } });
    let delay = 700;
    for (let i = 1; i < msgs.length; i++) {
      const m = msgs[i]; const d = delay;
      setTimeout(() => { m.style.display = ''; m.classList.remove('hidden'); }, d);
      delay += 900 + Math.random() * 300;
    }
    setTimeout(animate, delay + 3200);
  }
  const io = new IntersectionObserver(es => {
    if (es[0].isIntersecting) { animate(); io.disconnect(); }
  }, { threshold: 0.3 });
  const c = document.getElementById('demo-wa-ui');
  if (c) io.observe(c);
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
