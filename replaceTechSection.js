const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const startTarget = '<!-- PART 1: TECH STACK GRID -->';
const endTarget = '<!-- PART 2: THREE SHOWCASES -->';

const startIndex = html.indexOf(startTarget);
const endIndex = html.indexOf(endTarget);

if (startIndex !== -1 && endIndex !== -1) {
    const newTechBentoHTML = `<!-- PART 1: TECH BENTO ENGINE -->
        <div class="tech-bento-container fade-up-elem">
          <div class="tb-grid">
            
            <!-- 1. The Brain (AI & LLMs) -->
            <div class="tb-card tb-brain">
              <div class="tb-bg-glow orb-purple"></div>
              <div class="tb-header">
                <span class="tb-icon">🧠</span>
                <h3 class="tb-title">The Brain: AI Models</h3>
              </div>
              <div class="tb-visual">
                <div class="ai-node-network">
                  <div class="ai-node n-center">AI</div>
                  <div class="ai-node n-1"></div>
                  <div class="ai-node n-2"></div>
                  <div class="ai-node n-3"></div>
                  <svg class="ai-lines" viewBox="0 0 100 100"><path d="M50 50 L20 20 M50 50 L80 30 M50 50 L50 80" stroke="rgba(123,47,255,0.6)" stroke-width="2" stroke-dasharray="4"/></svg>
                </div>
              </div>
              <div class="tb-tags">
                <span class="t-pill">GPT-4o</span>
                <span class="t-pill">Claude 3.5</span>
                <span class="t-pill">Gemini 1.5</span>
                <span class="t-pill">LangChain</span>
              </div>
            </div>

            <!-- 2. The Muscle (Automation) -->
            <div class="tb-card tb-muscle">
              <div class="tb-bg-glow orb-cyan"></div>
              <div class="tb-header">
                <span class="tb-icon">⚡</span>
                <h3 class="tb-title">The Muscle: Automation</h3>
              </div>
              <div class="tb-visual">
                <div class="auto-gears">
                  <div class="gear g-main">⚙️</div>
                  <div class="gear g-sub">⚙️</div>
                  <div class="lightning">⚡</div>
                </div>
              </div>
              <div class="tb-tags">
                <span class="t-pill">n8n</span>
                <span class="t-pill">Make</span>
                <span class="t-pill">Zapier</span>
                <span class="t-pill">AutoGen</span>
              </div>
            </div>

            <!-- 3. The Foundation (Cloud & DB) -->
            <div class="tb-card tb-foundation">
              <div class="tb-bg-glow orb-orange"></div>
              <div class="tb-header">
                <span class="tb-icon">🗄️</span>
                <h3 class="tb-title">The Foundation: Cloud</h3>
              </div>
              <div class="tb-visual">
                <div class="server-stack">
                  <div class="server-rack"><div class="sr-light"></div></div>
                  <div class="server-rack"><div class="sr-light"></div></div>
                  <div class="server-rack"><div class="sr-light"></div></div>
                  <div class="data-flow"></div>
                </div>
              </div>
              <div class="tb-tags">
                <span class="t-pill">AWS</span>
                <span class="t-pill">Supabase</span>
                <span class="t-pill">Node.js</span>
                <span class="t-pill">PostgreSQL</span>
              </div>
            </div>

            <!-- 4. The Interface (Frontend & Mobile) -->
            <div class="tb-card tb-interface">
              <div class="tb-bg-glow orb-blue"></div>
              <div class="tb-header">
                <span class="tb-icon">✨</span>
                <h3 class="tb-title">The Interface: Apps</h3>
              </div>
              <div class="tb-visual">
                <div class="ui-mock">
                  <div class="um-head">
                     <span class="um-dot"></span><span class="um-dot"></span><span class="um-dot"></span>
                  </div>
                  <div class="um-body">
                    <div class="um-box"></div>
                    <div class="um-line"></div>
                    <div class="um-line short"></div>
                  </div>
                </div>
              </div>
              <div class="tb-tags">
                <span class="t-pill">React</span>
                <span class="t-pill">Next.js</span>
                <span class="t-pill">Tailwind</span>
                <span class="t-pill">Flutter</span>
              </div>
            </div>

          </div>
        </div>

        `;
        
    const updatedHTML = html.substring(0, startIndex) + newTechBentoHTML + html.substring(endIndex);
    fs.writeFileSync('index.html', updatedHTML);
    console.log("index.html Tech Bento updated successfully.");
} else {
    console.log("Could not find part 1 or part 2 of tech section.");
}
