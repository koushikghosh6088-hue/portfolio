const fs = require('fs');

const css = `
/* ════════════════════════════════════════════════════════════
   NEW OVERHAUL CSS (June 2026)
   ════════════════════════════════════════════════════════════ */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --o-bg: #080B14;
  --o-surf: #0D1221;
  --o-teal: #00F5C4;
  --o-text: #F0F4FF;
  --o-mut: #6B7A99;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--o-bg);
  color: var(--o-text);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Syne', sans-serif;
}

.o-eyebrow {
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--o-teal);
  font-weight: 700;
  margin-bottom: 12px;
  display: block;
}

.o-headline {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  color: var(--o-text);
  margin-bottom: 16px;
  line-height: 1.2;
}

.o-subtext {
  font-size: 16px;
  color: var(--o-mut);
  max-width: 600px;
  line-height: 1.6;
}

.o-section {
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.o-btn-teal {
  display: inline-block;
  background: var(--o-teal);
  color: #080B14;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}
.o-btn-teal:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.o-btn-ghost {
  display: inline-block;
  background: transparent;
  color: var(--o-teal);
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;
  border: 1px solid var(--o-teal);
  cursor: pointer;
}
.o-btn-ghost:hover {
  background: rgba(0,245,196,0.1);
  transform: translateY(-2px);
}

.o-fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.o-fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* SECTION 1: RESULTS BAR */
.o-results-bar {
  background: var(--o-surf);
  padding: 60px 20px;
  border-top: 1px solid rgba(0,245,196,0.1);
  border-bottom: 1px solid rgba(0,245,196,0.1);
}
.o-res-grid {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}
.o-res-item {
  flex: 1;
  text-align: center;
  border-right: 1px solid rgba(0,245,196,0.2);
}
.o-res-item:last-child {
  border-right: none;
}
.o-res-num {
  font-family: 'Syne', sans-serif;
  font-size: 52px;
  font-weight: 800;
  color: var(--o-teal);
  margin-bottom: 8px;
}
.o-res-lbl {
  font-size: 14px;
  color: var(--o-mut);
}

/* SECTION 2: INDUSTRY */
.o-ind-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.o-ind-card {
  background: var(--o-surf);
  border: 1px solid #1A2340;
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;
}
.o-ind-card:hover {
  border-color: var(--o-teal);
  box-shadow: 0 0 24px rgba(0,245,196,0.12);
  transform: translateY(-4px);
}
.o-ind-icon { font-size: 40px; margin-bottom: 20px; }
.o-ind-title { font-family: 'Syne'; font-size: 20px; font-weight: 700; color: white; margin-bottom: 16px; }
.o-ind-prob { color: var(--o-mut); font-size: 14px; margin-bottom: 12px; line-height: 1.5; }
.o-ind-sol { color: var(--o-teal); font-size: 14px; margin-bottom: 24px; line-height: 1.5; font-weight: 500;}
.o-ind-badge { display: inline-block; background: rgba(0,245,196,0.1); color: var(--o-teal); font-size: 12px; padding: 4px 12px; border-radius: 999px; font-weight: 600; }

/* SECTION 3: PROCESS */
.o-proc-timeline {
  display: flex;
  gap: 24px;
  margin-top: 48px;
  position: relative;
}
.o-proc-timeline::before {
  content: ''; position: absolute; top: 40px; left: 50px; right: 50px; height: 1px;
  border-top: 2px dashed rgba(0,245,196,0.3); z-index: 0;
}
.o-proc-step {
  flex: 1; background: var(--o-surf); border: 1px solid #1A2340; border-radius: 12px; padding: 32px;
  position: relative; z-index: 1; text-align: center;
}
.o-proc-num {
  width: 40px; height: 40px; border-radius: 50%; background: var(--o-teal); color: #080B14; font-weight: 700; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;
}
.o-proc-icon { font-size: 32px; margin-bottom: 16px; }
.o-proc-title { font-family: 'Syne'; font-size: 18px; font-weight: 700; color: white; margin-bottom: 12px; }
.o-proc-desc { color: var(--o-mut); font-size: 14px; line-height: 1.6; }

/* SECTION 4: CASE STUDIES */
.o-cs-list { margin-top: 48px; display: flex; flex-direction: column; gap: 40px; }
.o-cs-card { display: flex; background: var(--o-surf); border-left: 4px solid var(--o-teal); border-radius: 0 12px 12px 0; overflow: hidden; }
.o-cs-left { flex: 0 0 60%; padding: 40px; }
.o-cs-right { flex: 0 0 40%; background: #0A0D14; border-left: 1px solid #1A2340; padding: 30px; display: flex; align-items: center; justify-content: center; }
.o-cs-client { font-size: 14px; color: var(--o-mut); margin-bottom: 24px; }
.o-cs-res { font-size: 40px; font-family: 'Syne'; font-weight: 800; color: var(--o-teal); margin-bottom: 16px; display: flex; align-items: baseline; gap: 10px;}
.o-cs-res span { font-size: 16px; font-family: 'Inter'; font-weight: 500; color: var(--o-mut); }
.o-cs-desc { font-size: 15px; color: var(--o-text); line-height: 1.7; margin-bottom: 24px; }
.o-cs-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
.o-cs-pill { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 999px; padding: 6px 16px; font-size: 12px; color: rgba(255,255,255,0.8); }
.o-mock-chat { width: 100%; background: #080B14; border-radius: 12px; border: 1px solid #1A2340; overflow: hidden; font-size: 12px; }
.o-mock-dash { width: 100%; background: #080B14; border-radius: 12px; border: 1px solid #1A2340; padding: 20px; font-size: 12px; }

/* SECTION 5: PRICING */
.o-pr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
.o-pr-card { background: var(--o-surf); border: 1px solid #1A2340; border-radius: 12px; padding: 40px; display: flex; flex-direction: column; position: relative; }
.o-pr-card.popular { border-color: var(--o-teal); box-shadow: 0 0 32px rgba(0,245,196,0.2); transform: scale(1.05); z-index: 2; }
.o-pop-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--o-teal); color: #080B14; font-size: 11px; font-weight: 800; padding: 4px 16px; border-radius: 999px; letter-spacing: 1px; }
.o-pr-price { font-family: 'Syne'; font-size: 40px; font-weight: 800; color: white; margin-bottom: 4px; }
.o-pr-sub { font-size: 14px; color: var(--o-mut); margin-bottom: 24px; }
.o-pr-ideal { font-size: 14px; color: var(--o-text); font-weight: 600; padding-bottom: 24px; border-bottom: 1px solid #1A2340; margin-bottom: 24px; }
.o-pr-feat { list-style: none; padding: 0; margin: 0 0 32px 0; flex-grow: 1; }
.o-pr-feat li { font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 16px; display: flex; gap: 10px; }
.o-pr-feat li.no { color: var(--o-mut); }

/* SECTION 6: WHY US */
.o-why-table { width: 100%; border-collapse: collapse; margin-top: 48px; text-align: left; }
.o-why-table th, .o-why-table td { padding: 20px; border-bottom: 1px solid #1A2340; font-size: 15px; }
.o-why-table th { color: var(--o-mut); font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
.o-why-table td:first-child { font-weight: 600; color: white; }
.o-why-table .j-col { background: rgba(0,245,196,0.05); border-left: 2px solid var(--o-teal); color: var(--o-teal) !important; font-weight: 700; }
.o-why-table th.j-col { color: var(--o-teal) !important; }

/* SECTION 7: FAQ */
.o-faq-list { margin-top: 48px; max-width: 800px; margin-left: auto; margin-right: auto; }
.o-faq-item { border-bottom: 1px solid #1A2340; }
.o-faq-q { width: 100%; text-align: left; background: none; border: none; padding: 24px 0; color: white; font-family: 'Syne'; font-size: 18px; font-weight: 600; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
.o-faq-icon { color: var(--o-teal); font-size: 24px; transition: transform 0.3s; }
.o-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; color: var(--o-mut); font-size: 15px; line-height: 1.6; }
.o-faq-item.active .o-faq-a { max-height: 300px; padding-bottom: 24px; }
.o-faq-item.active .o-faq-icon { transform: rotate(45deg); }

/* SECTION 8: CONTACT */
.o-cont-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 48px; }
.o-c-cards { display: flex; flex-direction: column; gap: 16px; }
.o-c-card { background: var(--o-surf); border: 1px solid #1A2340; border-radius: 12px; padding: 24px; display: flex; align-items: center; gap: 20px; text-decoration: none; color: white; transition: all 0.3s; }
.o-c-card:hover { border-color: var(--o-teal); }
.o-c-icon { font-size: 24px; }
.o-c-lbl { font-size: 12px; color: var(--o-mut); margin-bottom: 4px; }
.o-c-val { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.o-c-sub { font-size: 12px; color: var(--o-mut); }
.o-form { background: var(--o-surf); border: 1px solid #1A2340; border-radius: 12px; padding: 40px; }
.o-input { width: 100%; background: var(--o-bg); border: 1px solid #1A2340; border-radius: 8px; padding: 14px 16px; color: white; margin-bottom: 20px; font-family: 'Inter'; font-size: 14px; outline: none; transition: border-color 0.3s; }
.o-input:focus { border-color: var(--o-teal); }

/* FOOTER */
.o-footer { background: var(--o-bg); border-top: 1px solid rgba(0,245,196,0.3); padding: 80px 20px 40px; margin-top: 60px; }
.o-ft-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; max-width: 1200px; margin: 0 auto; }
.o-ft-brand { font-family: 'Syne'; font-size: 24px; font-weight: 800; color: white; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.o-ft-brand span { width: 12px; height: 12px; background: var(--o-teal); display: inline-block; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
.o-ft-head { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: var(--o-teal); margin-bottom: 24px; font-weight: 700; }
.o-ft-link { display: block; color: var(--o-mut); text-decoration: none; font-size: 14px; margin-bottom: 12px; transition: color 0.3s; }
.o-ft-link:hover { color: var(--o-teal); }
.o-ft-bottom { text-align: center; color: var(--o-mut); font-size: 13px; margin-top: 80px; padding-top: 24px; border-top: 1px solid #1A2340; }

@media (max-width: 900px) {
  .o-res-grid { flex-wrap: wrap; }
  .o-res-item { flex: 0 0 50%; border-bottom: 1px solid rgba(0,245,196,0.2); padding: 20px 0; }
  .o-res-item:nth-child(2n) { border-right: none; }
  .o-ind-grid { grid-template-columns: repeat(2, 1fr); }
  .o-proc-timeline { flex-direction: column; }
  .o-proc-timeline::before { display: none; }
  .o-cs-card { flex-direction: column; }
  .o-pr-grid { grid-template-columns: 1fr; }
  .o-pr-card.popular { transform: none; }
  .o-why-wrap { overflow-x: auto; }
  .o-cont-grid { grid-template-columns: 1fr; }
  .o-ft-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .o-ind-grid { grid-template-columns: 1fr; }
  .o-section { padding: 60px 20px; }
}
`;

fs.appendFileSync('style.css', '\n' + css);
console.log("Appended overhaul CSS");
