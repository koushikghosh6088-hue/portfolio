const fs = require('fs');

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
  text-decoration: none;
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
\;

fs.appendFileSync('style.css', vedastraCSS);
console.log('Appended successfully');
