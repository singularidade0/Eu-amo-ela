
    const defaultConfig = {
      lock_text: "Clique para abrir...",
      love_title: "Para o amor da minha vida",
      love_message: "Cada momento ao seu lado é um presente. Você é a razão do meu sorriso, a luz dos meus dias e o amor da minha vida. Te amo infinitamente. 💕",
      background_color: "#722F37",
      surface_color: "#F4C2D0",
      text_color: "#FFFFFF",
      font_family: "Great Vibes",
      font_size: 16
    };

    // Floating hearts on page 1
    const heartsContainer = document.getElementById('hearts-container');
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = ['♥','♡','❤','💕'][Math.floor(Math.random()*4)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.fontSize = (14 + Math.random() * 24) + 'px';
      heart.style.animationDuration = (6 + Math.random() * 8) + 's';
      heart.style.animationDelay = Math.random() * 2 + 's';
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 16000);
    }
    setInterval(createHeart, 800);
    for (let i = 0; i < 8; i++) setTimeout(createHeart, i * 300);

    // Sparkles on page 2
    const sparklesContainer = document.getElementById('sparkles-container');
    function createSparkles() {
      for (let i = 0; i < 20; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 3 + 's';
        s.style.width = s.style.height = (2 + Math.random() * 4) + 'px';
        sparklesContainer.appendChild(s);
      }
    }

    // Navigation
    const lockBtn = document.getElementById('lockBtn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const backBtn = document.getElementById('backBtn');

    lockBtn.addEventListener('click', () => {
      lockBtn.classList.add('unlocking');
      setTimeout(() => {
        page1.classList.remove('active');
        page2.classList.add('active');
        createSparkles();
        lucide.createIcons();
      }, 800);
    });
    lockBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lockBtn.click(); }
    });

    backBtn.addEventListener('click', () => {
      page2.classList.remove('active');
      page1.classList.add('active');
      lockBtn.classList.remove('unlocking');
      sparklesContainer.innerHTML = '';
    });

    // Element SDK
    function applyConfig(config) {
      const c = { ...defaultConfig, ...config };
      document.getElementById('lock-hint').textContent = c.lock_text;
      document.getElementById('love-title').textContent = c.love_title;
      document.getElementById('love-message').textContent = c.love_message;

      const titleEl = document.getElementById('love-title');
      titleEl.style.fontFamily = `${c.font_family}, Great Vibes, cursive`;

      document.querySelectorAll('.gradient-bg').forEach(el => {
        el.style.background = `linear-gradient(135deg, ${c.background_color} 0%, #B5596E 50%, ${c.surface_color} 100%)`;
      });

      const baseSize = c.font_size;
      document.getElementById('lock-hint').style.fontSize = `${baseSize * 1.1}px`;
      document.getElementById('love-title').style.fontSize = `${baseSize * 2.2}px`;
      document.getElementById('love-message').style.fontSize = `${baseSize * 1.2}px`;
    }

    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => applyConfig(config),
      mapToCapabilities: (config) => ({
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
          },
          {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
        }
      }),
      mapToEditPanelValues: (config) => new Map([
        ["lock_text", config.lock_text || defaultConfig.lock_text],
        ["love_title", config.love_title || defaultConfig.love_title],
        ["love_message", config.love_message || defaultConfig.love_message]
      ])
    });

    lucide.createIcons();


(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9e3a4a2ec38d09d2',t:'MTc3NDczOTIzMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();