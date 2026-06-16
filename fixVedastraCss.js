const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf-8');

// 1. We need to revert the .global-robot-wrap height and the .hero-content glass card on mobile.
// I'll replace the entire block I added earlier.
const oldMobileHero = \@media (max-width: 900px) {
  .hero { padding-top: 0; text-align: center; overflow-x: hidden; justify-content: flex-start; min-height: 100vh; }
  .global-robot-wrap { 
    height: 45vh; top: 0; bottom: auto; 
    align-items: center; 
    justify-content: center;
    animation: none !important; 
    opacity: 1 !important; 
    transform: translateX(0) scale(1.15) !important; /* Properly aligned in the middle */
    z-index: 0;
  }\;

const newMobileHero = \@media (max-width: 900px) {
  .hero { padding-top: 0; text-align: center; overflow-x: hidden; justify-content: flex-start; min-height: 100vh; position: relative; }
  .global-robot-wrap { 
    height: 100vh; top: 0; bottom: auto; 
    align-items: flex-start; 
    justify-content: center;
    animation: none !important; 
    opacity: 1 !important; 
    transform: translateX(0) scale(1.0) !important; 
    z-index: 0;
  }\;

css = css.replace(oldMobileHero, newMobileHero);

const oldHeroContent = \.hero-content { 
    width: 100%; max-width: 100%; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 5; text-align: center;
    margin-top: 45vh; /* Pushes content strictly below the robot */
    background: rgba(8, 15, 31, 0.6);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-top: 1px solid rgba(0, 212, 255, 0.4);
    border-radius: 40px 40px 0 0;
    padding: 3rem 1.5rem 2rem;
    box-shadow: 0 -15px 50px rgba(0, 212, 255, 0.15);
  }\;

const newHeroContent = \.hero-content { 
    width: 100%; max-width: 100%; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 5; text-align: center;
    margin-top: 0;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border: none;
    border-radius: 0;
    padding: 38vh 1.5rem 5rem; /* Pushes text down to overlap robot waist exactly like Vedastra */
    box-shadow: none;
  }\;

css = css.replace(oldHeroContent, newHeroContent);

// 2. Add the Vedastra Styles
const vedastraCSS = \

/* ------------------------------
   VEDASTRA STYLE OVERRIDES
------------------------------ */
.vedastra-style {
  font-family: var(--font-body);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v-pill {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid #0d4b9f;
  background: rgba(13, 75, 159, 0.15);
  padding: 6px 12px;
  border-radius: 30px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(4px);
}
.v-pill span {
  font-family: var(--font-disp);
  font-size: 0.6rem;
  font-weight: 700;
  color: #1d7cf2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.v-dot {
  width: 6px; height: 6px; border-radius: 50%; background: #1d7cf2;
  box-shadow: 0 0 8px #1d7cf2;
}

.v-heading {
  font-family: var(--font-disp);
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}
.v-grow {
  color: #0066ff;
  font-style: italic;
  display: inline-block;
  padding-right: 4px;
}

.v-sub {
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.6;
  max-width: 320px;
  margin-bottom: 2rem;
}

.v-typing-text {
  font-family: var(--font-disp);
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 800;
  color: #0066ff;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  letter-spacing: -0.02em;
}

.v-ctas {
  display: flex; flex-direction: column; align-items: center; gap: 1.5rem; width: 100%; max-width: 350px;
}

.v-btn-primary {
  width: 100%;
  background: #0066ff;
  color: white;
  border-radius: 50px;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: none;
  border: none;
  transition: transform 0.3s, background 0.3s;
}
.v-btn-primary:hover {
  background: #0052cc; transform: translateY(-2px);
}

.v-see-work {
  color: #6b7280;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-bottom: 1px solid #374151;
  padding-bottom: 3px;
  text-decoration: none;
  transition: color 0.3s, border-color 0.3s;
}
.v-see-work:hover {
  color: white; border-color: white;
}

/* Floating Chat Button */
.v-chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #0066ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 102, 255, 0.4);
  z-index: 10000;
  cursor: pointer;
  transition: transform 0.3s;
}
.v-chat-widget:hover {
  transform: scale(1.1);
}
@media (max-width: 900px) {
  .v-chat-widget { bottom: 90px; } /* Above mobile nav */
}
\;

fs.writeFileSync('style.css', css + vedastraCSS);
console.log('CSS updated');
