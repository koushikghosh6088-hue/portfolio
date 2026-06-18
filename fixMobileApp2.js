const fs = require('fs');

// --- 1. Fix replaceHTML.js ---
let htmlJs = fs.readFileSync('replaceHTML.js', 'utf8');

const startTag = '<!-- CARD 4: Mobile App -->';
const endTag = '<!-- CARD 5: Business Management Software -->';

const s1 = htmlJs.indexOf(startTag);
const s2 = htmlJs.indexOf(endTag);

if (s1 !== -1 && s2 !== -1) {
    const newCard4 = `<!-- CARD 4: Mobile App -->
        <div class="s-card" id="s-card-4">
          <div class="s-card-top">
            <div class="s-icon-badge">📱</div>
          </div>
          <h3 class="s-title">Mobile App Development</h3>
          <p class="s-desc">Beautiful, high-performance mobile apps for iOS and Android. From concept to App Store — we handle everything end to end.</p>
          <ul class="s-features">
            <li><span class="s-check">✦</span> Flutter & React Native</li>
            <li><span class="s-check">✦</span> iOS & Android deployment</li>
            <li><span class="s-check">✦</span> Push notifications & offline mode</li>
            <li><span class="s-check">✦</span> App Store optimization</li>
          </ul>
          <div class="s-ideal">Ideal for: Logistics, Food Delivery, Healthcare, Retail</div>
          
          <!-- Mockup -->
          <div class="s-mockup-container">
            <div class="mock-iphone">
              <div class="mi-island"></div>
              <div class="mi-screen">
                <div class="mi-header">
                  <div class="mi-nav">
                    <span class="mi-icon"></span>
                    <div class="mi-title">Discover Apps</div>
                    <div class="mi-profile"></div>
                  </div>
                  <div class="mi-search">Search...</div>
                </div>
                <div class="mi-scroll">
                  <div class="mi-card"><div class="mi-img img1"></div><div class="mi-txt-wrap"><div class="mi-t1"></div><div class="mi-t2"></div></div><div class="mi-btn"></div></div>
                  <div class="mi-card"><div class="mi-img img2"></div><div class="mi-txt-wrap"><div class="mi-t1"></div><div class="mi-t2"></div></div><div class="mi-btn"></div></div>
                  <div class="mi-card"><div class="mi-img img3"></div><div class="mi-txt-wrap"><div class="mi-t1"></div><div class="mi-t2"></div></div><div class="mi-btn"></div></div>
                  <div class="mi-card"><div class="mi-img img1"></div><div class="mi-txt-wrap"><div class="mi-t1"></div><div class="mi-t2"></div></div><div class="mi-btn"></div></div>
                </div>
              </div>
            </div>
            <div class="mock-glow-orb orb-blue"></div>
          </div>

          <a href="#contact" class="s-cta-btn">Build Your App →</a>
        </div>\n\n        `;
        
    htmlJs = htmlJs.substring(0, s1) + newCard4 + htmlJs.substring(s2);
}

// Restrict the tilt script to only #s-card-4
htmlJs = htmlJs.replace(
    /document\.querySelectorAll\('\.s-card'\)/g,
    "document.querySelectorAll('#s-card-4')"
);
// And change the target selector inside the script
htmlJs = htmlJs.replace(
    /\.mock-phone-glass, \.mock-browser, \.mock-chat, \.mock-wa, \.mock-phone, \.mock-dash, \.mock-pipe/g,
    ".mock-iphone"
);

fs.writeFileSync('replaceHTML.js', htmlJs);


// --- 2. Fix style.css ---
let css = fs.readFileSync('style.css', 'utf8');

const startPhoneCSS = '/* 4. Phone Mockup';
const endPhoneCSS = '/* 5. Dashboard Mockup */';

const startIndex = css.indexOf(startPhoneCSS);
const endIndex = css.indexOf(endPhoneCSS);

if (startIndex !== -1 && endIndex !== -1) {
    const newPhoneCSS = `/* 4. Phone Mockup - Realistic iPhone frame with scrolling feed */
.mock-iphone {
  width: 120px; height: 240px;
  background: #000;
  border: 6px solid #222;
  border-radius: 30px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 2px #444;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease;
  transform: translateY(0);
}
.s-card:hover .mock-iphone { box-shadow: 0 30px 50px rgba(0,212,255,0.4); border-color: #333;}

.mi-island {
  position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
  width: 35px; height: 10px; background: #000; border-radius: 10px; z-index: 10;
}
.mi-screen {
  background: #f4f5f7; width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden; position: relative; border-radius: 24px;
}
.mi-header { background: white; padding: 22px 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); z-index: 5;}
.mi-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;}
.mi-icon { width: 12px; height: 12px; border-radius: 3px; background: linear-gradient(135deg, var(--cyan), var(--purple));}
.mi-title { font-size: 10px; font-weight: 800; color: #111;}
.mi-profile { width: 14px; height: 14px; border-radius: 50%; background: #ccc;}
.mi-search { width: 100%; height: 16px; background: #f0f0f0; border-radius: 8px; display: flex; align-items: center; padding: 0 6px; font-size: 6px; color: #888;}

.mi-scroll {
  padding: 10px; display: flex; flex-direction: column; gap: 10px;
  animation: appScroll 8s infinite linear;
}
@keyframes appScroll { 0% { transform: translateY(0); } 100% { transform: translateY(-160px); } }

.mi-card { background: white; border-radius: 8px; padding: 6px; display: flex; flex-direction: column; gap: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05);}
.mi-img { width: 100%; height: 40px; border-radius: 4px; background: #eee;}
.img1 { background: linear-gradient(135deg, #ff9a9e, #fecfef); }
.img2 { background: linear-gradient(135deg, #a18cd1, #fbc2eb); }
.img3 { background: linear-gradient(135deg, #84fab0, #8fd3f4); }
.mi-txt-wrap { display: flex; flex-direction: column; gap: 3px;}
.mi-t1 { width: 70%; height: 4px; background: #ddd; border-radius: 2px;}
.mi-t2 { width: 40%; height: 3px; background: #eee; border-radius: 2px;}
.mi-btn { width: 100%; height: 12px; background: var(--purple); border-radius: 4px; align-self: flex-end;}

`;
    const updatedCSS = css.substring(0, startIndex) + newPhoneCSS + css.substring(endIndex);
    fs.writeFileSync('style.css', updatedCSS);
    console.log("Updated style.css");
} else {
    console.log("Could not find CSS boundaries.");
}
