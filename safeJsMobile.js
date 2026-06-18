const fs = require('fs');

let text = fs.readFileSync('index.html', 'utf8');

// Find and replace the filter JS logic
const oldJsRegex = /\/\/ PORTFOLIO FILTER LOGIC[\s\S]*?<\/script>/;

const safeJs = `// PORTFOLIO FILTER LOGIC (ULTRA SAFE)
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.o-filter-btn');
  const cards = document.querySelectorAll('.o-cs-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Instantly hide/show without relying on timeout transitions
      // This prevents bugs on mobile browsers where timeouts or opacity transitions freeze
      cards.forEach(card => {
        // Reset any inline styles that might have gotten stuck
        card.style.opacity = '1';
        card.style.transform = 'none';
        
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hide');
          card.style.display = 'flex'; // Force display
        } else {
          card.classList.add('hide');
          card.style.display = 'none'; // Force hide
        }
      });
    });
  });
});
</script>`;

if (text.match(oldJsRegex)) {
    text = text.replace(oldJsRegex, safeJs);
    fs.writeFileSync('index.html', text);
    console.log("Applied safe filter JS");
} else {
    console.log("Could not find filter JS to replace");
}
