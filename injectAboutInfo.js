const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetString = '<!-- 3. Side-by-Side Founder ID Cards -->';

if (html.includes(targetString)) {
    const newInfoHTML = `
        <!-- 2.5 Detailed Information: What & How -->
        <div class="cy-info-section fade-up-elem">
          
          <div class="cy-what-we-do">
            <h3 class="cy-i-title">What We Do</h3>
            <div class="cy-w-content">
              <p>We don't just build apps; we engineer <strong>intelligent digital infrastructure</strong>. We specialize in developing high-performance web platforms, scalable mobile applications, and custom AI agents (like intelligent WhatsApp bots).</p>
              <p class="cy-w-highlight">Our solutions are built with one primary goal: to cut your operational costs through automation and dramatically scale your revenue.</p>
            </div>
          </div>

          <div class="cy-how-we-do">
            <h3 class="cy-i-title">How We Do It</h3>
            <div class="cy-timeline">
              
              <div class="cy-step">
                <div class="c-step-marker">
                  <div class="c-s-num">01</div>
                  <div class="c-s-line"></div>
                </div>
                <div class="c-step-content">
                  <h4>Discovery & Logic Mapping</h4>
                  <p>We dive deep into your bottlenecks. We don't write code until we understand exactly how your business makes money and where it loses time.</p>
                </div>
              </div>

              <div class="cy-step">
                <div class="c-step-marker">
                  <div class="c-s-num">02</div>
                  <div class="c-s-line"></div>
                </div>
                <div class="c-step-content">
                  <h4>Architectural Design & AI Integration</h4>
                  <p>We design enterprise-grade foundations. We integrate cutting-edge LLMs (like GPT-4) and automate your workflows for a massive competitive advantage.</p>
                </div>
              </div>

              <div class="cy-step">
                <div class="c-step-marker">
                  <div class="c-s-num">03</div>
                  <div class="c-s-line last-line"></div>
                </div>
                <div class="c-step-content">
                  <h4>Flawless Execution</h4>
                  <p>We ship lightning-fast, highly performant code. Our systems are built to scale effortlessly from 10 users to 100,000 without breaking a sweat.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        `;
    
    html = html.replace(targetString, newInfoHTML + targetString);
    fs.writeFileSync('index.html', html);
    console.log("Successfully injected information sections into index.html");
} else {
    console.log("Could not find the target string to inject HTML.");
}
