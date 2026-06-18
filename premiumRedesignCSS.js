const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const premiumCSS = `
/* =========================================================
   PREMIUM REDESIGN: INDUSTRIES STICKY LAYOUT
   ========================================================= */

.p-ind-wrap {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  margin-top: 40px;
}

/* Left Menu */
.p-ind-menu {
  flex: 0 0 350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 120px;
}

.p-ind-btn {
  background: rgba(20, 24, 40, 0.5);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 20px 24px;
  color: #cbd5e1;
  font-family: 'Syne', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  gap: 16px;
}

.ind-icon {
  font-size: 24px;
  filter: grayscale(1);
  opacity: 0.5;
  transition: all 0.4s ease;
}

.p-ind-btn:hover {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateX(10px);
}

.p-ind-btn.active {
  background: linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(37, 211, 102, 0.1) 100%);
  border-color: rgba(139, 92, 246, 0.6);
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
}

.p-ind-btn.active .ind-icon {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.2);
}

/* Right Showcase */
.p-ind-showcase {
  flex: 1;
  position: relative;
  min-height: 600px;
}

.p-ind-panel {
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(160deg, rgba(15, 21, 38, 0.8) 0%, rgba(8, 11, 20, 0.9) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 24px;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.95);
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  overflow: hidden;
}

.p-ind-panel.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
  position: relative;
}

/* Panel Content Area */
.p-panel-content {
  padding: 50px;
  position: relative;
  z-index: 2;
}

.p-panel-content h3 {
  font-family: 'Syne', sans-serif;
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(90deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.p-panel-content p {
  font-size: 18px;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 80%;
}

.p-deliverables {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 30px;
}

.p-deliverables h4 {
  color: #94a3b8;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.p-deliverables ul {
  list-style: none;
  padding: 0; margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.p-deliverables li {
  color: #e2e8f0;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.p-deliverables .d-check {
  color: #25D366;
  text-shadow: 0 0 10px rgba(37, 211, 102, 0.5);
}

/* CSS Graphics area */
.p-panel-graphic {
  position: absolute;
  top: 0; right: 0; bottom: 0;
  width: 50%;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}

/* Real Estate Graphic Elements */
.graphic-real-estate .g-re-1 {
  position: absolute; top: 10%; right: 10%; width: 150px; height: 300px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(37, 211, 102, 0.1));
  border-radius: 20px; transform: rotate(15deg); filter: blur(5px);
}
.graphic-real-estate .g-re-2 {
  position: absolute; top: 30%; right: 30%; width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%);
}

/* Restaurants Graphic Elements */
.graphic-restaurants .g-food-1 {
  position: absolute; top: 20%; right: 20%; width: 250px; height: 250px;
  border-radius: 50%; background: conic-gradient(from 0deg, rgba(255, 152, 0, 0.4), rgba(255, 87, 34, 0.1), rgba(255, 152, 0, 0.4));
  animation: spin 10s linear infinite; filter: blur(10px);
}

/* Clinics Graphic Elements */
.graphic-clinics .g-health-1 {
  position: absolute; top: 30%; right: 20%; width: 200px; height: 60px;
  background: rgba(33, 150, 243, 0.4); border-radius: 30px; transform: rotate(45deg); filter: blur(8px);
}
.graphic-clinics .g-health-2 {
  position: absolute; top: 30%; right: 20%; width: 200px; height: 60px;
  background: rgba(33, 150, 243, 0.4); border-radius: 30px; transform: rotate(-45deg); filter: blur(8px);
}

/* Ecommerce Graphic Elements */
.graphic-ecommerce .g-ecom-1 {
  position: absolute; top: 20%; right: 10%; width: 200px; height: 200px;
  background: linear-gradient(45deg, rgba(233, 30, 99, 0.4), rgba(156, 39, 176, 0.1));
  border-radius: 30px; transform: rotate(45deg); animation: float 6s ease-in-out infinite; filter: blur(5px);
}

/* Manufacturing Graphic Elements */
.graphic-manufacturing .g-mfg-1 {
  position: absolute; top: 20%; right: 20%; width: 150px; height: 150px;
  background: transparent; border: 20px dashed rgba(255, 235, 59, 0.3); border-radius: 50%;
  animation: spin 15s linear infinite; filter: blur(4px);
}

@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes float { 50% { transform: translateY(-20px) rotate(45deg); } }


/* =========================================================
   PREMIUM REDESIGN: PROCESS VERTICAL TIMELINE
   ========================================================= */

.p-proc-wrap {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
}

/* Central glowing line */
.p-proc-line {
  position: absolute;
  top: 0; bottom: 0; left: 50%;
  transform: translateX(-50%);
  width: 4px;
  background: rgba(255,255,255,0.05);
  border-radius: 4px;
}

/* The neon fill line powered by JS scroll */
.p-proc-line-fill {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 0%; /* updated by js */
  background: linear-gradient(to bottom, #8b5cf6, #25D366);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(37, 211, 102, 0.6);
  transition: height 0.1s ease-out;
}

.p-proc-step {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-bottom: 80px;
  position: relative;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.p-proc-step.in-view {
  opacity: 1;
  transform: translateY(0);
}

.p-proc-step.step-left {
  justify-content: flex-end;
  padding-right: 60px;
}

.p-proc-step.step-right {
  margin-left: auto;
  justify-content: flex-start;
  padding-left: 60px;
}

/* The Card */
.p-proc-content {
  background: linear-gradient(145deg, rgba(20, 24, 40, 0.8) 0%, rgba(8, 11, 20, 0.95) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.p-proc-content:hover {
  transform: translateY(-5px);
  border-color: rgba(37, 211, 102, 0.5);
}

/* Number Badge */
.p-proc-num {
  font-family: 'Syne', sans-serif;
  font-size: 60px;
  font-weight: 900;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, transparent 100%);
  -webkit-text-stroke: 1px rgba(139, 92, 246, 0.8);
  color: transparent;
  position: absolute;
  top: -30px;
  left: 30px;
  line-height: 1;
}

.p-proc-content h3 {
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 16px;
}

.p-proc-content p {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 24px;
}

.p-proc-meta {
  display: inline-block;
  background: rgba(37, 211, 102, 0.1);
  color: #25D366;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(37, 211, 102, 0.3);
}

/* Connector Dots */
.p-proc-step::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #080B14;
  border: 4px solid #8b5cf6;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
  transition: all 0.3s ease;
}

.p-proc-step.in-view::before {
  border-color: #25D366;
  box-shadow: 0 0 20px rgba(37, 211, 102, 0.8);
}

.step-left::before { right: -12px; }
.step-right::before { left: -12px; }

/* Responsive Overrides */
@media (max-width: 900px) {
  .p-ind-wrap { flex-direction: column; }
  .p-ind-menu { position: static; flex: none; width: 100%; flex-direction: row; overflow-x: auto; padding-bottom: 20px; }
  .p-ind-btn { flex: 0 0 auto; white-space: nowrap; }
  .p-panel-content { padding: 30px; }
  .p-panel-content p { max-width: 100%; }
  .p-deliverables ul { grid-template-columns: 1fr; }
  
  .p-proc-line { left: 30px; }
  .p-proc-step { width: 100%; justify-content: flex-start; padding-left: 80px !important; padding-right: 0 !important; }
  .step-left::before, .step-right::before { left: 18px; right: auto; }
}
`;

css += premiumCSS;
fs.writeFileSync('style.css', css);
console.log("Updated style.css with premium redesign");
