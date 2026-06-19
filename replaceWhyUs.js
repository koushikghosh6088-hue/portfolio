const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const newWhyUsHTML = `
<!-- SECTION 6: WHY US -->
<section class="o-section o-fade-up">
  <span class="o-eyebrow">WHY CHOOSE US</span>
  <h2 class="o-headline">Why Businesses Choose Joint AI Labs</h2>
  <p class="o-subtext">Stop gambling with unreliable freelancers or overpaying massive agencies. We offer the perfect balance of speed, quality, and direct accountability.</p>

  <!-- Glowing Comparison Matrix -->
  <div class="comp-matrix-wrap">
    <div class="comp-matrix">
      
      <!-- Competitor: Freelancer -->
      <div class="comp-col comp-dim">
        <div class="comp-head">Freelancer</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Unpredictable delivery</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Ghosting risk high</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Lacks AI expertise</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Code is often messy</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Post-launch support rare</div>
      </div>

      <!-- Joint AI Labs (Hero) -->
      <div class="comp-col comp-hero">
        <div class="comp-glow"></div>
        <div class="comp-head hero-head">Joint AI Labs ✦</div>
        <div class="comp-row"><span class="comp-icon yes">✓</span> <strong>2-5 Weeks</strong> guaranteed</div>
        <div class="comp-row"><span class="comp-icon yes">✓</span> <strong>Direct Founder</strong> access</div>
        <div class="comp-row"><span class="comp-icon yes">✓</span> <strong>Deep AI & Full-Stack</strong> expertise</div>
        <div class="comp-row"><span class="comp-icon yes">✓</span> <strong>Scalable</strong> production code</div>
        <div class="comp-row"><span class="comp-icon yes">✓</span> <strong>30 Days Free</strong> SLA support</div>
      </div>

      <!-- Competitor: Big Agency -->
      <div class="comp-col comp-dim">
        <div class="comp-head">Big Agency</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Takes months to launch</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Passed to junior devs</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Insanely expensive</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Rigid slow processes</div>
        <div class="comp-row"><span class="comp-icon no">✗</span> Costly monthly retainers</div>
      </div>

    </div>
  </div>

  <!-- Bento Box Advantages -->
  <div class="why-bento-grid">
    
    <div class="why-bento-card card-1">
      <div class="bento-icon">🤝</div>
      <h3 class="bento-title">Direct Founder Access</h3>
      <p class="bento-desc">No junior developers. No account managers. You speak directly to the experienced engineers actually building your product.</p>
    </div>

    <div class="why-bento-card card-2">
      <div class="bento-icon">🚀</div>
      <h3 class="bento-title">Insane Delivery Speed</h3>
      <p class="bento-desc">We don't drag projects out for months just to bill more hours. We deliver working, production-ready systems in weeks.</p>
    </div>

    <div class="why-bento-card card-3">
      <div class="bento-icon">💎</div>
      <h3 class="bento-title">Enterprise Tech, SMB Pricing</h3>
      <p class="bento-desc">Get the same bleeding-edge AI and scalable cloud architecture used by Fortune 500s, without the massive agency price tag.</p>
    </div>

  </div>

</section>
`;

// Extract from <!-- SECTION 6: WHY US --> to <!-- SECTION 7: FAQ -->
const startIndex = html.indexOf('<!-- SECTION 6: WHY US -->');
if (startIndex !== -1) {
  const endIndex = html.indexOf('<!-- SECTION 7: FAQ -->', startIndex);
  if (endIndex !== -1) {
    html = html.substring(0, startIndex) + newWhyUsHTML + '\n' + html.substring(endIndex);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Successfully replaced Why Choose Us section.');
  } else {
    console.log('Could not find end index.');
  }
} else {
  console.log('Could not find start index.');
}
