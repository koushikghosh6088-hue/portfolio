const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const startCSS = '/* 4. Phone Mockup - Realistic iPhone frame with scrolling feed */';
const endCSS = '/* 5. Dashboard Mockup */';

const s1 = css.indexOf(startCSS);
const s2 = css.indexOf(endCSS);

if (s1 !== -1 && s2 !== -1) {
    const newCSS = `/* 4. Phone Mockup - Realistic iPhone frame with scrolling feed */
.mock-iphone {
  width: 95px; height: 185px;
  background: #000;
  border: 4px solid #222;
  border-radius: 24px;
  position: relative;
  box-shadow: 0 15px 30px rgba(0,0,0,0.5), inset 0 0 0 2px #444;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease;
  transform: translateY(0);
}
.s-card:hover .mock-iphone { box-shadow: 0 20px 40px rgba(0,212,255,0.4); border-color: #333;}

.mi-island {
  position: absolute; top: 4px; left: 50%; transform: translateX(-50%);
  width: 28px; height: 8px; background: #000; border-radius: 6px; z-index: 10;
}
.mi-screen {
  background: #f4f5f7; width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden; position: relative; border-radius: 18px;
}
.mi-header { background: white; padding: 18px 8px 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); z-index: 5;}
.mi-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;}
.mi-icon { width: 10px; height: 10px; border-radius: 3px; background: linear-gradient(135deg, var(--cyan), var(--purple));}
.mi-title { font-size: 8px; font-weight: 800; color: #111;}
.mi-profile { width: 12px; height: 12px; border-radius: 50%; background: #ccc;}
.mi-search { width: 100%; height: 12px; background: #f0f0f0; border-radius: 6px; display: flex; align-items: center; padding: 0 5px; font-size: 5px; color: #888;}

.mi-scroll {
  padding: 8px; display: flex; flex-direction: column; gap: 8px;
  animation: appScroll 8s infinite linear;
}
@keyframes appScroll { 0% { transform: translateY(0); } 100% { transform: translateY(-130px); } }

.mi-card { background: white; border-radius: 6px; padding: 5px; display: flex; flex-direction: column; gap: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05);}
.mi-img { width: 100%; height: 30px; border-radius: 3px; background: #eee;}
.img1 { background: linear-gradient(135deg, #ff9a9e, #fecfef); }
.img2 { background: linear-gradient(135deg, #a18cd1, #fbc2eb); }
.img3 { background: linear-gradient(135deg, #84fab0, #8fd3f4); }
.mi-txt-wrap { display: flex; flex-direction: column; gap: 2px;}
.mi-t1 { width: 70%; height: 3px; background: #ddd; border-radius: 2px;}
.mi-t2 { width: 40%; height: 2px; background: #eee; border-radius: 1px;}
.mi-btn { width: 100%; height: 10px; background: var(--purple); border-radius: 3px; align-self: flex-end;}

`;
    css = css.substring(0, s1) + newCSS + css.substring(s2);
    fs.writeFileSync('style.css', css);
    console.log("Updated iPhone CSS dimensions in style.css");
} else {
    console.log("Error: could not find section.");
}
