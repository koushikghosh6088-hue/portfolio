const fs = require('fs');

// --- 1. Fix replaceHTML.js ---
let htmlJs = fs.readFileSync('replaceHTML.js', 'utf8');

const oldPhoneHtml = `          <!-- Mockup -->
          <div class="s-mockup-container mock-3d-wrap">
            <div class="mock-phone-sys">
              <div class="mock-phone advanced redesigned">
                <div class="mp-frame">
                  <div class="mp-notch"></div>
                  <div class="mp-screen">
                    <div class="mp-app-header">
                      <div class="mp-h-logo"></div>
                      <div class="mp-h-profile"></div>
                    </div>
                    <div class="mp-card-stack">
                      <div class="mp-stack-card c1">
                        <div class="mp-c-title">Balance</div>
                        <div class="mp-c-val">₹1,45,000</div>
                      </div>
                      <div class="mp-stack-card c2"></div>
                      <div class="mp-stack-card c3"></div>
                    </div>
                    <div class="mp-bottom-cards">
                       <div class="mp-bc"><div class="mp-bc-icon c-cyan"></div><div class="mp-bc-line"></div></div>
                       <div class="mp-bc"><div class="mp-bc-icon c-purple"></div><div class="mp-bc-line"></div></div>
                    </div>
                  </div>
                </div>
                <!-- 3D floating layers projecting from the phone -->
                <div class="mp-3d-layer l1">
                  <div class="l-icon">🔔</div>
                  <div class="l-text">New Order #482</div>
                </div>
                <div class="mp-3d-layer l2">
                  <div class="l-icon">✅</div>
                  <div class="l-text">Payment Success</div>
                </div>
              </div>
            </div>
            <div class="mock-glow-orb orb-blue"></div>
          </div>`;

const newPhoneHtml = `          <!-- Mockup -->
          <div class="s-mockup-container">
            <div class="mock-phone-glass">
              <div class="mpg-glare"></div>
              <div class="mpg-notch"></div>
              <div class="mpg-screen">
                <div class="mpg-header">
                  <div class="mpg-avatar"></div>
                  <div class="mpg-info"><div class="mpg-name"></div><div class="mpg-sub"></div></div>
                  <div class="mpg-icon"></div>
                </div>
                
                <div class="mpg-chart-wrap">
                  <div class="mpg-ring">
                     <svg viewBox="0 0 36 36">
                       <defs>
                         <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                           <stop offset="0%" stop-color="#00d4ff" />
                           <stop offset="100%" stop-color="#7b2fff" />
                         </linearGradient>
                       </defs>
                       <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                       <path class="ring-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                     </svg>
                  </div>
                  <div class="mpg-chart-text">
                    <span class="mpg-lbl">Revenue</span>
                    <span class="mpg-val">₹4.8L</span>
                  </div>
                </div>

                <div class="mpg-transactions">
                  <div class="mpg-tx"><div class="tx-icon c-green"></div><div class="tx-line"></div><div class="tx-amt"></div></div>
                  <div class="mpg-tx"><div class="tx-icon c-purple"></div><div class="tx-line w-short"></div><div class="tx-amt"></div></div>
                  <div class="mpg-tx"><div class="tx-icon c-orange"></div><div class="tx-line w-mid"></div><div class="tx-amt"></div></div>
                </div>
                
                <!-- Floating Glass Card -->
                <div class="mpg-float-card">
                  <div class="fc-icon">🚀</div>
                  <div class="fc-col">
                    <div class="fc-t1">App Deployed</div>
                    <div class="fc-t2">iOS & Android</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mock-glow-orb orb-purple"></div>
            <div class="mock-glow-orb orb-cyan" style="top:auto;bottom:-30px;left:auto;right:-30px;transform:scale(0.8)"></div>
          </div>`;

htmlJs = htmlJs.replace(oldPhoneHtml, newPhoneHtml);
fs.writeFileSync('replaceHTML.js', htmlJs);


// --- 2. Fix style.css ---
let css = fs.readFileSync('style.css', 'utf8');

// Find the start and end of the phone mockup CSS.
// It starts with /* 4. Phone Mockup & 3D Environment (Redesigned out-of-bounds 3D) */
// and ends before /* 5. Dashboard Mockup */

const startPhoneCSS = '/* 4. Phone Mockup';
const endPhoneCSS = '/* 5. Dashboard Mockup */';

const startIndex = css.indexOf(startPhoneCSS);
const endIndex = css.indexOf(endPhoneCSS);

if (startIndex !== -1 && endIndex !== -1) {
    const newPhoneCSS = `/* 4. Phone Mockup - Sleek Glassmorphism */
.mock-phone-glass {
  width: 120px; height: 230px;
  background: rgba(20,20,25,0.6);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 15px 35px rgba(0,0,0,0.5), inset 0 0 0 4px #000, inset 0 0 0 5px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease, border-color 0.5s ease;
  transform: translateY(0);
}
.s-card:hover .mock-phone-glass { transform: translateY(-10px) scale(1.03); box-shadow: 0 25px 50px rgba(123,47,255,0.2), inset 0 0 0 4px #000, inset 0 0 0 5px rgba(123,47,255,0.3); border-color: rgba(123,47,255,0.5);}

.mpg-glare {
  position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent);
  transform: skewX(-20deg);
  animation: glareSweep 5s infinite;
  z-index: 10; pointer-events: none;
}
@keyframes glareSweep { 0%, 20% { left: -100%; } 40%, 100% { left: 200%; } }

.mpg-notch { position: absolute; top: 6px; left: 50%; transform: translateX(-50%); width: 40px; height: 12px; background: #000; border-radius: 6px; z-index: 5; box-shadow: inset 0 -1px 2px rgba(255,255,255,0.1);}
.mpg-screen { width: 100%; height: 100%; padding: 26px 10px 10px; display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 1;}

.mpg-header { display: flex; align-items: center; gap: 6px; animation: slideDownIn 1s ease-out forwards; opacity: 0;}
.mpg-avatar { width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(135deg, #00d4ff, #7b2fff); box-shadow: 0 0 10px rgba(0,212,255,0.4);}
.mpg-info { display: flex; flex-direction: column; gap: 3px; flex-grow: 1;}
.mpg-name { width: 80%; height: 4px; background: rgba(255,255,255,0.8); border-radius: 2px;}
.mpg-sub { width: 50%; height: 3px; background: rgba(255,255,255,0.3); border-radius: 2px;}
.mpg-icon { width: 14px; height: 14px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.2); display: flex; justify-content: center; align-items: center;}
.mpg-icon::after { content: ""; width: 4px; height: 4px; background: rgba(255,255,255,0.6); border-radius: 50%;}

.mpg-chart-wrap { position: relative; display: flex; justify-content: center; align-items: center; margin: 5px 0; animation: scaleUpIn 1s ease-out 0.3s forwards; opacity: 0; transform: scale(0.8);}
.mpg-ring { width: 75px; height: 75px; filter: drop-shadow(0 0 10px rgba(123,47,255,0.6));}
.ring-bg { fill: none; stroke: rgba(255,255,255,0.05); stroke-width: 3;}
.ring-fill { fill: none; stroke-width: 3; stroke-linecap: round; stroke: url(#ringGrad); animation: ringDraw 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards; stroke-dasharray: 0, 100;}
@keyframes ringDraw { to { stroke-dasharray: 75, 100; } }
.mpg-chart-text { position: absolute; display: flex; flex-direction: column; align-items: center; gap: 2px;}
.mpg-lbl { font-size: 6px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px;}
.mpg-val { font-size: 11px; font-weight: 800; color: white;}

.mpg-transactions { display: flex; flex-direction: column; gap: 8px;}
.mpg-tx { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); padding: 6px; border-radius: 8px; opacity: 0; animation: slideRightIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; border: 1px solid rgba(255,255,255,0.02);}
.mpg-tx:nth-child(1) { animation-delay: 0.8s; }
.mpg-tx:nth-child(2) { animation-delay: 1.0s; }
.mpg-tx:nth-child(3) { animation-delay: 1.2s; }
.tx-icon { width: 14px; height: 14px; border-radius: 4px; display: flex; justify-content: center; align-items: center;}
.c-green { background: rgba(0,255,136,0.2); border: 1px solid rgba(0,255,136,0.5); box-shadow: 0 0 5px rgba(0,255,136,0.3);}
.c-purple { background: rgba(123,47,255,0.2); border: 1px solid rgba(123,47,255,0.5); box-shadow: 0 0 5px rgba(123,47,255,0.3);}
.c-orange { background: rgba(255,170,0,0.2); border: 1px solid rgba(255,170,0,0.5); box-shadow: 0 0 5px rgba(255,170,0,0.3);}
.tx-line { height: 4px; background: rgba(255,255,255,0.4); border-radius: 2px; flex-grow: 1;}
.w-short { max-width: 40%; } .w-mid { max-width: 60%; }
.tx-amt { width: 15px; height: 4px; background: rgba(255,255,255,0.8); border-radius: 2px;}

.mpg-float-card {
  position: absolute;
  bottom: 10px; left: -15px; width: 140px;
  background: rgba(30,30,40,0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0,212,255,0.3);
  border-radius: 12px;
  padding: 8px 10px;
  display: flex; align-items: center; gap: 8px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.6);
  z-index: 20;
  opacity: 0;
  animation: floatCardSlideIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.8s forwards, floatCardBob 4s ease-in-out infinite 2.8s;
}
.fc-icon { font-size: 16px; text-shadow: 0 0 10px rgba(0,212,255,0.8);}
.fc-col { display: flex; flex-direction: column; gap: 2px;}
.fc-t1 { font-size: 9px; font-weight: 700; color: white;}
.fc-t2 { font-size: 7px; color: #00d4ff; font-weight: 600;}

@keyframes slideDownIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleUpIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
@keyframes slideRightIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; transform: translateX(0); } }
@keyframes floatCardSlideIn { from { opacity: 0; transform: translateY(20px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes floatCardBob { 0%, 100% { margin-top: 0; } 50% { margin-top: -8px; } }

`;
    const updatedCSS = css.substring(0, startIndex) + newPhoneCSS + css.substring(endIndex);
    fs.writeFileSync('style.css', updatedCSS);
    console.log("Updated style.css");
} else {
    console.log("Could not find CSS boundaries.");
}
