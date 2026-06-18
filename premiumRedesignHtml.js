const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Rip out the old Industries section
html = html.replace(/<section class="o-section o-fade-up" id="industries">[\s\S]*?<\/section>/, `
  <section class="o-section" id="industries">
    <div class="container" style="max-width: 1400px; margin: 0 auto; padding: 0 20px;">
      <span class="o-eyebrow">BUILT FOR YOUR INDUSTRY</span>
      <h2 class="o-headline" style="margin-bottom: 60px;">We Speak Your Business Language</h2>
      
      <div class="p-ind-wrap">
        <!-- Left Menu -->
        <div class="p-ind-menu">
          <button class="p-ind-btn active" data-ind="real-estate">
            <span class="ind-icon">🏢</span> Real Estate & Builders
          </button>
          <button class="p-ind-btn" data-ind="restaurants">
            <span class="ind-icon">🍽️</span> Restaurants & Food Chains
          </button>
          <button class="p-ind-btn" data-ind="clinics">
            <span class="ind-icon">🏥</span> Clinics & Hospitals
          </button>
          <button class="p-ind-btn" data-ind="ecommerce">
            <span class="ind-icon">🛍️</span> E-commerce & Retail
          </button>
          <button class="p-ind-btn" data-ind="manufacturing">
            <span class="ind-icon">🏭</span> Manufacturing & Logistics
          </button>
        </div>

        <!-- Right Showcase -->
        <div class="p-ind-showcase">
          <!-- Real Estate Panel -->
          <div class="p-ind-panel active" id="panel-real-estate">
            <div class="p-panel-graphic graphic-real-estate">
              <div class="graphic-element g-re-1"></div>
              <div class="graphic-element g-re-2"></div>
              <div class="graphic-element g-re-3"></div>
            </div>
            <div class="p-panel-content">
              <h3>Real Estate & Builders</h3>
              <p>Stop losing hot leads. We automate your entire sales funnel so you can focus on closing deals.</p>
              <div class="p-deliverables">
                <h4>What We Build For You:</h4>
                <ul>
                  <li><span class="d-check">✔</span> Premium Real Estate Websites & Mobile Apps</li>
                  <li><span class="d-check">✔</span> WhatsApp AI Lead Qualification Agent</li>
                  <li><span class="d-check">✔</span> Automated Site Visit Scheduling</li>
                  <li><span class="d-check">✔</span> CRM Integration & Sync</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Restaurants Panel -->
          <div class="p-ind-panel" id="panel-restaurants">
            <div class="p-panel-graphic graphic-restaurants">
              <div class="graphic-element g-food-1"></div>
              <div class="graphic-element g-food-2"></div>
            </div>
            <div class="p-panel-content">
              <h3>Restaurants & Food Chains</h3>
              <p>Stop paying massive commissions to delivery apps. Own your customer data and automate operations.</p>
              <div class="p-deliverables">
                <h4>What We Build For You:</h4>
                <ul>
                  <li><span class="d-check">✔</span> Custom Online Ordering Web App</li>
                  <li><span class="d-check">✔</span> WhatsApp Ordering & Support Bot</li>
                  <li><span class="d-check">✔</span> Kitchen Display System (KDS)</li>
                  <li><span class="d-check">✔</span> Unified Inventory Dashboard</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Clinics Panel -->
          <div class="p-ind-panel" id="panel-clinics">
            <div class="p-panel-graphic graphic-clinics">
              <div class="graphic-element g-health-1"></div>
              <div class="graphic-element g-health-2"></div>
            </div>
            <div class="p-panel-content">
              <h3>Clinics & Hospitals</h3>
              <p>Eliminate no-shows and free up your staff. Let AI handle the heavy lifting of scheduling and follow-ups.</p>
              <div class="p-deliverables">
                <h4>What We Build For You:</h4>
                <ul>
                  <li><span class="d-check">✔</span> Automated Appointment Booking System</li>
                  <li><span class="d-check">✔</span> WhatsApp Reminders & Rescheduling</li>
                  <li><span class="d-check">✔</span> Patient Follow-up AI</li>
                  <li><span class="d-check">✔</span> Secure Patient Records Portal</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Ecommerce Panel -->
          <div class="p-ind-panel" id="panel-ecommerce">
            <div class="p-panel-graphic graphic-ecommerce">
              <div class="graphic-element g-ecom-1"></div>
              <div class="graphic-element g-ecom-2"></div>
            </div>
            <div class="p-panel-content">
              <h3>E-commerce & Retail</h3>
              <p>Provide instant, 24/7 support and scale your sales without hiring a massive support team.</p>
              <div class="p-deliverables">
                <h4>What We Build For You:</h4>
                <ul>
                  <li><span class="d-check">✔</span> Custom Scalable E-commerce Websites</li>
                  <li><span class="d-check">✔</span> AI Bot Trained on Your Product Catalog</li>
                  <li><span class="d-check">✔</span> Instant WhatsApp Order Tracking</li>
                  <li><span class="d-check">✔</span> Automated Abandoned Cart Recovery</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Manufacturing Panel -->
          <div class="p-ind-panel" id="panel-manufacturing">
            <div class="p-panel-graphic graphic-manufacturing">
              <div class="graphic-element g-mfg-1"></div>
              <div class="graphic-element g-mfg-2"></div>
            </div>
            <div class="p-panel-content">
              <h3>Manufacturing & Logistics</h3>
              <p>Replace scattered Excel sheets and chaotic WhatsApp groups with a single source of truth.</p>
              <div class="p-deliverables">
                <h4>What We Build For You:</h4>
                <ul>
                  <li><span class="d-check">✔</span> Custom Business ERP Dashboard</li>
                  <li><span class="d-check">✔</span> Live Inventory & Dispatch Tracking</li>
                  <li><span class="d-check">✔</span> Automated HR & Attendance Systems</li>
                  <li><span class="d-check">✔</span> Vendor & Supplier Portal</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>`);

// 2. Rip out the old Process section
html = html.replace(/<section class="o-section o-fade-up" id="process">[\s\S]*?<\/section>/, `
  <section class="o-section" id="process">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <span class="o-eyebrow" style="text-align:center; display:block;">OUR PROCESS</span>
      <h2 class="o-headline" style="text-align:center; margin-bottom: 80px;">From Idea to Live Product</h2>
      
      <div class="p-proc-wrap">
        <div class="p-proc-line">
          <div class="p-proc-line-fill" id="proc-line-fill"></div>
        </div>
        
        <div class="p-proc-step step-left" data-scroll>
          <div class="p-proc-content">
            <div class="p-proc-num">01</div>
            <h3>Discovery & Blueprint</h3>
            <p>We dive deep into your business problems. You get a clear, fixed-price technical blueprint and scope of work. No hidden surprises.</p>
            <div class="p-proc-meta">Week 1</div>
          </div>
        </div>

        <div class="p-proc-step step-right" data-scroll>
          <div class="p-proc-content">
            <div class="p-proc-num">02</div>
            <h3>UI/UX Design Sprint</h3>
            <p>You see exactly what the product will look like before we write any code. We iterate until you are 100% happy with the design.</p>
            <div class="p-proc-meta">Week 1-2</div>
          </div>
        </div>

        <div class="p-proc-step step-left" data-scroll>
          <div class="p-proc-content">
            <div class="p-proc-num">03</div>
            <h3>Agile Development</h3>
            <p>Our engineers build and rigorously test your product. You get access to a staging link and receive updates every 48 hours.</p>
            <div class="p-proc-meta">Week 2-4</div>
          </div>
        </div>

        <div class="p-proc-step step-right" data-scroll>
          <div class="p-proc-content">
            <div class="p-proc-num">04</div>
            <h3>Launch & Scale</h3>
            <p>We deploy your product to live servers, train your team, and hand over the keys. Enjoy 30 days of free priority support.</p>
            <div class="p-proc-meta">Week 4-5</div>
          </div>
        </div>
      </div>
    </div>
  </section>`);

fs.writeFileSync('index.html', html);
console.log("Updated HTML with premium structure");
