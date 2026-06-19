const fs = require('fs');
const path = require('path');

const cssToAppend = `
/* =========================================================
   WHY CHOOSE US: COMPARISON MATRIX & BENTO
   ========================================================= */

.comp-matrix-wrap {
  max-width: 1100px;
  margin: 60px auto 80px;
  padding: 0 20px;
}

.comp-matrix {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
}

.comp-col {
  flex: 1;
  background: rgba(15, 20, 35, 0.5);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 24px;
  padding: 32px 24px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.comp-head {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.comp-row {
  font-size: 15px;
  color: var(--o-mut);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  line-height: 1.4;
}

.comp-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
  font-size: 12px;
  flex-shrink: 0;
}

.comp-icon.no {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.comp-icon.yes {
  background: rgba(37, 211, 102, 0.1);
  color: #25D366;
  border: 1px solid rgba(37, 211, 102, 0.2);
}

/* Dimmed Competitors */
.comp-dim {
  opacity: 0.6;
  transform: scale(0.95);
  filter: grayscale(0.5);
}

/* Elevated Joint AI Labs Hero Column */
.comp-hero {
  position: relative;
  background: linear-gradient(160deg, rgba(20, 24, 40, 0.95), rgba(8, 12, 24, 0.98));
  border: 1px solid rgba(139, 92, 246, 0.5);
  box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 0 20px rgba(139, 92, 246, 0.15);
  transform: scale(1.05);
  z-index: 2;
  padding: 40px 32px;
}

.comp-hero::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 120%; height: 120%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 60%);
  z-index: -1;
  pointer-events: none;
  filter: blur(40px);
}

.hero-head {
  font-size: 28px;
  background: linear-gradient(90deg, #8B5CF6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom-color: rgba(139, 92, 246, 0.3);
}

.comp-hero .comp-row {
  color: #fff;
}
.comp-hero .comp-row strong {
  font-weight: 700;
  color: #fff;
  margin-right: 4px;
}

/* Mobile responsive for matrix */
@media (max-width: 900px) {
  .comp-matrix {
    flex-direction: column;
    gap: 30px;
  }
  .comp-hero {
    order: -1; /* Forces Joint AI Labs to the top on mobile */
    transform: scale(1);
    width: 100%;
    box-sizing: border-box;
  }
  .comp-dim {
    transform: scale(1);
    width: 100%;
    box-sizing: border-box;
    opacity: 0.8;
  }
}

/* BENTO BOXES */
.why-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.why-bento-card {
  background: rgba(15, 20, 35, 0.6);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(16px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.why-bento-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
  z-index: 0;
  pointer-events: none;
}

.why-bento-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255,255,255,0.15);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.bento-icon {
  font-size: 32px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.bento-title {
  font-family: 'Syne', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}

.bento-desc {
  font-size: 15px;
  color: var(--o-mut);
  line-height: 1.5;
  position: relative;
  z-index: 1;
}

/* Card specific subtle glows */
.card-1:hover { box-shadow: 0 20px 40px rgba(37, 211, 102, 0.1); border-color: rgba(37, 211, 102, 0.3); }
.card-2:hover { box-shadow: 0 20px 40px rgba(249, 115, 22, 0.1); border-color: rgba(249, 115, 22, 0.3); }
.card-3:hover { box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1); border-color: rgba(6, 182, 212, 0.3); }

@media (max-width: 900px) {
  .why-bento-grid {
    grid-template-columns: 1fr;
  }
}
`;

const filePath = path.join(__dirname, 'style.css');
fs.appendFileSync(filePath, cssToAppend, 'utf8');
console.log('Successfully appended Why Choose Us CSS.');
