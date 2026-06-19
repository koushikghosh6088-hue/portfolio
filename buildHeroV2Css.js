const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   HERO SECTION V2 (A/B TESTING)
   ========================================================= */

/* AMBIENT BACKGROUND LAYER (Behind the robot) */
.v2-ambient-drift {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150vw;
  height: 150vh;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(0, 212, 255, 0.1) 30%, transparent 60%);
  z-index: 0; /* Behind the robot wrapper */
  pointer-events: none;
  animation: ambientDrift 20s ease-in-out infinite alternate;
  opacity: 0.8;
}
@keyframes ambientDrift {
  0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
  100% { transform: translate(-45%, -55%) scale(1.1) rotate(5deg); }
}

/* LIVE STATUS MICRO-LINE */
.v2-live-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 6px 14px;
  border-radius: 30px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  margin-bottom: 25px;
  position: relative;
  z-index: 5;
}
.v2-status-dot-wrap {
  position: relative;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v2-status-dot {
  width: 6px;
  height: 6px;
  background-color: #00ff88;
  border-radius: 50%;
  z-index: 2;
}
.v2-status-pulse {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(0, 255, 136, 0.5);
  border-radius: 50%;
  z-index: 1;
  animation: statusPulse 1.5s ease-out infinite;
}
@keyframes statusPulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}
.v2-status-text {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.3px;
}

/* TYPEWRITER CYCLING TEXT */
.v2-typewriter-wrapper {
  margin: 10px auto 30px auto;
  height: 30px; /* Fixed height to prevent layout shifts */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
}
.v2-typewriter-text {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  color: #00d4ff; /* Cyan accent */
  font-weight: 500;
  transition: opacity 200ms ease-in-out;
  opacity: 1;
}
.v2-typewriter-text.fade-out {
  opacity: 0;
}

/* CONNECTION CHIPS (SVG Lines & Icons) */
.v2-chip {
  position: absolute;
  z-index: 1; /* Below the floating cards but above the background */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: rgba(10, 10, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 8px 12px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.v2-chip span {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.5px;
}
.v2-line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  pointer-events: none;
  z-index: -1;
  opacity: 0.2;
  animation: linePulse 3s ease-in-out infinite alternate;
}
@keyframes linePulse {
  0% { opacity: 0.2; }
  100% { opacity: 0.5; }
}

/* Positioning the chips around the robot */
.chip-gpt { top: 15%; left: -15%; }
.line-gpt { transform: translate(-0%, -0%); }

.chip-n8n { top: 70%; left: -10%; animation-delay: 0.5s; }
.line-n8n { transform: translate(0%, -100%); animation-delay: 0.5s; }

.chip-wa { top: 25%; right: -15%; animation-delay: 1s; }
.line-wa { transform: translate(-100%, 0%); animation-delay: 1s; }

@media (max-width: 900px) {
  .v2-typewriter-text { font-size: 16px; }
  .v2-chip { display: none; } /* Hide on mobile to prevent crowding */
  .v2-ambient-drift { animation: none; opacity: 0.1; } /* Lightweight mobile background */
}

/* PAUSE CLASSES FOR INTERSECTION OBSERVER */
.v2-ambient-drift.paused,
.v2-line.paused,
.v2-status-pulse.paused {
  animation-play-state: paused !important;
}

/* ACCESSIBILITY: REDUCED MOTION */
@media (prefers-reduced-motion: reduce) {
  .v2-ambient-drift { animation: none; }
  .v2-status-pulse { animation: none; display: none; }
  .v2-line { animation: none; }
  .v2-typewriter-text { transition: none; }
}
`;
fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log('Successfully appended Hero V2 CSS.');
