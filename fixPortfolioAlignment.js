const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const alignedMobileFix = `
/* =========================================================
   PORTFOLIO MOBILE ALIGNMENT FIX
   ========================================================= */
@media (max-width: 900px) {
  /* Ensure the showcase container stays within the screen width */
  #portfolio .p-ind-showcase {
    overflow: hidden !important; /* CRITICAL: Prevent container from stretching horizontally */
    max-width: 100% !important;
    width: 100% !important;
    border-radius: 16px !important;
    margin-bottom: 40px !important;
  }

  /* Ensure the horizontal scroll only happens inside the scroll container */
  #portfolio .p-port-scroll {
    overflow-x: auto !important;
    overflow-y: hidden !important;
    display: flex !important;
    flex-direction: row !important;
    padding: 15px !important;
    gap: 15px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Make sure each card fits perfectly inside the screen */
  #portfolio .o-cs-card {
    flex: 0 0 calc(100vw - 70px) !important; /* Exactly 1 card width minus padding/margins */
    max-width: calc(100vw - 70px) !important;
    margin: 0 !important;
    scroll-snap-align: center !important;
    border-radius: 16px !important;
    display: flex !important;
    flex-direction: column !important; /* Mockup on top, text below */
  }

  /* Top half (Mockup) */
  #portfolio .o-cs-right {
    padding: 20px 10px 0 10px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
    box-sizing: border-box !important;
    min-height: 250px !important;
  }

  /* Scale down the mockups to fit the container */
  #portfolio .p-mock-wa, 
  #portfolio .p-mock-browser, 
  #portfolio .o-mock-dash, 
  #portfolio .o-mock-chat {
    transform: scale(0.7) !important; /* Scale down so it doesn't overflow */
    transform-origin: center center !important;
    margin: 0 auto !important;
    max-width: 100% !important;
  }

  /* Bottom half (Text Box) */
  #portfolio .o-cs-left {
    padding: 25px 20px !important;
    background: rgba(10, 14, 25, 0.95) !important;
    backdrop-filter: blur(20px) !important;
    border-top: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 0 0 16px 16px !important;
    margin-top: 0 !important; /* Remove overlap to prevent text cutoff */
    width: 100% !important;
    box-sizing: border-box !important;
    z-index: 2 !important;
  }
  
  /* Make text smaller to prevent vertical overflow */
  #portfolio .o-cs-left h3 {
    font-size: 20px !important;
    line-height: 1.2 !important;
    margin-bottom: 8px !important;
  }
  #portfolio .o-cs-desc {
    font-size: 13px !important;
    line-height: 1.4 !important;
    margin-bottom: 15px !important;
  }
  #portfolio .o-cs-res {
    font-size: 18px !important;
  }
  #portfolio .o-cs-res span {
    font-size: 11px !important;
  }
  #portfolio .o-cs-pills {
    flex-wrap: wrap !important;
    gap: 6px !important;
  }
  #portfolio .o-cs-pill {
    font-size: 10px !important;
    padding: 4px 8px !important;
  }
}
`;

css += alignedMobileFix;
fs.writeFileSync('style.css', css);
console.log("Applied aligned mobile portfolio fix CSS");
