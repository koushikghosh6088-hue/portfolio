const fs = require('fs');

function upgradeDashboardAndMobile() {
    let files = ['index.html', 'services.html', 'replaceHTML.js'];
    
    // 1. Chart.js CDN and init script to be added at the end of body
    const chartScript = `
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const ctxMain = document.getElementById('mainSaaSChart');
    if (ctxMain) {
        new Chart(ctxMain, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    type: 'line',
                    label: 'Revenue',
                    data: [30, 45, 42, 60, 55, 75, 84],
                    borderColor: '#00d4ff',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#00d4ff',
                    pointRadius: 4
                }, {
                    type: 'bar',
                    label: 'Users',
                    data: [20, 35, 30, 45, 40, 55, 65],
                    backgroundColor: 'rgba(123, 47, 255, 0.6)',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#fff' } }
                },
                scales: {
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#888' } },
                    x: { grid: { display: false }, ticks: { color: '#888' } }
                }
            }
        });
    }

    const ctxPie = document.getElementById('pieSaaSChart');
    if (ctxPie) {
        new Chart(ctxPie, {
            type: 'doughnut',
            data: {
                labels: ['Enterprise', 'Pro', 'Basic'],
                datasets: [{
                    data: [45, 35, 20],
                    backgroundColor: ['#00d4ff', '#7b2fff', '#ff007a'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: '#fff', boxWidth: 12 } }
                },
                cutout: '70%'
            }
        });
    }
});
</script>
`;

    // 2. The New Dashboard HTML with canvases
    const newDashboardHTML = `
<div class="mock-saas" style="width: 100%; height: 100%; display: flex; background: #050505; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1);">
  <div class="ms-sidebar" style="width: 60px; background: rgba(20,20,25,0.9); border-right: 1px solid rgba(255,255,255,0.05); padding: 20px 0; display: flex; flex-direction: column; align-items: center;">
    <div class="ms-logo" style="width: 28px; height: 28px; background: linear-gradient(135deg, #00d4ff, #7b2fff); border-radius: 8px; margin-bottom: 30px; box-shadow: 0 0 15px rgba(0,212,255,0.4);"></div>
    <div class="ms-nav-item active" style="margin: 10px 0; width: 36px; height: 36px; border-radius: 10px; background: rgba(0,212,255,0.15); box-shadow: 0 0 15px rgba(0,212,255,0.3); border: 1px solid rgba(0,212,255,0.4); display: flex; align-items: center; justify-content: center;"><div style="width:16px; height:16px; background: var(--cyan); mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></svg>') center/contain no-repeat; -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></svg>') center/contain no-repeat;"></div></div>
    <div class="ms-nav-item" style="margin: 10px 0; width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.03);"></div>
  </div>
  <div class="ms-main" style="flex: 1; padding: 20px; display: flex; flex-direction: column; overflow: hidden;">
    <div class="ms-topbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
      <div class="ms-search" style="width: 180px; height: 28px; background: rgba(255,255,255,0.05); border-radius: 14px; border: 1px solid rgba(255,255,255,0.1);"></div>
      <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #ff007a, #7b2fff);"></div>
    </div>
    
    <div class="ms-cards" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0,212,255,0.2); border-radius: 10px; padding: 12px;">
        <div style="font-size: 11px; color: #80e5ff; margin-bottom: 4px;">TOTAL REVENUE</div>
        <div style="font-size: 20px; font-weight: bold; color: white;">$84.2K</div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(123,47,255,0.2); border-radius: 10px; padding: 12px;">
        <div style="font-size: 11px; color: #d4a5ff; margin-bottom: 4px;">ACTIVE USERS</div>
        <div style="font-size: 20px; font-weight: bold; color: white;">12.4K</div>
      </div>
    </div>
    
    <div style="display: flex; gap: 15px; flex: 1; min-height: 0;">
       <div style="flex: 2; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 10px; position: relative;">
          <canvas id="mainSaaSChart"></canvas>
       </div>
       <div style="flex: 1; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 10px; position: relative; display: flex; align-items: center; justify-content: center;">
          <canvas id="pieSaaSChart"></canvas>
       </div>
    </div>
  </div>
</div>
`;

    // 3. The New Mobile HTML with the image scroll
    const newMobileHTML = `
<div class="mock-iphone">
  <div class="mi-island"></div>
  <div class="mi-screen" style="background: #000; padding: 0;">
    <img src="mobile_app_mockup.png" style="width: 100%; animation: appScrollImage 12s infinite linear;" alt="App Mockup" onerror="this.src='https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'" />
  </div>
</div>
`;

    files.forEach(file => {
        if (!fs.existsSync(file)) return;
        let text = fs.readFileSync(file, 'utf8');

        // Replace Dashboard
        let saasRegex = /<div class="mock-saas"[\s\S]*?(<div class="mock-glow-orb)/;
        if (text.match(saasRegex)) {
            text = text.replace(saasRegex, `${newDashboardHTML}\n            $1`);
        } else {
            console.log("mock-saas not found in " + file);
        }

        // Replace Mobile App
        let iphoneRegex = /<div class="mock-iphone">[\s\S]*?<\/div>\s*<\/div>/;
        if (text.match(iphoneRegex)) {
            text = text.replace(iphoneRegex, newMobileHTML);
        } else {
            console.log("mock-iphone not found in " + file);
        }

        // Add Chart.js script if not present
        if (!text.includes('chart.js')) {
            text = text.replace('</body>', `${chartScript}\n</body>`);
        }

        fs.writeFileSync(file, text);
        console.log('Processed', file);
    });

    // Add CSS for image scrolling
    fs.appendFileSync('style.css', '\n@keyframes appScrollImage { 0% { transform: translateY(0); } 50% { transform: translateY(-30%); } 100% { transform: translateY(0); } }\n');
}

upgradeDashboardAndMobile();
