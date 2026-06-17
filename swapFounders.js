const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const koushikBlock = `        <div class="founder-card" data-gsap="fadeLeft">
          <div class="founder-img-wrap">
            <img src="founder1.png" alt="Founder 1 – CEO & AI Architect" class="founder-img" loading="lazy" />
            <div class="founder-img-glow"></div>
            <div class="founder-badge">CEO &amp; AI Architect</div>
          </div>
          <div class="founder-info">
            <h3 class="founder-name">Koushik Ghosh</h3>
            <p class="founder-role grad-text">Co-Founder &amp; Chief AI Officer</p>
            <p class="founder-bio">Koushik is an AI engineer and full-stack developer with a deep passion for building products that solve real business problems. He leads the technical vision at Joint AI Labs — from GPT-4 integrations and WhatsApp AI agents to custom ERP systems and mobile apps.</p>
            <div class="founder-tags">
              <span>🤖 AI Engineering</span>
              <span>⚡ Full-Stack Dev</span>
              <span>📊 System Architecture</span>
            </div>
            <div class="founder-socials">
              <a href="mailto:jointailabs@gmail.com" class="founder-social-link" aria-label="Email">✉️ jointailabs@gmail.com</a>
              <a href="tel:8017683428" class="founder-social-link" aria-label="Phone">📞 8017683428</a>
            </div>
          </div>
        </div>`;

const anirbanBlock = `        <div class="founder-card founder-card-alt" data-gsap="fadeRight">
          <div class="founder-img-wrap">
            <img src="founder2.png" alt="Founder 2 – CTO & Product Lead" class="founder-img" loading="lazy" />
            <div class="founder-img-glow founder-img-glow-purple"></div>
            <div class="founder-badge founder-badge-purple">CTO &amp; Product Lead</div>
          </div>
          <div class="founder-info">
            <h3 class="founder-name">Anirban Roy</h3>
            <p class="founder-role grad-text">Co-Founder &amp; Chief Technology Officer</p>
            <p class="founder-bio">Anirban drives product strategy and technology roadmap at Joint AI Labs. With expertise in mobile development, cloud infrastructure, and business automation, he ensures every product we ship is fast, scalable, and delivers measurable ROI for our clients.</p>
            <div class="founder-tags">
              <span>📱 Mobile Apps</span>
              <span>☁️ Cloud Infra</span>
              <span>🚀 Product Strategy</span>
            </div>
            <div class="founder-socials">
              <a href="mailto:jointailabs@gmail.com" class="founder-social-link" aria-label="Email">✉️ jointailabs@gmail.com</a>
              <a href="tel:7003383676" class="founder-social-link" aria-label="Phone">📞 70033 83676</a>
            </div>
          </div>
        </div>`;

// Check if they exist to be safe
if (html.includes(koushikBlock) && html.includes(anirbanBlock)) {
  html = html.replace(koushikBlock, '%%KOUSHIK%%');
  html = html.replace(anirbanBlock, '%%ANIRBAN%%');
  
  html = html.replace('%%KOUSHIK%%', anirbanBlock);
  html = html.replace('%%ANIRBAN%%', koushikBlock);
  
  fs.writeFileSync('index.html', html);
  console.log('Swapped founders successfully');
} else {
  console.log('Blocks not found');
}
