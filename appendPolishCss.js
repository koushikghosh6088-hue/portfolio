const fs = require('fs');

const cssPolish = `
/* ════════════════════════════════════════════════════════════
   PREMIUM PORTFOLIO POLISH & MOBILE FIX
   ════════════════════════════════════════════════════════════ */
/* Fix mobile collapsing */
@media (max-width: 900px) {
  .o-cs-left, .o-cs-right {
    flex: none !important;
    width: 100% !important;
  }
  .o-cs-right {
    padding: 20px !important;
  }
}

/* Premium Card Styling */
.o-cs-card {
  background: linear-gradient(145deg, #0f1526 0%, #080B14 100%) !important;
  border: 1px solid rgba(255,255,255,0.05) !important;
  border-left: 4px solid var(--o-teal) !important;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
}

/* Add an ambient glow behind the mockups */
.o-cs-right {
  position: relative;
  background: transparent !important;
  border-left: 1px solid rgba(255,255,255,0.05) !important;
  z-index: 1;
}
.o-cs-right::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 250px; height: 250px;
  background: radial-gradient(circle, rgba(0,245,196,0.15) 0%, rgba(0,0,0,0) 70%);
  z-index: -1;
  pointer-events: none;
}

/* Premium WhatsApp Mockup */
.p-mock-wa {
  width: 100%; max-width: 340px; margin: 0 auto;
  background: #E5DDD5;
  border-radius: 20px;
  border: 6px solid #111;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5), inset 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
}
.p-mock-wa-head {
  background: #075E54;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
}
.p-mock-wa-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: white;
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; color: #075E54; font-size: 16px;
}
.p-mock-wa-body {
  padding: 15px;
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M10 10c0-5 5-5 5-5s5 0 5 5-5 5-5 5-5 0-5-5z" fill="rgba(0,0,0,0.03)"/></svg>');
  display: flex; flex-direction: column; gap: 10px;
}
.p-msg-left {
  background: white; color: #333; padding: 10px 14px; border-radius: 0 12px 12px 12px;
  align-self: flex-start; max-width: 85%; font-size: 13px; font-weight: 500;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
.p-msg-right {
  background: #DCF8C6; color: #333; padding: 10px 14px; border-radius: 12px 0 12px 12px;
  align-self: flex-end; max-width: 85%; font-size: 13px; font-weight: 500;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
.p-wa-btn {
  background: white; color: #00a884; border: 1px solid #eee; text-align: center;
  padding: 10px; border-radius: 8px; font-weight: 700; cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-size: 14px;
}

/* Premium Dashboard / Browser Mockup */
.p-mock-browser {
  width: 100%;
  background: #111827;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 30px 60px rgba(0,0,0,0.6);
  overflow: hidden;
}
.p-browser-head {
  background: #1F2937;
  padding: 10px 15px;
  display: flex; align-items: center; gap: 6px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.p-dot { width: 10px; height: 10px; border-radius: 50%; }
.p-dot.r { background: #FF5F56; }
.p-dot.y { background: #FFBD2E; }
.p-dot.g { background: #27C93F; }
.p-browser-body { padding: 20px; font-family: 'Inter', sans-serif; }

/* Dashboard UI Elements */
.p-dash-card { background: #1F2937; border-radius: 8px; padding: 15px; border: 1px solid rgba(255,255,255,0.05); }
.p-dash-row { display: flex; justify-content: space-between; margin-bottom: 12px; }
.p-dash-val { color: white; font-size: 24px; font-weight: 700; font-family: 'Syne'; }
.p-dash-lbl { color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }

/* Premium Mobile App Mockup */
.p-mock-mobile {
  width: 100%; max-width: 280px; margin: 0 auto;
  background: #000;
  border-radius: 36px;
  border: 8px solid #1f2937;
  box-shadow: 0 25px 50px rgba(0,0,0,0.6), inset 0 0 10px rgba(255,255,255,0.1);
  overflow: hidden; position: relative;
  height: 480px;
}
.p-mock-island {
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
  width: 90px; height: 26px; background: #000; border-radius: 13px; z-index: 10;
}
.p-mock-mobile-body {
  padding: 50px 15px 20px; height: 100%; background: linear-gradient(180deg, #1e1b4b 0%, #000 100%);
  display: flex; flex-direction: column; gap: 15px; font-family: 'Inter', sans-serif;
}
.p-app-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 15px; backdrop-filter: blur(10px); }

/* Premium Chatbot Mockup */
.p-mock-bot {
  width: 100%; max-width: 340px; margin: 0 auto;
  background: #111827; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5); overflow: hidden;
}
.p-bot-head {
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 20px; color: white; display: flex; align-items: center; gap: 12px;
}
.p-bot-body { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
.p-bot-left { background: #1F2937; color: white; padding: 12px 16px; border-radius: 16px 16px 16px 0; align-self: flex-start; max-width: 85%; font-size: 13px; }
.p-bot-right { background: #3b82f6; color: white; padding: 12px 16px; border-radius: 16px 16px 0 16px; align-self: flex-end; max-width: 85%; font-size: 13px; }

`;

fs.appendFileSync('style.css', '\n' + cssPolish);
console.log("Appended Polish CSS and Mobile Fix");
