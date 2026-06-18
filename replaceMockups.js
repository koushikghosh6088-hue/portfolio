const fs = require('fs');

const cbMockNew = `
            <div style="transform: scale(0.7); transform-origin: center; width: 100%; display: flex; justify-content: center;">
              <div class="cb-mock" style="margin: 0; flex-shrink: 0;">
                <div class="cb-head">
                  <div class="cb-info"><strong>🤖 JointBot AI</strong><span><span class="cb-dot"></span>Online · Powered by GPT-4</span></div>
                  <div class="cb-close">×</div>
                </div>
                <div class="cb-body">
                  <div class="cb-msg bot c-msg-fade">👋 Hi! I'm your AI assistant. How can I help today?</div>
                  <div class="cb-msg user c-msg-fade">What services do you offer?</div>
                  <div class="cb-msg bot c-msg-fade">We offer: 🌐 Website Design, 🤖 AI Chatbots, 💬 WhatsApp AI, 📱 Mobile Apps & 📊 Business Software! Which interests you?</div>
                  <div class="cb-msg user c-msg-fade">AI Chatbot — how much does it cost?</div>
                  <div class="cb-msg bot cb-delayed">Our chatbot plans start from ₹4,999/mo! Want me to connect you with our team for a custom quote? 🚀</div>
                  <div class="cb-chips">
                    <span>Yes, connect me!</span><span>Tell me more</span><span>Book a demo</span>
                  </div>
                </div>
                <div class="cb-foot">
                  <div class="cb-input">Type your message...</div>
                  <div class="cb-send">➤</div>
                </div>
              </div>
            </div>`;

const waMockNew = `
            <div style="transform: scale(0.7); transform-origin: center; width: 100%; display: flex; justify-content: center;">
              <div class="wa-mock" style="margin: 0; flex-shrink: 0;">
                <div class="wa-head">
                  <span class="wa-back">←</span>
                  <div class="wa-av">🤖</div>
                  <div class="wa-info"><strong>Joint AI Bot</strong><span>online</span></div>
                  <div class="wa-icons">📞 🎥 ⋮</div>
                </div>
                <div class="wa-body">
                  <div class="wa-msg user w-msg-fade">Hi! I'm interested in your services 👋<span>10:24 AM</span></div>
                  <div class="wa-msg bot w-msg-fade">Welcome to Joint AI Labs! 🚀 Which service are you looking for?<span>10:24 AM</span></div>
                  <div class="wa-msg user w-msg-fade">Tell me about WhatsApp AI<span>10:25 AM</span></div>
                  <div class="wa-msg bot w-msg-fade">Great choice! Our WhatsApp AI agents qualify leads 24/7, book appointments automatically, and close deals while you sleep 💰<span>10:25 AM</span></div>
                  
                  <div class="wa-typing"><span></span><span></span><span></span></div>
                  <div class="wa-msg bot wa-delayed">Want a FREE demo? Tap below 👇<span>10:25 AM</span></div>
                  <div class="wa-cta-btn">📅 Book Free Demo</div>
                </div>
                <div class="wa-foot">
                  <div class="wa-input">Message</div>
                  <div class="wa-send">🎤</div>
                </div>
              </div>
            </div>`;

function processFile(file) {
    let text = fs.readFileSync(file, 'utf8');
    
    let chatRegex = /<div class="s-mockup-container">\s*<div class="mock-chat advanced">[\s\S]*?<div class="mock-glow-orb/g;
    text = text.replace(chatRegex, `<div class="s-mockup-container tech-trigger-chat">\n${cbMockNew}\n            <div class="mock-glow-orb`);

    let waRegex = /<div class="s-mockup-container">\s*<div class="mock-wa advanced">[\s\S]*?<div class="mock-glow-orb/g;
    text = text.replace(waRegex, `<div class="s-mockup-container tech-trigger-wa">\n${waMockNew}\n            <div class="mock-glow-orb`);

    fs.writeFileSync(file, text);
    console.log('Updated ' + file);
}

['index.html', 'services.html', 'replaceHTML.js'].forEach(processFile);
