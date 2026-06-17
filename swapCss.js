const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const heroCssStartStr = '/* ══════════════════════════════\n   HERO — Redesigned';
const heroCssEndStr = '/* ══════════════════════════════\n   SERVICES SECTION';

const startIndex = css.indexOf(heroCssStartStr);
const endIndex = css.indexOf(heroCssEndStr);

if (startIndex !== -1 && endIndex !== -1) {
  const newHeroCss = `/* ══════════════════════════════
   HERO — Redesigned
══════════════════════════════ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 5% 40px;
  overflow: hidden;
  background-color: var(--dark);
}

/* ── Background Elements ── */
.hero-orbs {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
}
.orb {
  position: absolute; border-radius: 50%;
  filter: blur(150px);
  animation: orbPulse 8s infinite alternate ease-in-out;
}
.orb-1 {
  width: 600px; height: 600px;
  background: var(--cyan);
  opacity: 0.15;
  top: -100px; left: -100px;
}
.orb-2 {
  width: 500px; height: 500px;
  background: var(--purple);
  opacity: 0.12;
  bottom: -100px; right: -50px;
}

@keyframes orbPulse {
  from { transform: scale(1); }
  to { transform: scale(1.2); }
}

.hero-grid-lines {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: 
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}

#hero-particles {
  position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;
}

/* ── Layout Container ── */
.hero-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
  gap: 2rem;
}

/* ── Left Column: Text ── */
.hero-content-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-content-left > * {
  opacity: 0;
  animation: fadeUp 0.7s ease forwards;
}

/* Element 1: Badge */
.h-badge {
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(0,212,255,0.3);
  border-radius: 50px;
  padding: 8px 20px;
  margin-bottom: 2rem;
  animation-delay: 0ms;
}
.h-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #00ff88;
  box-shadow: 0 0 8px #00ff88;
  animation: pulseDot 1.5s infinite alternate;
}
@keyframes pulseDot {
  from { opacity: 1; }
  to { opacity: 0.3; }
}
.h-badge span:last-child {
  font-family: var(--font-mono);
  font-size: 0.75rem; letter-spacing: 0.1em;
  color: var(--text-2); font-weight: 600;
}

/* Element 2: Headline */
.h-heading {
  font-family: var(--font-display);
  font-size: clamp(48px, 5vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 1.5rem;
  animation-delay: 150ms;
}
.h-line-1, .h-line-3 { display: block; }
.h-rotator-wrap {
  display: block;
  height: clamp(52px, 5.5vw, 80px);
  overflow: hidden;
  position: relative;
}
.h-rotator-text {
  display: inline-block;
  background: linear-gradient(135deg, #00d4ff, #7b2fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: absolute;
  top: 0; left: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.h-rotator-text.slide-up-out {
  transform: translateY(-30px); opacity: 0;
}
.h-rotator-text.slide-down-in {
  transform: translateY(30px); opacity: 0;
}

/* Element 3: Subtext */
.h-sub {
  color: rgba(255,255,255,0.65);
  font-size: 18px;
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 2.5rem;
  animation-delay: 300ms;
}

/* Element 4: CTAs */
.h-ctas {
  display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;
  margin-bottom: 3.5rem;
  animation-delay: 450ms;
}
.h-btn-primary {
  background: linear-gradient(135deg, #00d4ff, #7b2fff);
  color: white; font-family: var(--font-ui); font-weight: 700;
  padding: 16px 32px; border-radius: 8px; text-decoration: none;
  animation: glowPulse 2s infinite alternate;
  transition: transform 0.3s ease, filter 0.3s ease;
}
.h-btn-primary:hover {
  filter: brightness(1.15); transform: scale(1.03);
}
@keyframes glowPulse {
  from { box-shadow: 0 0 20px rgba(0,212,255,0.4); }
  to { box-shadow: 0 0 35px rgba(123,47,255,0.6); }
}
.h-btn-secondary {
  background: transparent;
  border: 2px solid rgba(0,212,255,0.5);
  color: #00d4ff; font-family: var(--font-ui); font-weight: 700;
  padding: 14px 30px; border-radius: 8px; text-decoration: none;
  transition: all 0.3s ease;
}
.h-btn-secondary:hover {
  background: rgba(0,212,255,0.1);
  border-color: #00d4ff;
  transform: scale(1.03);
}

/* Element 5: Trust Bar */
.h-trust {
  width: 100%; max-width: 600px;
  margin-bottom: 1.5rem;
  animation-delay: 600ms;
  overflow: hidden;
}
.h-trust-label {
  display: block; font-family: var(--font-mono); font-size: 11px;
  color: rgba(255,255,255,0.35); letter-spacing: 2px;
  margin-bottom: 1rem; text-transform: uppercase;
}
.h-trust-slider {
  width: 100%; overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.h-trust-track {
  display: flex; width: max-content;
  animation: scrollLeft 25s linear infinite;
}
.h-trust-track:hover { animation-play-state: paused; }
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.h-trust-items { display: flex; gap: 1rem; padding-right: 1rem; }
.h-trust-items span {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 6px 16px;
  font-family: var(--font-ui); font-size: 12px;
  color: rgba(255,255,255,0.6);
  white-space: nowrap;
}

/* Element 6: Social Proof */
.h-social-proof {
  font-size: 13px; color: rgba(255,255,255,0.45);
  display: flex; gap: 0.8rem; flex-wrap: wrap;
  animation-delay: 750ms;
}

/* ── Right Column: Robot + Cards ── */
.hero-visual-right {
  position: relative;
  width: 100%;
  height: 600px;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 400ms;
}

.global-robot-wrap {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  z-index: 1; pointer-events: auto;
  animation: robotFloat 3s ease-in-out infinite;
}

spline-viewer { width: 100%; height: 100%; }

@keyframes robotFloat {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0px); }
}

/* Floating UI Cards */
.h-card {
  position: absolute; z-index: 2;
  background: rgba(10,10,20,0.8);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 14px; padding: 14px 18px;
  min-width: 180px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.1);
  opacity: 0; animation: floatCard forwards;
}
.card-1 {
  top: 10%; left: -5%;
  border: 1px solid rgba(0,212,255,0.2);
  transform: rotate(-6deg);
  animation-name: floatCard1; animation-duration: 2.5s; animation-delay: 1000ms;
}
.card-2 {
  top: 45%; right: -10%;
  border: 1px solid rgba(123,47,255,0.3);
  transform: rotate(5deg);
  animation-name: floatCard2; animation-duration: 3s; animation-delay: 1200ms;
}
.card-3 {
  bottom: 15%; left: 0;
  border: 1px solid rgba(0,255,136,0.2);
  transform: rotate(-3deg);
  animation-name: floatCard3; animation-duration: 3.5s; animation-delay: 1400ms;
}

@keyframes floatCard1 {
  0% { opacity: 0; transform: translateY(20px) rotate(-6deg); }
  10% { opacity: 1; transform: translateY(0) rotate(-6deg); }
  55% { opacity: 1; transform: translateY(-10px) rotate(-6deg); }
  100% { opacity: 1; transform: translateY(0) rotate(-6deg); }
}
@keyframes floatCard2 {
  0% { opacity: 0; transform: translateY(20px) rotate(5deg); }
  10% { opacity: 1; transform: translateY(0) rotate(5deg); }
  55% { opacity: 1; transform: translateY(-12px) rotate(5deg); }
  100% { opacity: 1; transform: translateY(0) rotate(5deg); }
}
@keyframes floatCard3 {
  0% { opacity: 0; transform: translateY(20px) rotate(-3deg); }
  10% { opacity: 1; transform: translateY(0) rotate(-3deg); }
  55% { opacity: 1; transform: translateY(-8px) rotate(-3deg); }
  100% { opacity: 1; transform: translateY(0) rotate(-3deg); }
}

.card-title { font-family: var(--font-ui); font-size: 13px; color: white; font-weight: 600; margin-bottom: 4px; }
.card-desc { font-size: 11px; color: var(--text-2); display: flex; align-items: center; gap: 6px; margin-bottom: 2px;}
.card-dot.green { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; box-shadow: 0 0 6px #00ff88; animation: pulseDot 1.5s infinite; }
.card-meta { font-size: 10px; color: var(--text-3); margin-top: 4px; }

/* ── Scroll Indicator ── */
.scroll-indicator {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
  font-family: var(--font-ui); font-size: 0.7rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: rgba(255,255,255,0.35); z-index: 10;
  text-decoration: none;
}
.scroll-arrow {
  animation: bounceArrow 1.5s ease-in-out infinite; color: rgba(255,255,255,0.35);
}
@keyframes bounceArrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

`;
  css = css.substring(0, startIndex) + newHeroCss + css.substring(endIndex);
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Hero CSS successfully completely replaced.');
} else {
  console.log('Could not find start/end markers for CSS replacement.');
}
