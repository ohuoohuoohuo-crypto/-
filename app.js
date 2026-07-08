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
    breadcrumbHome: "首页",
    heroEyebrow: "核心价值主张",
    heroAria: "探索无限可能的游戏世界",
    heroTitleTop: "探索无限可能的",
    heroTitleBottom: "游戏世界",
    heroLead:
      "Singularity Games 致力于打造创新、沉浸式的游戏体验和 AI 应用",
    heroPrimary: "探索产品",
    heroSecondary: "关于我们",
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
    aboutKicker: "ABOUT SINGULARITY",
    aboutTitle: "关于我们",
    aboutLead: "了解 Singularity Games 的故事、使命和团队。",
    storyKicker: "OUR STORY",
    storyTitle: "我们的故事",
    storyBody1:
      "Singularity Games 成立于 2023 年，由一群热爱游戏和人工智能的技术专家与创意人才共同创立。",
    storyBody2:
      "我们的初始团队在游戏开发、人工智能和用户体验设计领域拥有丰富经验，怀揣着将创新技术与娱乐体验融合的梦想，开启了奇点游戏的创业之旅。",
    storyBody3:
      "从小型创业团队到拥有数十名成员的科技公司，我们的产品不仅在国内市场取得了成功，也逐步拓展到国际市场。",
    storyMetric1: "创立年份",
    storyMetric2: "产品矩阵",
    storyMetric3: "动态节点",
    valuesKicker: "MISSION & VALUES",
    valuesTitle: "我们的使命与价值观",
    valuesLead:
      "我们的使命是通过创新的游戏和 AI 应用，丰富人们的数字生活，激发创造力，连接人与技术。",
    value1Title: "创新",
    value1Body: "不断探索新技术和创意，挑战传统，推动行业边界。",
    value2Title: "用户至上",
    value2Body: "以用户需求为中心，创造直观、愉悦且有价值的体验。",
    value3Title: "卓越品质",
    value3Body: "追求卓越，对每一个产品细节精益求精。",
    value4Title: "合作共赢",
    value4Body: "重视团队协作和伙伴关系，共同创造更大价值。",
    teamKicker: "TEAM CONSTELLATION",
    teamTitle: "我们的团队",
    teamLead:
      "一支充满激情和才华的团队，来自不同背景，却拥有共同目标：创造令人惊叹的数字体验。",
    filterAll: "全部",
    filterManagement: "管理",
    filterTech: "技术",
    filterCreative: "创意",
    filterOps: "运营",
    teamReadMore: "查看完整职责",
    team1Name: "创始人 & CEO",
    team1Group: "管理 / 战略",
    team2Name: "首席技术官",
    team2Group: "技术 / 架构",
    team3Name: "创意总监",
    team3Group: "创意 / 世界观",
    team4Name: "游戏服务端主管",
    team4Group: "技术 / 服务端",
    team5Name: "游戏客户端主管",
    team5Group: "技术 / 客户端",
    team6Name: "美术总监",
    team6Group: "美术 / 视觉",
    team7Name: "游戏策划主管",
    team7Group: "策划 / 系统",
    team8Name: "AI 游戏工具研发主管",
    team8Group: "AI / 工具链",
    contactKicker: "TECHNICAL SUPPORT",
    contactTitle: "联系我们",
    contactLead: "游戏支持 / 错误报告 / 功能请求",
    contactBlock1Label: "SUPPORT PORTAL",
    contactBlock1Title: "联系我们",
    contactBlock1Subtitle: "游戏问题、错误报告或请求",
    contactPrimaryBody:
      "如有任何关于游戏的问题、错误报告或请求，请发送至以下电子邮件地址。",
    contactSupportBody:
      "如有任何疑问、错误报告或功能请求，请发送电子邮件至：",
    contactCopy: "复制邮箱",
    contactCopyIdle: "邮箱已准备就绪",
    contactCopySuccess: "邮箱已复制",
    contactCopyError: "请手动复制邮箱",
    contactBlock2Label: "LANGUAGE MATRIX",
    contactLanguagesTitle: "支持的语言",
    contactLanguagesValue: "日语/中文/英语",
    contactBlock3Label: "DEVELOPER NODE",
    contactDeveloperTitle: "开发者",
    contactDeveloperValue: "汉联游戏",
    contactFooterNote: "《野蛮僧侣》 © 2026 汉联游戏",
    contactStatusLabel: "SUPPORT CHANNEL / COPY STATUS",
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
    navAbout: "About Us",
    navContact: "Contact",
    breadcrumbHome: "Home",
    heroEyebrow: "Core Value",
    heroAria: "Explore Infinite Game Worlds",
    heroTitleTop: "Explore Infinite",
    heroTitleBottom: "Game Worlds",
    heroLead:
      "Singularity Games builds inventive, immersive game experiences and AI applications, connecting players to their next adventure through dynamic worlds, intelligent characters, and holographic interaction.",
    heroPrimary: "Explore Products",
    heroSecondary: "About Us",
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
    aboutKicker: "ABOUT SINGULARITY",
    aboutTitle: "About Us",
    aboutLead: "Meet the story, mission, and team behind Singularity Games.",
    storyKicker: "OUR STORY",
    storyTitle: "Our Story",
    storyBody1:
      "Singularity Games was founded in 2023 by technologists and creators who love games and artificial intelligence.",
    storyBody2:
      "Our founding team brings deep experience across game development, AI, and user experience design, with a shared dream of blending advanced technology with memorable entertainment.",
    storyBody3:
      "From a small startup to a growing technology company, our products have gained traction locally and are expanding into international markets.",
    storyMetric1: "Founded",
    storyMetric2: "Product Matrix",
    storyMetric3: "Live Nodes",
    valuesKicker: "MISSION & VALUES",
    valuesTitle: "Mission and Values",
    valuesLead:
      "We use inventive games and AI applications to enrich digital life, spark creativity, and connect people with technology.",
    value1Title: "Innovation",
    value1Body: "We explore new technology and ideas, challenge conventions, and push the edge of the industry.",
    value2Title: "User First",
    value2Body: "We build around user needs, creating experiences that feel clear, joyful, and valuable.",
    value3Title: "Craft Quality",
    value3Body: "We pursue excellence and polish every product detail with care.",
    value4Title: "Shared Wins",
    value4Body: "We value collaboration, partnerships, and creating larger value together.",
    teamKicker: "TEAM CONSTELLATION",
    teamTitle: "Our Team",
    teamLead:
      "A passionate, talented team from different backgrounds, united by one goal: create astonishing digital experiences.",
    filterAll: "All",
    filterManagement: "Management",
    filterTech: "Tech",
    filterCreative: "Creative",
    filterOps: "Operations",
    teamReadMore: "View Responsibilities",
    team1Name: "Founder & CEO",
    team1Group: "Management / Strategy",
    team2Name: "Chief Technology Officer",
    team2Group: "Tech / Architecture",
    team3Name: "Creative Director",
    team3Group: "Creative / Worldbuilding",
    team4Name: "Game Server Lead",
    team4Group: "Tech / Server",
    team5Name: "Game Client Lead",
    team5Group: "Tech / Client",
    team6Name: "Art Director",
    team6Group: "Art / Visuals",
    team7Name: "Game Design Lead",
    team7Group: "Design / Systems",
    team8Name: "AI Game Tools Lead",
    team8Group: "AI / Toolchain",
    contactKicker: "TECHNICAL SUPPORT",
    contactTitle: "Contact Us",
    contactLead: "Game support / bug reports / feature requests",
    contactBlock1Label: "SUPPORT PORTAL",
    contactBlock1Title: "Contact Us",
    contactBlock1Subtitle: "Game questions, bug reports, or requests",
    contactPrimaryBody:
      "If you have any game questions, bug reports, or requests, please send them to the email address below.",
    contactSupportBody:
      "For questions, bug reports, or feature requests, please email us at:",
    contactCopy: "Copy Email",
    contactCopyIdle: "Email ready",
    contactCopySuccess: "Email copied",
    contactCopyError: "Copy manually",
    contactBlock2Label: "LANGUAGE MATRIX",
    contactLanguagesTitle: "Supported Languages",
    contactLanguagesValue: "Japanese / Chinese / English",
    contactBlock3Label: "DEVELOPER NODE",
    contactDeveloperTitle: "Developer",
    contactDeveloperValue: "Hanlian Games",
    contactFooterNote: "Wild Monk © 2026 Hanlian Games",
    contactStatusLabel: "SUPPORT CHANNEL / COPY STATUS",
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

const teamProfiles = {
  zh: {
    ceo: {
      name: "创始人 & CEO",
      group: "管理 / 战略",
      bio: "负责公司战略规划和整体运营，引领团队实现愿景，推动公司持续创新发展。",
      tags: ["战略规划", "团队建设", "产品方向"],
    },
    cto: {
      name: "首席技术官",
      group: "技术 / 架构",
      bio: "负责技术路线和研发团队管理，专注于游戏引擎优化、AI 技术应用和高并发服务架构。",
      tags: ["AI 架构", "引擎优化", "工程效率"],
    },
    creative: {
      name: "创意总监",
      group: "创意 / 世界观",
      bio: "负责游戏概念设计、视觉风格和用户体验，把抽象创意转化为可感知的沉浸式世界。",
      tags: ["世界观", "叙事体验", "交互概念"],
    },
    server: {
      name: "游戏服务端主管",
      group: "技术 / 服务端",
      bio: "负责游戏服务端架构设计和后端系统开发，保障游戏稳定运行和数据安全。",
      tags: ["高并发", "数据安全", "稳定性"],
    },
    client: {
      name: "游戏客户端主管",
      group: "技术 / 客户端",
      bio: "负责客户端开发和性能优化，专注于提升游戏性能与用户体验。",
      tags: ["跨端体验", "性能优化", "动效实现"],
    },
    art: {
      name: "美术总监",
      group: "美术 / 视觉",
      bio: "负责游戏美术风格定位和视觉设计，统筹角色、场景、特效等视觉资产。",
      tags: ["3D 资产", "视觉规范", "特效表现"],
    },
    design: {
      name: "游戏策划主管",
      group: "策划 / 系统",
      bio: "负责游戏玩法设计和内容规划，把控游戏整体方向、成长节奏和可玩性。",
      tags: ["玩法系统", "关卡节奏", "留存循环"],
    },
    tools: {
      name: "AI 游戏工具研发主管",
      group: "AI / 工具链",
      bio: "负责 AI 游戏开发工具的研发和优化，专注提升团队效率与算法驱动的应用体验。",
      tags: ["AIGC", "工具链", "智能工作流"],
    },
  },
  en: {
    ceo: {
      name: "Founder & CEO",
      group: "Management / Strategy",
      bio: "Leads company strategy and operations, guiding the team toward its vision and continuous innovation.",
      tags: ["Strategy", "Team Building", "Product Direction"],
    },
    cto: {
      name: "Chief Technology Officer",
      group: "Tech / Architecture",
      bio: "Owns the technical roadmap, game engine optimization, AI applications, and high-concurrency service architecture.",
      tags: ["AI Architecture", "Engine Optimization", "Engineering Velocity"],
    },
    creative: {
      name: "Creative Director",
      group: "Creative / Worldbuilding",
      bio: "Transforms abstract ideas into immersive worlds through game concepts, visual direction, and experience design.",
      tags: ["Worldbuilding", "Narrative UX", "Interaction Concepts"],
    },
    server: {
      name: "Game Server Lead",
      group: "Tech / Server",
      bio: "Designs backend architecture and online systems that keep game experiences stable, secure, and scalable.",
      tags: ["Concurrency", "Data Safety", "Reliability"],
    },
    client: {
      name: "Game Client Lead",
      group: "Tech / Client",
      bio: "Builds and optimizes client experiences, improving performance, interaction quality, and cross-device polish.",
      tags: ["Cross-Platform", "Performance", "Motion"],
    },
    art: {
      name: "Art Director",
      group: "Art / Visuals",
      bio: "Defines visual direction and coordinates characters, environments, effects, and product art assets.",
      tags: ["3D Assets", "Visual Systems", "Effects"],
    },
    design: {
      name: "Game Design Lead",
      group: "Design / Systems",
      bio: "Shapes gameplay systems, content planning, progression rhythm, and long-term player engagement.",
      tags: ["Gameplay", "Level Rhythm", "Retention"],
    },
    tools: {
      name: "AI Game Tools Lead",
      group: "AI / Toolchain",
      bio: "Develops AI-powered creation tools that improve team efficiency and algorithm-driven product experiences.",
      tags: ["AIGC", "Toolchain", "Smart Workflow"],
    },
  },
};

let width = 0;
let height = 0;
let particles = [];
const pointer = { x: 0, y: 0, active: false };
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentLang = "zh";
let activeMemberKey = "ceo";

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
  document.querySelectorAll(".product-card, .value-card, .team-card, .contact-card").forEach((card) => {
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
      currentLang = lang;
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));

      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        if (translations[lang][key]) node.textContent = translations[lang][key];
      });

      updateHeroTitleEffects(lang);
      updateTeamDetail(activeMemberKey);
      updateCopyStatus(translations[lang].contactCopyIdle);
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

function updateTeamDetail(memberKey = activeMemberKey) {
  const profile = teamProfiles[currentLang]?.[memberKey] || teamProfiles.zh[memberKey];
  const name = document.getElementById("teamDetailName");
  const group = document.getElementById("teamDetailGroup");
  const bio = document.getElementById("teamDetailBio");
  const tags = document.getElementById("teamDetailTags");

  if (!profile || !name || !group || !bio || !tags) return;

  activeMemberKey = memberKey;
  name.textContent = profile.name;
  group.textContent = profile.group;
  bio.textContent = profile.bio;
  tags.replaceChildren(
    ...profile.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    })
  );

  document.querySelectorAll(".team-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.member === memberKey);
  });
}

function setupTeamDirectory() {
  const filters = document.querySelectorAll("[data-team-filter]");
  const cards = document.querySelectorAll(".team-card");
  if (!filters.length || !cards.length) return;

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.teamFilter;
      filters.forEach((item) => item.classList.toggle("is-active", item === button));

      cards.forEach((card) => {
        const isVisible = filter === "all" || card.dataset.team === filter;
        card.hidden = !isVisible;
      });

      const selected = document.querySelector(".team-card.is-selected:not([hidden])");
      const firstVisible = document.querySelector(".team-card:not([hidden])");
      if (!selected && firstVisible) updateTeamDetail(firstVisible.dataset.member);

      spawnBurst(button, 16);
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      updateTeamDetail(card.dataset.member);
      spawnBurst(card, 14);
    });
  });

  updateTeamDetail(activeMemberKey);
}

function updateCopyStatus(message) {
  const status = document.getElementById("copyStatus");
  if (status && message) status.textContent = message;
}

function setupEmailCopy() {
  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.dataset.copyEmail;
      if (!email) return;
      let copied = false;

      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch {
        const input = document.createElement("input");
        input.value = email;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        copied = document.execCommand("copy");
        input.remove();
      }

      updateCopyStatus(
        translations[currentLang][copied ? "contactCopySuccess" : "contactCopyError"],
      );
      if (copied) spawnBurst(button, 22);
    });
  });
}

resizeCanvas();
setupPointer();
setupTiltCards();
setupReveal();
setupLanguage();
setupTeamDirectory();
setupEmailCopy();
updateHeroTitleEffects("zh");
setupVideoFallback();

if (!prefersReduced) {
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas);
