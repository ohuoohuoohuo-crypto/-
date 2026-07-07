const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
const burstLayer = document.getElementById("burstLayer");
const root = document.documentElement;

const translations = {
  zh: {
    navHome: "首页",
    navProducts: "产品",
    navAbout: "关于我们",
    navContact: "联系我们",
    heroEyebrow: "核心价值主张",
    heroAria: "探索无限可能的游戏世界",
    heroTitleTop: "探索无限可能的",
    heroTitleBottom: "游戏世界",
    heroLead:
      "Singularity Games 致力于打造创新、沉浸式的游戏体验和 AI 应用",
    heroPrimary: "探索产品",
    heroSecondary: "了解更多",
    signalGames: "游戏与 AI 产品",
    signalWorlds: "动态世界节点",
    signalEngine: "原生智能体验",
    productsKicker: "我们的产品",
    productsTitle: "我们的产品",
    productsLead: "",
    tagFeatured: "重点产品",
    product1Title: "奇幻岛",
    product1Body: "探索神秘的奇幻岛屿，体验前所未有的冒险与挑战。",
    product2Title: "AI 对话画家",
    product2Body: "利用先进的 AI 技术，智能将创意转化为精美的艺术作品。",
    product3Title: "荒岛大玩家",
    product3Body: "在这款充满挑战的荒岛冒险游戏中，你将化身一名探险家，在神秘岛屿上求生存。",
    product4Body: "日本正在专为国人设计的聊天键盘与 AI 聊天助手，助你在日本语境场景中自信交流。",
    product5Body: "专为中小型房地产公司设计的 SaaS 管理系统，提供房源、租赁、合同等一体化管理解决方案。",
    product6Title: "毒舌坊主",
    product6Body: "20+ 角色，增强 3D，口才挑战！分享生活、吐槽热点，轻松各种话题的真人派对游戏。",
    product7Body: "ネオン圏のカジュアルスネーク、エネルギーを集めて、どんどん成長。謎のうちが最強蛇王を目指します。",
    product8Title: "更多产品",
    product8Body: "我们还有更多有趣的游戏与 AI 应用正在开发中，敬请期待。",
    learnMore: "了解更多",
    seeAll: "查看全部产品",
    advantagesKicker: "为什么选择我们",
    advantagesTitle: "为什么选择我们",
    adv1Title: "创新游戏体验",
    adv1Body: "我们专注于创造独特而有趣的游戏体验，为玩家带来前所未有的沉浸式体验。",
    adv2Title: "先进 AI 技术",
    adv2Body: "我们利用最先进的 AI 技术，为用户提供智能、个性化的服务和体验。",
    adv3Title: "用户至上",
    adv3Body: "我们始终将用户体验放在首位，不断优化产品，满足用户需求。",
    ctaKicker: "Ready Player Next",
    ctaTitle: "准备好开始你的冒险了吗？",
    ctaLead: "立即探索我们的产品，开启一段难忘的旅程。",
    ctaButton: "立即探索",
    footerTagline: "创新游戏与 AI 体验的领导者",
    footerContact: "联系我们",
  },
  en: {
    navHome: "Home",
    navProducts: "Products",
    navAbout: "Why Us",
    navContact: "Contact",
    heroEyebrow: "Core Value",
    heroAria: "Explore Infinite Game Worlds",
    heroTitleTop: "Explore Infinite",
    heroTitleBottom: "Game Worlds",
    heroLead:
      "Singularity Games builds inventive, immersive game experiences and AI applications, connecting players to their next adventure through dynamic worlds, intelligent characters, and holographic interaction.",
    heroPrimary: "Explore Products",
    heroSecondary: "Learn More",
    signalGames: "Games and AI Products",
    signalWorlds: "Live World Nodes",
    signalEngine: "AI-Native Experiences",
    productsKicker: "Our Products",
    productsTitle: "A singularity engine for every world",
    productsLead:
      "A cross-platform portfolio spanning games, AI conversation, intelligent creation, and SaaS systems.",
    tagFeatured: "Featured",
    product1Title: "Fantasy Island",
    product1Body: "Explore mysterious islands and experience a new generation of adventure and challenge.",
    product2Title: "AI Dialogue Painter",
    product2Body: "Turn ideas into polished artwork through advanced conversational AI creation.",
    product3Title: "Island Master",
    product3Body: "Collect legendary explorers and survive on mysterious islands in an adventure game.",
    product4Body:
      "A Japanese chat keyboard and AI assistant designed to make everyday communication feel natural.",
    product5Body:
      "A SaaS management system for small and medium real-estate teams, unifying leasing, contracts, and clients.",
    product6Title: "Sharp-Tongue Master",
    product6Body:
      "20+ roles, enhanced 3D, and live verbal challenges for a fast, social party-game experience.",
    product7Body:
      "A casual snake-growth game about eating, evolving, powering up, and challenging the final snake king.",
    product8Title: "More Products",
    product8Body: "More games and AI applications are in development. Stay tuned.",
    learnMore: "Learn More",
    seeAll: "See All Products",
    advantagesKicker: "Why Choose Us",
    advantagesTitle: "Where immersive entertainment meets AI engineering",
    adv1Title: "Inventive Gameplay",
    adv1Body:
      "We create distinctive and entertaining game experiences that bring players deeper into every world.",
    adv2Title: "Advanced AI",
    adv2Body:
      "We use cutting-edge AI to deliver intelligent, personalized services and interactive experiences.",
    adv3Title: "User First",
    adv3Body:
      "We keep user experience at the center and continuously optimize products around real needs.",
    ctaKicker: "Ready Player Next",
    ctaTitle: "Ready to begin your adventure?",
    ctaLead: "Explore our products now and start a memorable journey.",
    ctaButton: "Start Exploring",
    footerTagline: "Leader in innovative games and AI experiences",
    footerContact: "Contact Us",
  },
};

let width = 0;
let height = 0;
let particles = [];
const pointer = { x: 0, y: 0, active: false };
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.min(Math.floor((width * height) / 17000), width < 720 ? 52 : 112);
  particles = Array.from({ length: count }, () => createParticle());
}

function createParticle() {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.34,
    vy: (Math.random() - 0.5) * 0.34,
    size: Math.random() * 1.8 + 0.6,
    hue: [188, 260, 316, 78][Math.floor(Math.random() * 4)],
  };
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -20) p.x = width + 20;
    if (p.x > width + 20) p.x = -20;
    if (p.y < -20) p.y = height + 20;
    if (p.y > height + 20) p.y = -20;

    if (pointer.active) {
      const dx = pointer.x - p.x;
      const dy = pointer.y - p.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 160 && distance > 1) {
        p.x -= dx * 0.003;
        p.y -= dy * 0.003;
      }
    }
  }

  for (let i = 0; i < particles.length; i += 1) {
    const a = particles[i];
    for (let j = i + 1; j < particles.length; j += 1) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 126) {
        const alpha = (1 - distance / 126) * 0.34;
        ctx.strokeStyle = `rgba(94, 234, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  for (const p of particles) {
    ctx.fillStyle = `hsla(${p.hue}, 100%, 68%, 0.88)`;
    ctx.shadowColor = `hsl(${p.hue}, 100%, 68%)`;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.shadowBlur = 0;

  if (!prefersReduced) requestAnimationFrame(drawParticles);
}

function spawnBurst(target, amount = 22) {
  const rect = target.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < amount; i += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * i) / amount + Math.random() * 0.5;
    const distance = 40 + Math.random() * 92;
    const hue = [188, 260, 316, 78, 42][Math.floor(Math.random() * 5)];
    spark.className = "spark";
    spark.style.setProperty("--x", `${centerX}px`);
    spark.style.setProperty("--y", `${centerY}px`);
    spark.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    spark.style.setProperty("--s", `${Math.random() * 4 + 2}px`);
    spark.style.setProperty("--hue", hue);
    burstLayer.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
  }
}

function setupTiltCards() {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -10;
      const ry = ((x / rect.width) - 0.5) * 10;
      card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      card.style.setProperty("--mx", `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${((y / rect.height) * 100).toFixed(1)}%`);
    });

    card.addEventListener("pointerenter", () => spawnBurst(card, 16));
    card.addEventListener("focus", () => spawnBurst(card, 12));
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });

  document.querySelectorAll("[data-burst]").forEach((item) => {
    item.addEventListener("pointerenter", () => spawnBurst(item, 18));
    item.addEventListener("click", () => spawnBurst(item, 30));
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll("[data-reveal], .reveal-card").forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 34, 260)}ms`;
    observer.observe(item);
  });
}

function setupLanguage() {
  const buttons = document.querySelectorAll("[data-lang]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));

      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        if (translations[lang][key]) node.textContent = translations[lang][key];
      });

      updateHeroTitleEffects(lang);
      spawnBurst(button, 20);
    });
  });
}

function updateHeroTitleEffects(lang = "zh") {
  const title = document.querySelector(".glitch-title");
  if (title) title.setAttribute("aria-label", translations[lang].heroAria);

  document.querySelectorAll("[data-glitch]").forEach((line) => {
    const key = line.dataset.glitch;
    line.dataset.text = translations[lang][key] || line.textContent.trim();
  });
}

function setupPointer() {
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    root.style.setProperty("--cursor-x", `${event.clientX}px`);
    root.style.setProperty("--cursor-y", `${event.clientY}px`);
  });

  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
}

function setupVideoFallback() {
  const video = document.querySelector(".stage-video");
  const attempt = video.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.catch(() => {
      video.classList.add("is-paused");
    });
  }
}

resizeCanvas();
setupPointer();
setupTiltCards();
setupReveal();
setupLanguage();
updateHeroTitleEffects("zh");
setupVideoFallback();

if (!prefersReduced) {
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas);
