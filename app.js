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
    product1Title: "奇幻岛屿",
    product1Body: "探索神秘的奇幻岛屿，体验前所未有的冒险与挑战。",
    product2Title: "AI 对话画家",
    product2Body: "利用先进的 AI 技术，智能将创意转化为精美的艺术作品。",
    product3Title: "荒岛大赢家",
    product3Body: "在这款充满挑战的荒岛冒险游戏中，你将化身一名探险家，在神秘岛屿上求生存。",
    product4Body: "专为在日外国人设计的聊天键盘与 AI 聊天助手，助你在日本语境场景中自信交流。",
    product5Body: "专为中小型房地产公司设计的 SaaS 管理系统，提供房源、租赁、合同等一体化管理解决方案。",
    product6Title: "毒舌坊主",
    product6Body: "20+ 角色，增强 3D，口才挑战！分享生活、吐槽热点，轻松各种话题的真人派对游戏。",
    product7Title: "蛇蛇·贪吃蛇",
    product7Body: "霓虹风格的休闲贪吃蛇，吃掉能量点成长，利用加速和走位在限时挑战中坚持更久。",
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
    gameKicker: "SURVIVAL ADVENTURE",
    gameTitle: "荒岛大赢家",
    gameLead: "一款充满挑战的放置类冒险游戏，在神秘荒岛上求生存。",
    gamePrimaryAction: "查看游戏特色",
    gameSecondaryAction: "游戏画面",
    gameSignal1: "荒岛求生",
    gameSignal2: "核心玩法",
    gameSignal3: "探索成长",
    gameStoryKicker: "GAME BACKGROUND",
    gameStoryTitle: "游戏背景",
    gameStoryBody1:
      "在这款充满挑战的放置类冒险游戏中，你将化身一位执着追寻世界未解之谜的探险家。命运却给了你一个残酷的考验，一场突如其来的暴风雨将你的船只彻底吞噬。",
    gameStoryBody2:
      "当你从昏迷中苏醒时，发现自己孤身一人躺在陌生岛屿的沙滩上。这里表面风平浪静，实则暗藏杀机，凶猛的野兽、未知的遗迹和稀缺资源都在考验你的选择。",
    gameStoryBody3:
      "你需要管理资源、建造庇护所、制作工具、招募同盟，并在危机四伏的荒野中求生存。通过持续探索，逐步揭开岛屿背后的秘密。",
    gameStoryBody4:
      "随着技能不断提升，你将面对更强大的对手和更险恶的环境。每一次挑战都是成长的契机，也让你离荒岛真正的王者更近一步。",
    gameFeaturesKicker: "FEATURE MATRIX",
    gameFeaturesTitle: "游戏特色",
    gameFeaturesLead:
      "从孤岛生存、同盟招募到遗迹探索，每个系统都围绕“资源争夺、角色成长、荒岛解谜”展开。",
    gameShowcase1Title: "招募同盟",
    gameShowcase1Body: "集结可靠伙伴，携手面对绝境求生挑战。",
    gameShowcase2Title: "天眼之力",
    gameShowcase2Body: "看破弱点，在战斗中智斗强敌。",
    gameShowcase3Title: "未知冒险",
    gameShowcase3Body: "深入洞穴与废弃建筑，揭开荒岛隐藏的秘密。",
    gameFeature1Title: "绝境孤岛",
    gameFeature1Body: "面对饥饿、口渴、疲劳等生存压力，合理管理资源，在孤岛上扎稳根基。",
    gameFeature2Title: "招募同盟",
    gameFeature2Body: "寻找并招募可靠伙伴，组建你的生存团队，用不同角色能力应对挑战。",
    gameFeature3Title: "未知冒险",
    gameFeature3Body: "探索神秘岛屿角落，黑暗洞穴和废弃建筑会不断揭开荒岛真相。",
    gameFeature4Title: "天眼之力",
    gameFeature4Body: "掌握特殊能力，看破强敌弱点，在战略战斗中提升属性与能力。",
    gameFeature5Title: "万卷秘典",
    gameFeature5Body: "收集古老秘典与知识，学习强大技能，掌握秘技决定最终胜局。",
    gameFeature6Title: "制作系统",
    gameFeature6Body: "收集材料，制作工具、武器、装备与生存必需品，提升战斗和生存能力。",
    gameFeature7Title: "危险挑战",
    gameFeature7Body: "与岛上的野兽和其他危险生物战斗，每一次战斗都是生死抉择。",
    gameFeature8Title: "技能成长",
    gameFeature8Body: "通过不断实践提升技能，解锁新制作配方和能力，成为荒岛生存专家。",
    gameFeature9Title: "解谜元素",
    gameFeature9Body: "解开岛上的谜题与秘密，发现遗迹真相，每个谜题都是故事的一部分。",
    gameGalleryKicker: "VISUAL ARCHIVE",
    gameGalleryTitle: "游戏画面",
    gameGalleryLead: "使用左右切换或横向胶片条，快速浏览荒岛大赢家的关键场景。",
    gameGallery1Title: "绝境孤岛",
    gameGallery1Body: "荒岛冒险争资源，独狼突围夺生机。",
    gameGallery2Title: "招募同盟",
    gameGallery2Body: "集结可靠伙伴，携手绝境求生。",
    gameGallery3Title: "天眼之力",
    gameGallery3Body: "看破强敌弱点，用智慧突破危局。",
    gameGallery4Title: "未知冒险",
    gameGallery4Body: "不停探索洞穴与遗迹，揭开荒岛生存史。",
    gameGallery5Title: "万卷秘典",
    gameGallery5Body: "博览群书掌握秘技，向荒野称王迈进。",
    gameCtaKicker: "READY FOR THE ISLAND",
    gameCtaTitle: "踏上荒岛，赢下你的生存战。",
    gameCtaLead: "查看产品矩阵，继续探索 Singularity Games 的更多动态世界。",
    gameCtaButton: "返回产品",
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
    product1Title: "Fantasy Islands",
    product1Body: "Explore mysterious islands and experience a new generation of adventure and challenge.",
    product2Title: "AI Dialogue Painter",
    product2Body: "Turn ideas into polished artwork through advanced conversational AI creation.",
    product3Title: "Island Winner",
    product3Body: "Collect legendary explorers and survive on mysterious islands in an adventure game.",
    product4Body:
      "A Japanese chat keyboard and AI assistant designed to make everyday communication feel natural.",
    product5Body:
      "A SaaS management system for small and medium real-estate teams, unifying leasing, contracts, and clients.",
    product6Title: "Sharp-Tongue Master",
    product6Body:
      "20+ roles, enhanced 3D, and live verbal challenges for a fast, social party-game experience.",
    product7Title: "Snake · Neon Bite",
    product7Body:
      "A neon-style casual snake game. Eat energy points to grow, then use boosts and positioning to survive longer in timed challenges.",
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
    gameKicker: "SURVIVAL ADVENTURE",
    gameTitle: "Island Winner",
    gameLead:
      "A challenging idle adventure where you survive, recruit allies, and uncover a mysterious island.",
    gamePrimaryAction: "View Features",
    gameSecondaryAction: "Game Screens",
    gameSignal1: "Island Survival",
    gameSignal2: "Core Systems",
    gameSignal3: "Explore and Grow",
    gameStoryKicker: "GAME BACKGROUND",
    gameStoryTitle: "Game Background",
    gameStoryBody1:
      "In this challenging idle adventure, you become an explorer obsessed with the world's unsolved mysteries. A sudden storm destroys your ship and throws you into a brutal test.",
    gameStoryBody2:
      "When you wake, you are alone on the shore of an unfamiliar island. The calm surface hides predators, ruins, scarce resources, and difficult choices.",
    gameStoryBody3:
      "Manage resources, build shelter, craft tools, recruit allies, and survive in a wilderness full of danger. Each expedition reveals more of the island's secrets.",
    gameStoryBody4:
      "As your skills grow, stronger enemies and harsher environments appear. Every challenge becomes a step toward becoming the island's true winner.",
    gameFeaturesKicker: "FEATURE MATRIX",
    gameFeaturesTitle: "Game Features",
    gameFeaturesLead:
      "Survival, allies, ruins, crafting, combat, and puzzle discovery combine into one looping island adventure.",
    gameShowcase1Title: "Recruit Allies",
    gameShowcase1Body: "Gather reliable partners and face survival challenges together.",
    gameShowcase2Title: "Eye Power",
    gameShowcase2Body: "Read enemy weaknesses and outsmart powerful threats.",
    gameShowcase3Title: "Unknown Adventure",
    gameShowcase3Body: "Enter caves and abandoned structures to uncover island secrets.",
    gameFeature1Title: "Desperate Island",
    gameFeature1Body: "Manage hunger, thirst, fatigue, and limited resources to establish a foothold.",
    gameFeature2Title: "Recruit Allies",
    gameFeature2Body: "Find reliable companions and combine their unique abilities against danger.",
    gameFeature3Title: "Unknown Adventure",
    gameFeature3Body: "Explore hidden corners, dark caves, and ruins that reveal the island's truth.",
    gameFeature4Title: "Eye Power",
    gameFeature4Body: "Use special vision to detect enemy weaknesses and improve combat strategy.",
    gameFeature5Title: "Secret Scrolls",
    gameFeature5Body: "Collect ancient knowledge, learn powerful skills, and master decisive techniques.",
    gameFeature6Title: "Crafting System",
    gameFeature6Body: "Gather materials to create tools, weapons, gear, and survival supplies.",
    gameFeature7Title: "Dangerous Trials",
    gameFeature7Body: "Fight wild beasts and island threats where every battle can decide survival.",
    gameFeature8Title: "Skill Growth",
    gameFeature8Body: "Improve skills through practice, unlock recipes, and become a survival expert.",
    gameFeature9Title: "Puzzle Elements",
    gameFeature9Body: "Solve island mysteries and discover how each puzzle connects to the story.",
    gameGalleryKicker: "VISUAL ARCHIVE",
    gameGalleryTitle: "Game Screens",
    gameGalleryLead: "Use the arrows or horizontal filmstrip to scan key island scenes.",
    gameGallery1Title: "Desperate Island",
    gameGallery1Body: "Compete for resources and fight for a way out.",
    gameGallery2Title: "Recruit Allies",
    gameGallery2Body: "Build a reliable team for the hardest survival loops.",
    gameGallery3Title: "Eye Power",
    gameGallery3Body: "Break through danger by reading enemy weaknesses.",
    gameGallery4Title: "Unknown Adventure",
    gameGallery4Body: "Explore caves and ruins to reveal the island's hidden past.",
    gameGallery5Title: "Secret Scrolls",
    gameGallery5Body: "Study ancient scrolls and move toward ruling the wilds.",
    gameCtaKicker: "READY FOR THE ISLAND",
    gameCtaTitle: "Step onto the island and win your survival run.",
    gameCtaLead: "Return to the product matrix and explore more dynamic worlds from Singularity Games.",
    gameCtaButton: "Back to Products",
  },
  ja: {
    navHome: "ホーム",
    navProducts: "プロダクト",
    navAbout: "私たちについて",
    navContact: "お問い合わせ",
    breadcrumbHome: "ホーム",
    heroEyebrow: "コアバリュー",
    heroAria: "無限に広がるゲーム世界を探索",
    heroTitleTop: "無限に広がる",
    heroTitleBottom: "ゲーム世界",
    heroLead:
      "Singularity Games は、革新的で没入感のあるゲーム体験と AI アプリケーションを創造します。",
    heroPrimary: "プロダクトを見る",
    heroSecondary: "私たちについて",
    signalGames: "ゲームと AI プロダクト",
    signalWorlds: "動的ワールドノード",
    signalEngine: "AI ネイティブ体験",
    productsKicker: "プロダクト",
    productsTitle: "私たちのプロダクト",
    productsLead: "",
    tagFeatured: "注目プロダクト",
    product1Title: "ファンタジーアイランド",
    product1Body: "神秘的な島を探索し、これまでにない冒険と挑戦を体験できます。",
    product2Title: "AI 対話ペインター",
    product2Body: "先進的な AI 技術で、アイデアを美しいアート作品へ変換します。",
    product3Title: "アイランドウィナー",
    product3Body: "謎の島を舞台に、探索者としてサバイバルに挑むアドベンチャーゲームです。",
    product4Body:
      "日本語シーンで自然に交流できる、チャットキーボードと AI チャットアシスタントです。",
    product5Body:
      "中小規模の不動産会社向けに、物件、賃貸、契約を一元管理する SaaS システムです。",
    product6Title: "毒舌坊主",
    product6Body:
      "20以上のキャラクター、強化された 3D 表現、会話チャレンジを備えたリアル対戦パーティーゲームです。",
    product7Title: "ヘビ・もぐもぐ",
    product7Body:
      "ネオン風のカジュアルスネーク。エネルギーポイントを食べて成長し、加速と位置取りで制限時間チャレンジをより長く生き残ります。",
    product8Title: "その他のプロダクト",
    product8Body: "さらに多くのゲームと AI アプリケーションを開発中です。どうぞご期待ください。",
    learnMore: "詳しく見る",
    seeAll: "すべて見る",
    aboutKicker: "ABOUT SINGULARITY",
    aboutTitle: "私たちについて",
    aboutLead: "Singularity Games の物語、使命、チームをご紹介します。",
    storyKicker: "OUR STORY",
    storyTitle: "私たちの物語",
    storyBody1:
      "Singularity Games は 2023 年、ゲームと人工知能を愛する技術者とクリエイターによって設立されました。",
    storyBody2:
      "創業チームはゲーム開発、AI、ユーザー体験設計に深い経験を持ち、先端技術とエンターテインメントを融合する夢から歩み始めました。",
    storyBody3:
      "小さなスタートアップから成長するテクノロジーカンパニーへ。私たちのプロダクトは国内市場で成果を上げ、国際市場へも広がっています。",
    storyMetric1: "設立年",
    storyMetric2: "プロダクト群",
    storyMetric3: "ライブノード",
    valuesKicker: "MISSION & VALUES",
    valuesTitle: "使命と価値観",
    valuesLead:
      "革新的なゲームと AI アプリケーションを通じて、デジタルライフを豊かにし、創造力を刺激し、人と技術をつなぎます。",
    value1Title: "イノベーション",
    value1Body: "新しい技術とアイデアを探求し、従来の枠を超えて業界の可能性を広げます。",
    value2Title: "ユーザー第一",
    value2Body: "ユーザーのニーズを中心に、直感的で楽しく価値ある体験をつくります。",
    value3Title: "卓越した品質",
    value3Body: "細部まで磨き込み、すべてのプロダクトで高い品質を追求します。",
    value4Title: "共創と共栄",
    value4Body: "チームワークとパートナーシップを大切にし、より大きな価値を共に生み出します。",
    teamKicker: "TEAM CONSTELLATION",
    teamTitle: "私たちのチーム",
    teamLead:
      "多様な背景を持つ情熱的なメンバーが、驚きのあるデジタル体験を創るという共通目標でつながっています。",
    filterAll: "すべて",
    filterManagement: "経営",
    filterTech: "技術",
    filterCreative: "創造",
    filterOps: "運営",
    teamReadMore: "職務を見る",
    team1Name: "創業者 & CEO",
    team1Group: "経営 / 戦略",
    team2Name: "最高技術責任者",
    team2Group: "技術 / アーキテクチャ",
    team3Name: "クリエイティブディレクター",
    team3Group: "創造 / 世界観",
    team4Name: "ゲームサーバー責任者",
    team4Group: "技術 / サーバー",
    team5Name: "ゲームクライアント責任者",
    team5Group: "技術 / クライアント",
    team6Name: "アートディレクター",
    team6Group: "アート / ビジュアル",
    team7Name: "ゲームデザイン責任者",
    team7Group: "企画 / システム",
    team8Name: "AI ゲームツール開発責任者",
    team8Group: "AI / ツールチェーン",
    contactKicker: "TECHNICAL SUPPORT",
    contactTitle: "お問い合わせ",
    contactLead: "ゲームサポート / 不具合報告 / 機能リクエスト",
    contactBlock1Label: "SUPPORT PORTAL",
    contactBlock1Title: "お問い合わせ",
    contactBlock1Subtitle: "ゲームに関する質問、不具合報告、リクエスト",
    contactPrimaryBody:
      "ゲームに関するご質問、不具合報告、ご要望は、下記のメールアドレスまでお送りください。",
    contactSupportBody:
      "ご質問、不具合報告、機能リクエストは、以下のメールアドレスまでご連絡ください：",
    contactCopy: "メールをコピー",
    contactCopyIdle: "メールアドレス準備完了",
    contactCopySuccess: "メールアドレスをコピーしました",
    contactCopyError: "手動でメールアドレスをコピーしてください",
    contactBlock2Label: "LANGUAGE MATRIX",
    contactLanguagesTitle: "対応言語",
    contactLanguagesValue: "日本語 / 中文 / English",
    contactBlock3Label: "DEVELOPER NODE",
    contactDeveloperTitle: "開発者",
    contactDeveloperValue: "漢聯ゲーム",
    contactFooterNote: "『野蛮僧侶』 © 2026 漢聯ゲーム",
    contactStatusLabel: "SUPPORT CHANNEL / COPY STATUS",
    advantagesKicker: "選ばれる理由",
    advantagesTitle: "選ばれる理由",
    adv1Title: "革新的なゲーム体験",
    adv1Body: "独自性と楽しさを備えたゲーム体験を創り、プレイヤーに新しい没入感を届けます。",
    adv2Title: "先進 AI 技術",
    adv2Body: "最先端の AI 技術を活用し、知的でパーソナライズされたサービスと体験を提供します。",
    adv3Title: "ユーザー第一",
    adv3Body: "ユーザー体験を最優先に考え、実際のニーズに合わせてプロダクトを継続的に改善します。",
    ctaKicker: "Ready Player Next",
    ctaTitle: "冒険を始める準備はできましたか？",
    ctaLead: "今すぐプロダクトを探索し、忘れられない旅を始めましょう。",
    ctaButton: "今すぐ探索",
    footerTagline: "革新的なゲームと AI 体験のリーダー",
    footerContact: "お問い合わせ",
    gameKicker: "SURVIVAL ADVENTURE",
    gameTitle: "アイランドウィナー",
    gameLead:
      "謎の荒島で生き残り、仲間を集め、秘密を解き明かす放置系アドベンチャーゲームです。",
    gamePrimaryAction: "ゲーム特色を見る",
    gameSecondaryAction: "ゲーム画面",
    gameSignal1: "荒島サバイバル",
    gameSignal2: "コアシステム",
    gameSignal3: "探索と成長",
    gameStoryKicker: "GAME BACKGROUND",
    gameStoryTitle: "ゲーム背景",
    gameStoryBody1:
      "この挑戦的な放置系アドベンチャーで、あなたは世界の未解決の謎を追う探索者です。突然の嵐に船を飲み込まれ、過酷な試練が始まります。",
    gameStoryBody2:
      "目を覚ますと、見知らぬ島の浜辺にひとり。穏やかな景色の裏には、凶暴な獣、未知の遺跡、限られた資源が潜んでいます。",
    gameStoryBody3:
      "資源を管理し、避難所を建て、道具を作り、仲間を集めながら危険な荒野で生き延びます。探索を重ねるほど島の秘密が明らかになります。",
    gameStoryBody4:
      "スキルが成長するほど、より強い敵と厳しい環境が現れます。すべての挑戦が、荒島の真の勝者へ近づく一歩です。",
    gameFeaturesKicker: "FEATURE MATRIX",
    gameFeaturesTitle: "ゲーム特色",
    gameFeaturesLead:
      "サバイバル、仲間集め、遺跡探索、クラフト、戦闘、謎解きが一体となった荒島アドベンチャーです。",
    gameShowcase1Title: "仲間を集める",
    gameShowcase1Body: "頼れる仲間を集め、絶境のサバイバルに挑みます。",
    gameShowcase2Title: "天眼の力",
    gameShowcase2Body: "敵の弱点を見抜き、強敵に知略で立ち向かいます。",
    gameShowcase3Title: "未知の冒険",
    gameShowcase3Body: "洞窟や廃墟に踏み込み、島に隠された秘密を解き明かします。",
    gameFeature1Title: "絶境孤島",
    gameFeature1Body: "飢え、渇き、疲労と限られた資源を管理し、島で生存基盤を築きます。",
    gameFeature2Title: "仲間募集",
    gameFeature2Body: "頼れる仲間を探し、各キャラクターの能力を組み合わせて危機に対応します。",
    gameFeature3Title: "未知の冒険",
    gameFeature3Body: "島の奥地、暗い洞窟、廃墟を探索し、隠された真実に近づきます。",
    gameFeature4Title: "天眼の力",
    gameFeature4Body: "特殊な力で敵の弱点を見抜き、戦略的な戦闘で能力を高めます。",
    gameFeature5Title: "万巻秘典",
    gameFeature5Body: "古い秘典と知識を集め、強力なスキルを習得して勝機をつかみます。",
    gameFeature6Title: "クラフト",
    gameFeature6Body: "材料を集め、道具、武器、装備、生存用品を作り戦闘力を高めます。",
    gameFeature7Title: "危険な挑戦",
    gameFeature7Body: "島の獣や危険生物と戦い、すべての戦闘で生死の選択を迫られます。",
    gameFeature8Title: "スキル成長",
    gameFeature8Body: "実践を通じてスキルを伸ばし、新しいレシピと能力を解放します。",
    gameFeature9Title: "謎解き要素",
    gameFeature9Body: "島の謎と秘密を解き、遺跡の真相と物語のつながりを発見します。",
    gameGalleryKicker: "VISUAL ARCHIVE",
    gameGalleryTitle: "ゲーム画面",
    gameGalleryLead: "左右の矢印または横型フィルムストリップで、荒島の主要シーンを切り替えられます。",
    gameGallery1Title: "絶境孤島",
    gameGallery1Body: "資源を奪い合い、孤島からの突破口を探します。",
    gameGallery2Title: "仲間募集",
    gameGallery2Body: "頼れる仲間とチームを組み、過酷な生存に挑みます。",
    gameGallery3Title: "天眼の力",
    gameGallery3Body: "強敵の弱点を見抜き、危機を突破します。",
    gameGallery4Title: "未知の冒険",
    gameGallery4Body: "洞窟と遺跡を探索し、島の隠された過去を明らかにします。",
    gameGallery5Title: "万巻秘典",
    gameGallery5Body: "古代の秘典を学び、荒野を制する力を得ます。",
    gameCtaKicker: "READY FOR THE ISLAND",
    gameCtaTitle: "荒島へ踏み出し、生存戦に勝利しよう。",
    gameCtaLead: "プロダクト一覧に戻り、Singularity Games のさらに多くの世界を探索しましょう。",
    gameCtaButton: "プロダクトへ戻る",
  },
};

const fantasyTranslations = {
  zh: {
    fantasyKicker: "FANTASY ISLAND",
    fantasyTitle: "奇幻岛屿",
    fantasyLead: "探索神秘的奇幻岛屿，体验前所未有的冒险与挑战。",
    fantasyPrimaryAction: "游戏介绍",
    fantasySecondaryAction: "游戏截图",
    fantasySignal1: "奇幻世界",
    fantasySignal2: "核心特色",
    fantasySignal3: "实机画面",
    fantasyStoryKicker: "GAME INTRO",
    fantasyStoryTitle: "游戏介绍",
    fantasyStoryBody1:
      "《奇幻岛屿》是一款充满魔法与奇幻元素的冒险游戏，玩家将踏上一段探索神秘岛屿的旅程，揭开岛上隐藏的秘密。",
    fantasyStoryBody2:
      "在这个奇幻世界中，岛屿上栖息着各种神奇生物，隐藏着古老的魔法遗迹和宝藏。玩家需要与岛上的居民交流，完成各种任务，解开谜题，逐步揭示岛屿的真相。",
    fantasyStoryBody3:
      "游戏融合了角色扮演、解谜和战斗元素，为玩家提供丰富多样的游戏体验。每个玩家的选择都将影响游戏的发展方向，创造属于自己的独特冒险故事。",
    fantasyLaunchKicker: "LAUNCH SIGNAL",
    fantasyLaunchTitle: "即将推出",
    fantasyLaunchBody: "《奇幻岛屿》正在紧张开发中，敬请期待！",
    fantasySubscribeLabel: "邮箱地址",
    fantasySubscribePlaceholder: "您的邮箱地址",
    fantasySubscribeButton: "订阅",
    fantasySubscribeIdle: "留下邮箱，获取游戏最新动态和独家内容。",
    fantasySubscribeSuccess: "订阅信号已接收，感谢关注！",
    fantasySubscribeInvalid: "请输入有效的邮箱地址。",
    fantasyFeaturesKicker: "FEATURE MATRIX",
    fantasyFeaturesTitle: "游戏特色",
    fantasyFeaturesLead:
      "奇幻探索、角色互动、策略战斗与解谜挑战组成这座岛屿的核心体验。",
    fantasyShowcase1Title: "奇幻世界",
    fantasyShowcase1Body: "探索充满魔法与奇迹的岛屿，发现隐藏的奥秘。",
    fantasyShowcase2Title: "角色互动",
    fantasyShowcase2Body: "与岛上居民建立关系，完成任务并影响世界走向。",
    fantasyShowcase3Title: "解谜挑战",
    fantasyShowcase3Body: "进入遗迹与洞穴，解开秘密并解锁新区域。",
    fantasyFeature1Title: "奇幻世界",
    fantasyFeature1Body: "探索充满魔法与奇迹的岛屿，与神奇生物互动，发现隐藏的奥秘。",
    fantasyFeature2Title: "引人入胜的故事",
    fantasyFeature2Body: "体验精心编写的故事情节，跟随主角揭开岛屿的神秘面纱和自己的命运。",
    fantasyFeature3Title: "策略性战斗",
    fantasyFeature3Body: "参与回合制战斗，运用各种技能和策略，击败强大的敌人。",
    fantasyFeature4Title: "解谜挑战",
    fantasyFeature4Body: "解开各种谜题和挑战，获取宝藏和解锁新区域。",
    fantasyFeature5Title: "角色互动",
    fantasyFeature5Body: "与岛上的居民建立关系，完成任务，影响游戏世界的发展。",
    fantasyFeature6Title: "精美画面",
    fantasyFeature6Body: "欣赏精心设计的游戏场景和角色，沉浸在奇幻的视觉盛宴中。",
    fantasyGalleryKicker: "VISUAL ARCHIVE",
    fantasyGalleryTitle: "游戏截图",
    fantasyGalleryLead: "点击缩略图切换预览，浏览海岛探索、营地、雪境、洞穴和生活系统。",
    fantasyGallery1Title: "海岛远眺",
    fantasyGallery1Body: "从高处俯瞰蔚蓝海面，旅程从神秘群岛开始。",
    fantasyGallery2Title: "俯瞰岛屿",
    fantasyGallery2Body: "山脉、瀑布和海岸线组成开放探索的奇幻地图。",
    fantasyGallery3Title: "花野小径",
    fantasyGallery3Body: "阳光穿过花海与森林，角色在自然中发现线索。",
    fantasyGallery4Title: "花海日落",
    fantasyGallery4Body: "黄昏光线铺满草地，柔和场景强化冒险的情绪张力。",
    fantasyGallery5Title: "雪境村落",
    fantasyGallery5Body: "从温暖海岸进入雪境聚落，环境变化带来新的任务。",
    fantasyGallery6Title: "山脚营地",
    fantasyGallery6Body: "在群山脚下建立据点，与岛民和环境产生更多连接。",
    fantasyGallery7Title: "湖畔日出",
    fantasyGallery7Body: "清晨湖面与远山形成开阔的探索目标。",
    fantasyGallery8Title: "村落草场",
    fantasyGallery8Body: "开放村落场景承载主线任务、资源点和角色互动。",
    fantasyGallery9Title: "海滩资源",
    fantasyGallery9Body: "海滩与浅水区域隐藏收集物和探索事件。",
    fantasyGallery10Title: "水晶洞穴",
    fantasyGallery10Body: "深入发光洞穴，追踪遗迹能量与未知谜题。",
    fantasyGallery11Title: "种植系统",
    fantasyGallery11Body: "种植、收获和资源管理让岛屿生活更有节奏。",
    fantasyGallery12Title: "烹饪系统",
    fantasyGallery12Body: "通过食材与配方制作料理，为探索补充状态。",
    fantasyGallery13Title: "温馨房间",
    fantasyGallery13Body: "室内空间展示生活化的一面，也暗示可成长的据点系统。",
    fantasyCtaKicker: "READY FOR THE ISLAND",
    fantasyCtaTitle: "踏上奇幻岛屿，开启你的下一段旅程。",
    fantasyCtaLead: "返回产品矩阵，继续探索 Singularity Games 的更多动态世界。",
    fantasyCtaButton: "返回产品",
  },
  en: {
    fantasyKicker: "FANTASY ISLAND",
    fantasyTitle: "Fantasy Islands",
    fantasyLead: "Explore mysterious islands and experience a new generation of adventure and challenge.",
    fantasyPrimaryAction: "Game Intro",
    fantasySecondaryAction: "Screenshots",
    fantasySignal1: "Fantasy World",
    fantasySignal2: "Core Features",
    fantasySignal3: "Gameplay Screens",
    fantasyStoryKicker: "GAME INTRO",
    fantasyStoryTitle: "Game Intro",
    fantasyStoryBody1:
      "Fantasy Islands is an adventure game filled with magic and wonder, sending players on a journey to explore mysterious islands and uncover their hidden secrets.",
    fantasyStoryBody2:
      "Across this fantasy world, magical creatures, ancient ruins, and hidden treasures wait beneath the surface. Players talk with residents, complete quests, solve puzzles, and gradually reveal the truth of the islands.",
    fantasyStoryBody3:
      "The game blends role-playing, puzzle solving, and combat into a rich adventure. Player choices influence the direction of the world and create a personal story of discovery.",
    fantasyLaunchKicker: "LAUNCH SIGNAL",
    fantasyLaunchTitle: "Coming Soon",
    fantasyLaunchBody: "Fantasy Islands is in active development. Stay tuned.",
    fantasySubscribeLabel: "Email address",
    fantasySubscribePlaceholder: "Your email address",
    fantasySubscribeButton: "Subscribe",
    fantasySubscribeIdle: "Leave your email for development updates and exclusive content.",
    fantasySubscribeSuccess: "Signal received. Thanks for following.",
    fantasySubscribeInvalid: "Please enter a valid email address.",
    fantasyFeaturesKicker: "FEATURE MATRIX",
    fantasyFeaturesTitle: "Game Features",
    fantasyFeaturesLead:
      "Fantasy exploration, character bonds, tactical combat, and puzzle discovery shape the island experience.",
    fantasyShowcase1Title: "Fantasy World",
    fantasyShowcase1Body: "Explore islands full of magic, wonder, and hidden mysteries.",
    fantasyShowcase2Title: "Character Bonds",
    fantasyShowcase2Body: "Build relationships, complete quests, and influence the world.",
    fantasyShowcase3Title: "Puzzle Trials",
    fantasyShowcase3Body: "Enter ruins and caves to unlock secrets and new areas.",
    fantasyFeature1Title: "Fantasy World",
    fantasyFeature1Body: "Explore islands filled with magic and miracles, interact with strange creatures, and discover hidden mysteries.",
    fantasyFeature2Title: "Engaging Story",
    fantasyFeature2Body: "Follow a carefully written story and uncover the island's secrets alongside your own fate.",
    fantasyFeature3Title: "Tactical Combat",
    fantasyFeature3Body: "Join turn-based battles, use skills and strategy, and defeat powerful enemies.",
    fantasyFeature4Title: "Puzzle Challenges",
    fantasyFeature4Body: "Solve puzzles and trials to find treasure and unlock new regions.",
    fantasyFeature5Title: "Character Interaction",
    fantasyFeature5Body: "Build relationships with island residents, complete quests, and change the world.",
    fantasyFeature6Title: "Beautiful Visuals",
    fantasyFeature6Body: "Enjoy carefully designed environments and characters in a vivid fantasy world.",
    fantasyGalleryKicker: "VISUAL ARCHIVE",
    fantasyGalleryTitle: "Game Screens",
    fantasyGalleryLead: "Click thumbnails to preview island exploration, camps, snowfields, caves, and life systems.",
    fantasyGallery1Title: "Ocean Lookout",
    fantasyGallery1Body: "A blue horizon opens the journey across the mysterious archipelago.",
    fantasyGallery2Title: "Island Overview",
    fantasyGallery2Body: "Mountains, waterfalls, and coastlines define an open fantasy map.",
    fantasyGallery3Title: "Flower Path",
    fantasyGallery3Body: "Sunlit flowers and forest paths lead the player toward hidden clues.",
    fantasyGallery4Title: "Sunset Field",
    fantasyGallery4Body: "Warm dusk light gives the adventure a softer emotional pulse.",
    fantasyGallery5Title: "Snow Village",
    fantasyGallery5Body: "From warm shores to snowy settlements, every biome brings fresh quests.",
    fantasyGallery6Title: "Mountain Camp",
    fantasyGallery6Body: "Build connections with residents and the environment below the mountain.",
    fantasyGallery7Title: "Lake Sunrise",
    fantasyGallery7Body: "A quiet lake and distant peaks create a clear exploration goal.",
    fantasyGallery8Title: "Village Field",
    fantasyGallery8Body: "Open village areas carry quests, resource nodes, and character interaction.",
    fantasyGallery9Title: "Beach Resources",
    fantasyGallery9Body: "The beach and shallow water hide collectibles and small events.",
    fantasyGallery10Title: "Crystal Cave",
    fantasyGallery10Body: "Follow glowing energy through caves and ancient puzzles.",
    fantasyGallery11Title: "Farming System",
    fantasyGallery11Body: "Planting, harvesting, and resource loops add rhythm to island life.",
    fantasyGallery12Title: "Cooking System",
    fantasyGallery12Body: "Craft meals from ingredients and recipes to support exploration.",
    fantasyGallery13Title: "Cozy Room",
    fantasyGallery13Body: "Interior spaces reveal a more personal, expandable base experience.",
    fantasyCtaKicker: "READY FOR THE ISLAND",
    fantasyCtaTitle: "Step onto the islands and begin your next journey.",
    fantasyCtaLead: "Return to the product matrix and explore more dynamic worlds from Singularity Games.",
    fantasyCtaButton: "Back to Products",
  },
  ja: {
    fantasyKicker: "FANTASY ISLAND",
    fantasyTitle: "ファンタジーアイランド",
    fantasyLead: "神秘的な島を探索し、これまでにない冒険と挑戦を体験できます。",
    fantasyPrimaryAction: "ゲーム紹介",
    fantasySecondaryAction: "ゲーム画面",
    fantasySignal1: "幻想世界",
    fantasySignal2: "主要特色",
    fantasySignal3: "実機画面",
    fantasyStoryKicker: "GAME INTRO",
    fantasyStoryTitle: "ゲーム紹介",
    fantasyStoryBody1:
      "『ファンタジーアイランド』は、魔法と幻想に満ちた冒険ゲームです。プレイヤーは神秘的な島々を探索し、隠された秘密を解き明かしていきます。",
    fantasyStoryBody2:
      "この幻想世界には、不思議な生き物、古代の魔法遺跡、秘宝が眠っています。島の住民と交流し、任務を達成し、謎を解きながら島の真実へ近づきます。",
    fantasyStoryBody3:
      "ロールプレイ、謎解き、戦闘を融合した豊かな体験を提供します。プレイヤーの選択が世界の行方に影響し、自分だけの冒険物語を生み出します。",
    fantasyLaunchKicker: "LAUNCH SIGNAL",
    fantasyLaunchTitle: "近日公開",
    fantasyLaunchBody: "『ファンタジーアイランド』は鋭意開発中です。どうぞご期待ください。",
    fantasySubscribeLabel: "メールアドレス",
    fantasySubscribePlaceholder: "メールアドレス",
    fantasySubscribeButton: "登録",
    fantasySubscribeIdle: "メールを残すと、開発情報と限定コンテンツを受け取れます。",
    fantasySubscribeSuccess: "登録シグナルを受信しました。ありがとうございます。",
    fantasySubscribeInvalid: "有効なメールアドレスを入力してください。",
    fantasyFeaturesKicker: "FEATURE MATRIX",
    fantasyFeaturesTitle: "ゲーム特色",
    fantasyFeaturesLead:
      "幻想探索、キャラクター交流、戦略バトル、謎解きが島の中核体験をつくります。",
    fantasyShowcase1Title: "幻想世界",
    fantasyShowcase1Body: "魔法と奇跡に満ちた島を探索し、隠された秘密を見つけます。",
    fantasyShowcase2Title: "キャラクター交流",
    fantasyShowcase2Body: "島の住民と関係を築き、任務を達成して世界に影響を与えます。",
    fantasyShowcase3Title: "謎解き挑戦",
    fantasyShowcase3Body: "遺跡と洞窟に入り、秘密と新しい地域を解放します。",
    fantasyFeature1Title: "幻想世界",
    fantasyFeature1Body: "魔法と奇跡に満ちた島々を探索し、不思議な生き物と交流して隠された謎を発見します。",
    fantasyFeature2Title: "心を引き込む物語",
    fantasyFeature2Body: "丁寧に描かれた物語をたどり、島の秘密と自分自身の運命を明らかにします。",
    fantasyFeature3Title: "戦略バトル",
    fantasyFeature3Body: "ターン制バトルでスキルと戦略を使い、強大な敵に挑みます。",
    fantasyFeature4Title: "謎解き挑戦",
    fantasyFeature4Body: "さまざまな謎と試練を解き、宝物や新しい地域を解放します。",
    fantasyFeature5Title: "キャラクター交流",
    fantasyFeature5Body: "島の住民と関係を築き、任務を達成してゲーム世界の変化に関わります。",
    fantasyFeature6Title: "美しい画面",
    fantasyFeature6Body: "丁寧に設計された風景とキャラクターで、幻想的なビジュアル体験に没入できます。",
    fantasyGalleryKicker: "VISUAL ARCHIVE",
    fantasyGalleryTitle: "ゲーム画面",
    fantasyGalleryLead: "サムネイルをクリックして、島の探索、拠点、雪原、洞窟、生活システムを確認できます。",
    fantasyGallery1Title: "海の眺望",
    fantasyGallery1Body: "青い海を見渡す場所から、神秘的な群島への旅が始まります。",
    fantasyGallery2Title: "島の俯瞰",
    fantasyGallery2Body: "山、滝、海岸線が開放的な幻想マップを形づくります。",
    fantasyGallery3Title: "花の小径",
    fantasyGallery3Body: "花畑と森の道が、隠された手がかりへ導きます。",
    fantasyGallery4Title: "夕暮れの花野",
    fantasyGallery4Body: "柔らかな夕暮れの光が、冒険に温かな表情を与えます。",
    fantasyGallery5Title: "雪の村",
    fantasyGallery5Body: "暖かな海辺から雪の集落へ、環境ごとに新しい任務が待っています。",
    fantasyGallery6Title: "山麓の拠点",
    fantasyGallery6Body: "山のふもとで住民や環境とつながり、物語を進めます。",
    fantasyGallery7Title: "湖畔の日の出",
    fantasyGallery7Body: "静かな湖と遠い山々が、次の探索目標を示します。",
    fantasyGallery8Title: "村の草原",
    fantasyGallery8Body: "開けた村エリアには任務、資源、キャラクター交流が広がります。",
    fantasyGallery9Title: "浜辺の資源",
    fantasyGallery9Body: "浜辺と浅瀬には収集物や小さなイベントが隠れています。",
    fantasyGallery10Title: "水晶洞窟",
    fantasyGallery10Body: "輝くエネルギーを追い、洞窟と古代の謎へ踏み込みます。",
    fantasyGallery11Title: "栽培システム",
    fantasyGallery11Body: "植える、収穫する、管理する流れが島での生活にリズムを与えます。",
    fantasyGallery12Title: "料理システム",
    fantasyGallery12Body: "食材とレシピから料理を作り、探索を支えます。",
    fantasyGallery13Title: "居心地のよい部屋",
    fantasyGallery13Body: "室内空間は、成長していく拠点体験の一面を示します。",
    fantasyCtaKicker: "READY FOR THE ISLAND",
    fantasyCtaTitle: "幻想の島へ踏み出し、次の旅を始めよう。",
    fantasyCtaLead: "プロダクト一覧に戻り、Singularity Games のさらに多くの世界を探索しましょう。",
    fantasyCtaButton: "プロダクトへ戻る",
  },
};

Object.entries(fantasyTranslations).forEach(([lang, dictionary]) => {
  Object.assign(translations[lang], dictionary);
});

const saylyTranslations = {
  zh: {
    saylyKicker: "SAYLY TRANSLATION KEYBOARD",
    saylyTitle: "SayLy - 翻译键盘",
    saylyLead: "不懂长日语也没关系。只需输入，即刻转换为自然日语。",
    saylyPrimaryAction: "产品介绍",
    saylySecondaryAction: "价格方案",
    saylySignal1: "离线翻译条目",
    saylySignal2: "对话场景",
    saylySignal3: "实时润色",
    saylyIntroKicker: "PRODUCT INTRO",
    saylyIntroTitle: "产品介绍",
    saylyIntroBody1:
      "SayLy 是一款专为在日外国人设计的翻译键盘应用。只需用中文或英文输入，即可立即转换为适用于 LINE、WhatsApp、iMessage 等消息应用的自然日语表达。",
    saylyIntroBody2:
      "无需复制粘贴。只需切换到 SayLy 键盘，轻触即可替换文本。支持日常、商务、情侣、敬语、简洁 5 种对话场景，提供符合场景的自然日语表达。",
    saylyIntroBody3:
      "内置 9,600+ 条离线翻译数据库，搭载 Google Gemini API 的 AI 实时翻译。即使没有网络也能进行基本翻译，AI 翻译实现更准确、更自然的表达。",
    saylyDemoKicker: "LIVE CONVERSION",
    saylyDemoSourceLabel: "输入",
    saylyDemoSource: "Can we meet at 11 tomorrow?",
    saylyTonePolite: "敬语",
    saylyToneCasual: "日常",
    saylyToneBusiness: "商务",
    saylyToneShort: "简洁",
    saylyToneRomance: "情侣",
    saylyDemoPoliteOutput: "明日11時にお会いできますでしょうか。",
    saylyDemoCasualOutput: "明日11時に会える？",
    saylyDemoBusinessOutput: "明日11時にお打ち合わせ可能でしょうか。",
    saylyDemoShortOutput: "明日11時、会えますか？",
    saylyDemoRomanceOutput: "明日11時に会えたら嬉しいな。",
    saylyFeaturesKicker: "FEATURE MATRIX",
    saylyFeaturesTitle: "产品特色",
    saylyFeaturesLead: "把翻译、语境、离线数据库和 AI 润色压缩进一个随手可用的聊天键盘。",
    saylyFeature1Title: "翻译键盘",
    saylyFeature1Body: "适用于任何应用的键盘扩展。无需复制粘贴，一键替换为翻译文本。",
    saylyFeature2Title: "5种对话场景",
    saylyFeature2Body: "日常、商务、情侣、敬语、简洁多种模式，为每种场景提供最合适的日语表达。",
    saylyFeature3Title: "离线数据库",
    saylyFeature3Body: "预装 9,600+ 条翻译条目，无网络连接也能进行基本翻译。",
    saylyFeature4Title: "AI实时翻译",
    saylyFeature4Body: "基于 Google Gemini API 的 AI 翻译，理解上下文，实现准确自然的日语表达。",
    saylyFeature5Title: "多语言支持",
    saylyFeature5Body: "支持中文和英文输入。界面提供英语和中文双语版本。",
    saylyFeature6Title: "快捷回复",
    saylyFeature6Body: "将常用短语注册为快捷方式，快速回复功能让你快速响应。",
    saylyStepsKicker: "HOW IT WORKS",
    saylyStepsTitle: "使用方法",
    saylyStepsLead: "SayLy 的使用非常简单。3 步即可发送自然的日语消息。",
    saylyStep1Title: "切换键盘",
    saylyStep1Body: "按下地球按钮切换到 SayLy 键盘。",
    saylyStep2Title: "用母语输入",
    saylyStep2Body: "用中文或英文输入消息，选择对话场景。",
    saylyStep3Title: "一键转换",
    saylyStep3Body: "轻触翻译结果，输入文本即被替换为自然日语。",
    saylyPricingKicker: "PRICE PLAN",
    saylyPricingTitle: "价格方案",
    saylyPricingLead: "从日常免费翻译开始，需要更高频率时升级 Pro。",
    saylyFreeName: "免费版",
    saylyFreePrice: "免费",
    saylyFreeItem1: "每天20次AI翻译",
    saylyFreeItem2: "9,600+离线翻译",
    saylyFreeItem3: "5种对话场景",
    saylyChooseFree: "选择免费版",
    saylyProName: "Pro版",
    saylyPriceMonth: "/月",
    saylyProItem1: "无限AI翻译",
    saylyProItem2: "9,600+离线翻译",
    saylyProItem3: "5种对话场景",
    saylyProItem4: "优先支持",
    saylyChoosePro: "升级 Pro",
    saylyPlanStatusFree: "已选择免费版，适合先体验 SayLy 的核心翻译能力。",
    saylyPlanStatusPro: "已选择 Pro 版，适合高频聊天、商务沟通和更自然的 AI 表达。",
    saylyDownloadKicker: "DOWNLOAD SIGNAL",
    saylyDownloadTitle: "立即下载SayLy",
    saylyDownloadLead: "让你的日本生活更顺畅。开始自然的日语交流吧！",
    saylyAppStore: "在App Store下载",
    saylyDownloadIdle: "下载通道准备中，可先通过联系我们获取上架通知。",
    saylyDownloadAppStore: "App Store 下载信号已记录。正式上架后可第一时间获取通知。",
    saylyDownloadOfficial: "官网通道已准备，请继续关注 Singularity Games 产品矩阵。",
  },
  en: {
    saylyKicker: "SAYLY TRANSLATION KEYBOARD",
    saylyTitle: "SayLy - Translation Keyboard",
    saylyLead: "No long Japanese needed. Type once and convert it into natural Japanese instantly.",
    saylyPrimaryAction: "Product Intro",
    saylySecondaryAction: "Pricing",
    saylySignal1: "Offline Phrases",
    saylySignal2: "Conversation Modes",
    saylySignal3: "AI Refinement",
    saylyIntroKicker: "PRODUCT INTRO",
    saylyIntroTitle: "Product Intro",
    saylyIntroBody1:
      "SayLy is a translation keyboard app designed for foreigners living in Japan. Type in Chinese or English and instantly convert it into natural Japanese for LINE, WhatsApp, iMessage, and other chat apps.",
    saylyIntroBody2:
      "No copying or pasting. Switch to the SayLy keyboard and replace text with one tap. Five modes cover daily chat, business, romance, honorifics, and concise replies.",
    saylyIntroBody3:
      "SayLy includes 9,600+ offline translation entries and real-time AI translation powered by Google Gemini API. Basic translation works even without a network, while AI makes output more accurate and natural.",
    saylyDemoKicker: "LIVE CONVERSION",
    saylyDemoSourceLabel: "Input",
    saylyDemoSource: "Can we meet at 11 tomorrow?",
    saylyTonePolite: "Polite",
    saylyToneCasual: "Casual",
    saylyToneBusiness: "Business",
    saylyToneShort: "Short",
    saylyToneRomance: "Romance",
    saylyDemoPoliteOutput: "明日11時にお会いできますでしょうか。",
    saylyDemoCasualOutput: "明日11時に会える？",
    saylyDemoBusinessOutput: "明日11時にお打ち合わせ可能でしょうか。",
    saylyDemoShortOutput: "明日11時、会えますか？",
    saylyDemoRomanceOutput: "明日11時に会えたら嬉しいな。",
    saylyFeaturesKicker: "FEATURE MATRIX",
    saylyFeaturesTitle: "Product Features",
    saylyFeaturesLead: "Translation, context, offline data, and AI refinement compressed into a keyboard you can use anywhere.",
    saylyFeature1Title: "Translation Keyboard",
    saylyFeature1Body: "A keyboard extension for any app. Replace text with a translated message without copying and pasting.",
    saylyFeature2Title: "5 Conversation Modes",
    saylyFeature2Body: "Daily, business, romance, honorific, and concise modes shape the right Japanese for each situation.",
    saylyFeature3Title: "Offline Database",
    saylyFeature3Body: "9,600+ built-in translation entries keep basic translation available without a network.",
    saylyFeature4Title: "Real-Time AI",
    saylyFeature4Body: "AI translation powered by Google Gemini API understands context and produces natural Japanese.",
    saylyFeature5Title: "Multilingual Support",
    saylyFeature5Body: "Supports Chinese and English input with bilingual Chinese and English interface options.",
    saylyFeature6Title: "Quick Replies",
    saylyFeature6Body: "Register frequently used phrases as shortcuts and respond faster in everyday chat.",
    saylyStepsKicker: "HOW IT WORKS",
    saylyStepsTitle: "How It Works",
    saylyStepsLead: "SayLy is simple. Three steps are enough to send natural Japanese messages.",
    saylyStep1Title: "Switch Keyboard",
    saylyStep1Body: "Tap the globe key and switch to the SayLy keyboard.",
    saylyStep2Title: "Type Naturally",
    saylyStep2Body: "Type in Chinese or English, then choose the conversation mode.",
    saylyStep3Title: "Convert Once",
    saylyStep3Body: "Tap the result and your text is replaced with natural Japanese.",
    saylyPricingKicker: "PRICE PLAN",
    saylyPricingTitle: "Pricing",
    saylyPricingLead: "Start with free daily translation, then upgrade to Pro for higher-frequency communication.",
    saylyFreeName: "Free",
    saylyFreePrice: "Free",
    saylyFreeItem1: "20 AI translations per day",
    saylyFreeItem2: "9,600+ offline phrases",
    saylyFreeItem3: "5 conversation modes",
    saylyChooseFree: "Choose Free",
    saylyProName: "Pro",
    saylyPriceMonth: "/mo",
    saylyProItem1: "Unlimited AI translation",
    saylyProItem2: "9,600+ offline phrases",
    saylyProItem3: "5 conversation modes",
    saylyProItem4: "Priority support",
    saylyChoosePro: "Upgrade Pro",
    saylyPlanStatusFree: "Free selected. A good way to try SayLy's core translation flow.",
    saylyPlanStatusPro: "Pro selected. Built for frequent chat, business communication, and more natural AI expression.",
    saylyDownloadKicker: "DOWNLOAD SIGNAL",
    saylyDownloadTitle: "Download SayLy",
    saylyDownloadLead: "Make life in Japan smoother. Start communicating in natural Japanese.",
    saylyAppStore: "Download on App Store",
    saylyDownloadIdle: "Download channels are being prepared. Contact us for launch updates.",
    saylyDownloadAppStore: "App Store signal recorded. Launch updates can be sent once the app is live.",
    saylyDownloadOfficial: "Official website channel is ready. Keep an eye on the Singularity Games product matrix.",
  },
  ja: {
    saylyKicker: "SAYLY TRANSLATION KEYBOARD",
    saylyTitle: "SayLy - 翻訳キーボード",
    saylyLead: "長い日本語が苦手でも大丈夫。入力するだけで自然な日本語に変換できます。",
    saylyPrimaryAction: "製品紹介",
    saylySecondaryAction: "料金プラン",
    saylySignal1: "オフライン翻訳項目",
    saylySignal2: "会話シーン",
    saylySignal3: "AI リライト",
    saylyIntroKicker: "PRODUCT INTRO",
    saylyIntroTitle: "製品紹介",
    saylyIntroBody1:
      "SayLy は、日本で暮らす外国人のための翻訳キーボードアプリです。中国語または英語で入力すると、LINE、WhatsApp、iMessage などで使える自然な日本語へすぐ変換できます。",
    saylyIntroBody2:
      "コピーや貼り付けは不要です。SayLy キーボードに切り替え、軽くタップするだけで文章を置き換えられます。日常、ビジネス、恋人、敬語、短文の 5 つの場面に対応します。",
    saylyIntroBody3:
      "9,600 件以上のオフライン翻訳データと、Google Gemini API による AI リアルタイム翻訳を搭載。ネットがなくても基本翻訳ができ、AI でより自然な表現にできます。",
    saylyDemoKicker: "LIVE CONVERSION",
    saylyDemoSourceLabel: "入力",
    saylyDemoSource: "Can we meet at 11 tomorrow?",
    saylyTonePolite: "敬語",
    saylyToneCasual: "日常",
    saylyToneBusiness: "ビジネス",
    saylyToneShort: "短文",
    saylyToneRomance: "恋人",
    saylyDemoPoliteOutput: "明日11時にお会いできますでしょうか。",
    saylyDemoCasualOutput: "明日11時に会える？",
    saylyDemoBusinessOutput: "明日11時にお打ち合わせ可能でしょうか。",
    saylyDemoShortOutput: "明日11時、会えますか？",
    saylyDemoRomanceOutput: "明日11時に会えたら嬉しいな。",
    saylyFeaturesKicker: "FEATURE MATRIX",
    saylyFeaturesTitle: "製品特色",
    saylyFeaturesLead: "翻訳、場面選択、オフラインデータ、AI リライトを、どこでも使えるキーボードにまとめました。",
    saylyFeature1Title: "翻訳キーボード",
    saylyFeature1Body: "どのアプリでも使えるキーボード拡張。コピーや貼り付けなしで翻訳文に置き換えられます。",
    saylyFeature2Title: "5つの会話シーン",
    saylyFeature2Body: "日常、ビジネス、恋人、敬語、短文に合わせて最適な日本語表現を提供します。",
    saylyFeature3Title: "オフラインDB",
    saylyFeature3Body: "9,600 件以上の翻訳項目を内蔵し、ネット接続がなくても基本翻訳ができます。",
    saylyFeature4Title: "AIリアルタイム翻訳",
    saylyFeature4Body: "Google Gemini API による AI 翻訳で、文脈を理解し自然な日本語にします。",
    saylyFeature5Title: "多言語対応",
    saylyFeature5Body: "中国語と英語入力に対応。画面は英語と中国語のバイリンガル版を提供します。",
    saylyFeature6Title: "クイック返信",
    saylyFeature6Body: "よく使う短文をショートカットに登録し、日常チャットへすばやく返信できます。",
    saylyStepsKicker: "HOW IT WORKS",
    saylyStepsTitle: "使い方",
    saylyStepsLead: "SayLy の使い方はとても簡単。3ステップで自然な日本語メッセージを送れます。",
    saylyStep1Title: "キーボード切替",
    saylyStep1Body: "地球儀ボタンを押して SayLy キーボードに切り替えます。",
    saylyStep2Title: "母語で入力",
    saylyStep2Body: "中国語または英語で入力し、会話シーンを選びます。",
    saylyStep3Title: "ワンタップ変換",
    saylyStep3Body: "翻訳結果をタップすると、入力文が自然な日本語に置き換わります。",
    saylyPricingKicker: "PRICE PLAN",
    saylyPricingTitle: "料金プラン",
    saylyPricingLead: "無料の日常翻訳から始め、頻繁に使う場合は Pro にアップグレードできます。",
    saylyFreeName: "無料版",
    saylyFreePrice: "無料",
    saylyFreeItem1: "1日20回のAI翻訳",
    saylyFreeItem2: "9,600+ オフライン翻訳",
    saylyFreeItem3: "5つの会話シーン",
    saylyChooseFree: "無料版を選択",
    saylyProName: "Pro版",
    saylyPriceMonth: "/月",
    saylyProItem1: "無制限AI翻訳",
    saylyProItem2: "9,600+ オフライン翻訳",
    saylyProItem3: "5つの会話シーン",
    saylyProItem4: "優先サポート",
    saylyChoosePro: "Proにアップグレード",
    saylyPlanStatusFree: "無料版を選択中。SayLy の基本翻訳を試すのに最適です。",
    saylyPlanStatusPro: "Pro版を選択中。頻繁なチャット、ビジネス連絡、より自然なAI表現に向いています。",
    saylyDownloadKicker: "DOWNLOAD SIGNAL",
    saylyDownloadTitle: "SayLyを今すぐダウンロード",
    saylyDownloadLead: "日本での生活をもっとスムーズに。自然な日本語交流を始めましょう。",
    saylyAppStore: "App Storeでダウンロード",
    saylyDownloadIdle: "ダウンロード経路を準備中です。お問い合わせから公開通知を受け取れます。",
    saylyDownloadAppStore: "App Store の通知を記録しました。公開後に最新情報を受け取れます。",
    saylyDownloadOfficial: "公式サイトの経路を準備しました。Singularity Games の製品一覧もご確認ください。",
  },
};

Object.entries(saylyTranslations).forEach(([lang, dictionary]) => {
  Object.assign(translations[lang], dictionary);
});

const savageTranslations = {
  zh: {
    savageKicker: "TOXIC MINE PARTY",
    savageTitle: "毒舌坊主 SavageMonk",
    savageLead: "20格、3颗地雷。口才比地雷更危险的坊主们，带来史上最毒舌的地雷探测派对游戏。",
    savagePrimaryAction: "试探地雷盘",
    savageSecondaryAction: "游戏特色",
    savageSignal1: "地雷格局",
    savageSignal2: "隐藏地雷",
    savageSignal3: "个性角色",
    savageIntroKicker: "GAME INTRO",
    savageIntroTitle: "游戏介绍",
    savageIntroBody1:
      "毒舌坊主是一款漫画风视觉与黑色幽默融合的派对型扫雷游戏。玩家需要在 4x5 的 20 个格子里避开 3 颗地雷，找出 17 个安全地带。",
    savageIntroBody2:
      "11 个个性十足的坊主角色会迎接你的挑战。安全格也可能被吐槽轰炸，踩中地雷则会瞬间引爆，让聚会现场笑声不断。",
    savageIntroBody3:
      "派对模式支持朋友轮流操作设备，通过罚游戏、挑战卡与不可预测的特殊角色乱入，把简单规则变成高压又好笑的心理博弈。",
    savageBoardKicker: "LIVE MINE TEST",
    savageBoardTitle: "选择一个格子，看看坊主怎么毒舌。",
    savageBoardIdle: "安全格也不一定安全，至少嘴上不是。",
    savageBoardSafe: "{cell} 号暂时安全。坊主冷笑：运气好，不代表你聪明。",
    savageBoardMine: "{cell} 号踩雷。坊主补刀：这判断力，地雷都嫌你吵。",
    savageBoardReset: "重置地雷盘",
    savageFeaturesKicker: "FEATURE MATRIX",
    savageFeaturesTitle: "游戏特色",
    savageFeaturesLead: "简单规则、强社交压力、随机乱入和三语本地化，构成这款派对扫雷的爽点。",
    savageShowcase1Title: "漫画风视觉",
    savageShowcase1Body: "和纸纹理、夸张表情与爆笑演出，完整复现日本漫画美学。",
    savageShowcase2Title: "派对模式",
    savageShowcase2Body: "朋友轮流操作设备，在地雷、惩罚和挑战卡之间制造气氛。",
    savageRoleKicker: "CHARACTER SWITCH",
    savageRoleNormal: "普通坊主",
    savageRoleSpecial: "特殊坊主",
    savageRoleRare: "稀有坊主",
    savageRoleNormalTitle: "稳扎稳打的普通坊主",
    savageRoleNormalBody: "基础规则最清晰，却会用毒舌提示不断扰乱你的判断。",
    savageRoleSpecialTitle: "无法预测的特殊坊主",
    savageRoleSpecialBody: "会追加地雷、隐藏格子或扔出骰子，让局势突然反转。",
    savageRoleRareTitle: "压迫感拉满的稀有坊主",
    savageRoleRareBody: "低概率登场，台词更毒、技能更狠，是派对气氛的爆点。",
    savageFeature1Title: "扫雷 x 派对",
    savageFeature1Body: "20 格里避开 3 颗地雷，规则简单但压力拉满，清除率只有 0.088%。",
    savageFeature2Title: "11个角色",
    savageFeature2Body: "普通、特殊、稀有角色都拥有专属毒舌台词和技能。",
    savageFeature3Title: "特殊角色乱入",
    savageFeature3Body: "地雷追加、格子隐藏、骰子胜负等随机事件让局势无法预测。",
    savageFeature4Title: "派对模式",
    savageFeature4Body: "围坐轮流挑战，罚游戏和挑战卡让每一次点击都更刺激。",
    savageFeature5Title: "漫画风视觉",
    savageFeature5Body: "夸张表情、爆炸演出与喜剧镜头，强化毒舌世界的荒诞感。",
    savageFeature6Title: "三语支持",
    savageFeature6Body: "中文、日语、英语完整本地化，角色吐槽也能切换语言。",
    savageModeKicker: "GAME LOOP",
    savageModeTitle: "三步进入毒舌局",
    savageModeLead: "从选择角色到踩格判定，整局节奏为朋友聚会而设计。",
    savageStep1Title: "选择坊主",
    savageStep1Body: "选择普通、特殊或稀有角色，决定本轮台词和技能倾向。",
    savageStep2Title: "点击格子",
    savageStep2Body: "在 20 个格子里找安全地带，避开隐藏的 3 颗地雷。",
    savageStep3Title: "接受吐槽",
    savageStep3Body: "安全也会被嘴，踩雷则立刻触发惩罚和爆笑演出。",
    savageDownloadKicker: "DOWNLOAD SIGNAL",
    savageDownloadTitle: "下载毒舌坊主",
    savageDownloadLead: "踩雷？自业自得。把这场毒舌派对带到你的下一次聚会。",
    savageAppStore: "App Store下载",
    savageOfficial: "查看官方网站",
    savageDownloadIdle: "下载通道准备中，可先通过联系我们获取上架通知。",
    savageDownloadAppStore: "App Store 下载信号已记录。正式上架后可第一时间获取通知。",
    savageDownloadOfficial: "官网通道已准备，请继续关注 Singularity Games 产品矩阵。",
    savageBackProducts: "返回产品",
  },
  en: {
    savageKicker: "TOXIC MINE PARTY",
    savageTitle: "SavageMonk",
    savageLead: "20 cells, 3 hidden mines, and monks whose words are sharper than the blast.",
    savagePrimaryAction: "Try Mine Board",
    savageSecondaryAction: "Game Features",
    savageSignal1: "Mine Layout",
    savageSignal2: "Hidden Mines",
    savageSignal3: "Characters",
    savageIntroKicker: "GAME INTRO",
    savageIntroTitle: "Game Intro",
    savageIntroBody1:
      "SavageMonk is a party minesweeper game that mixes manga visuals with black comedy. Avoid 3 mines across a 4x5 board and uncover 17 safe cells.",
    savageIntroBody2:
      "Eleven sharp-tongued monk characters wait for your turn. Even safe cells may trigger a roast, while mines instantly explode the room into laughter.",
    savageIntroBody3:
      "Party mode lets friends pass the device around as penalty games, challenge cards, and special character intrusions turn simple rules into hilarious pressure.",
    savageBoardKicker: "LIVE MINE TEST",
    savageBoardTitle: "Pick a cell and let the monk judge you.",
    savageBoardIdle: "Safe cells are not always safe, at least verbally.",
    savageBoardSafe: "Cell {cell} is safe for now. The monk says: luck is not intelligence.",
    savageBoardMine: "Cell {cell} exploded. The monk says: even the mine heard that bad choice.",
    savageBoardReset: "Reset Board",
    savageFeaturesKicker: "FEATURE MATRIX",
    savageFeaturesTitle: "Game Features",
    savageFeaturesLead: "Simple rules, social pressure, random intrusions, and three-language localization drive the party loop.",
    savageShowcase1Title: "Manga Visuals",
    savageShowcase1Body: "Paper texture, exaggerated expressions, and comic timing shape a Japanese manga-inspired look.",
    savageShowcase2Title: "Party Mode",
    savageShowcase2Body: "Pass the device around and let mines, penalties, and challenge cards build the room energy.",
    savageRoleKicker: "CHARACTER SWITCH",
    savageRoleNormal: "Normal Monk",
    savageRoleSpecial: "Special Monk",
    savageRoleRare: "Rare Monk",
    savageRoleNormalTitle: "Reliable Normal Monk",
    savageRoleNormalBody: "The base rules are clear, but sharp lines keep disturbing your judgment.",
    savageRoleSpecialTitle: "Unpredictable Special Monk",
    savageRoleSpecialBody: "Adds mines, hides cells, or throws dice events that flip the board state.",
    savageRoleRareTitle: "High-Pressure Rare Monk",
    savageRoleRareBody: "Appears rarely, roasts harder, and brings the strongest party moments.",
    savageFeature1Title: "Minesweeper x Party",
    savageFeature1Body: "Avoid 3 mines in 20 cells. The rules are simple, but the clear rate is only 0.088%.",
    savageFeature2Title: "11 Characters",
    savageFeature2Body: "Normal, special, and rare monks each bring unique roast lines and abilities.",
    savageFeature3Title: "Special Intrusions",
    savageFeature3Body: "Extra mines, hidden cells, dice events, and other chaos keep each round unpredictable.",
    savageFeature4Title: "Party Mode",
    savageFeature4Body: "Friends take turns, while penalty games and challenge cards make every click count.",
    savageFeature5Title: "Manga Style",
    savageFeature5Body: "Big expressions, blast effects, and comic framing amplify the absurd world.",
    savageFeature6Title: "Three Languages",
    savageFeature6Body: "Chinese, Japanese, and English localization lets the roast travel across languages.",
    savageModeKicker: "GAME LOOP",
    savageModeTitle: "Three Steps Into The Roast",
    savageModeLead: "From character selection to cell judgment, the whole loop is built for gatherings.",
    savageStep1Title: "Choose Monk",
    savageStep1Body: "Pick a normal, special, or rare monk to shape the round's lines and abilities.",
    savageStep2Title: "Tap A Cell",
    savageStep2Body: "Search 20 cells for safe spaces and avoid the 3 hidden mines.",
    savageStep3Title: "Take The Roast",
    savageStep3Body: "Even safety gets mocked. A mine triggers penalties and comic impact.",
    savageDownloadKicker: "DOWNLOAD SIGNAL",
    savageDownloadTitle: "Download SavageMonk",
    savageDownloadLead: "Stepped on a mine? That was on you. Bring the roast party to your next gathering.",
    savageAppStore: "Download on App Store",
    savageOfficial: "View Official Site",
    savageDownloadIdle: "Download channels are being prepared. Contact us for launch updates.",
    savageDownloadAppStore: "App Store signal recorded. Launch updates can be sent once the app is live.",
    savageDownloadOfficial: "Official website channel is ready. Keep an eye on the Singularity Games product matrix.",
    savageBackProducts: "Back to Products",
  },
  ja: {
    savageKicker: "TOXIC MINE PARTY",
    savageTitle: "毒舌坊主 SavageMonk",
    savageLead: "20マス、地雷3つ。口が地雷より毒な坊主たち。史上最も毒舌な地雷探しパーティーゲーム。",
    savagePrimaryAction: "地雷盤を試す",
    savageSecondaryAction: "ゲーム特徴",
    savageSignal1: "20マス",
    savageSignal2: "地雷3つ",
    savageSignal3: "11キャラ",
    savageIntroKicker: "GAME INTRO",
    savageIntroTitle: "ゲーム紹介",
    savageIntroBody1:
      "毒舌坊主は、漫画風ビジュアルとブラックユーモアが融合したパーティー型マインスイーパーゲームです。4x5の20マスに隠された3つの地雷を避けながら、17マスの安全地帯を見つけ出してください。",
    savageIntroBody2:
      "11人の個性豊かな坊主キャラクターがあなたを待ち受けています。安全なマスを踏んでも毒舌で罵られ、地雷を踏めば容赦なく爆発します。",
    savageIntroBody3:
      "パーティーモードでは、友達と一緒にデバイスを回しながら罰ゲームやチャレンジカードで盛り上がれます。中国語・日本語・英語の3言語に完全対応しています。",
    savageBoardKicker: "LIVE MINE TEST",
    savageBoardTitle: "マスを選んで、坊主の毒舌を受け止めよう。",
    savageBoardIdle: "安全マスでも、口撃までは安全とは限りません。",
    savageBoardSafe: "{cell} 番は今のところ安全。坊主曰く、運がいいだけです。",
    savageBoardMine: "{cell} 番で地雷。坊主曰く、その判断力に地雷も驚いています。",
    savageBoardReset: "地雷盤をリセット",
    savageFeaturesKicker: "FEATURE MATRIX",
    savageFeaturesTitle: "ゲームの特徴",
    savageFeaturesLead: "シンプルなルール、強い心理圧、ランダム乱入、三言語対応がパーティー体験を作ります。",
    savageShowcase1Title: "漫画風ビジュアル",
    savageShowcase1Body: "和紙テクスチャ、漫画エフェクト、スピード線、爆発演出で日本漫画の美学を再現。",
    savageShowcase2Title: "パーティーモード",
    savageShowcase2Body: "友達と端末を回しながら、地雷、罰ゲーム、チャレンジカードで盛り上がれます。",
    savageRoleKicker: "CHARACTER SWITCH",
    savageRoleNormal: "通常坊主",
    savageRoleSpecial: "特殊坊主",
    savageRoleRare: "レア坊主",
    savageRoleNormalTitle: "堅実な通常坊主",
    savageRoleNormalBody: "基本ルールはわかりやすいものの、毒舌ヒントで判断を揺さぶります。",
    savageRoleSpecialTitle: "予測不能な特殊坊主",
    savageRoleSpecialBody: "地雷追加、セル隠し、サイコロ勝負など、展開を突然ひっくり返します。",
    savageRoleRareTitle: "圧が強いレア坊主",
    savageRoleRareBody: "低確率で登場し、台詞もスキルも強烈。場の空気を一気に変えます。",
    savageFeature1Title: "マインスイーパー x パーティー",
    savageFeature1Body: "20マスの中から3つの地雷を避けるシンプルなルール。クリア率0.088%の極限サバイバル。",
    savageFeature2Title: "11人のキャラクター",
    savageFeature2Body: "通常キャラ5体、特殊キャラ4体、レアキャラ2体。それぞれ固有の毒舌セリフとスキルを持ちます。",
    savageFeature3Title: "特殊キャラ乱入",
    savageFeature3Body: "地雷追加、セル隠し、サイコロ勝負など予測不能な展開が発生します。",
    savageFeature4Title: "パーティーモード",
    savageFeature4Body: "友達と一緒に遊べる飲み会モード。地雷で罰酒、安全でも罰ゲームカードが待ち受けます。",
    savageFeature5Title: "漫画風ビジュアル",
    savageFeature5Body: "和紙テクスチャ、漫画エフェクト、爆発演出で毒舌世界をコミカルに表現。",
    savageFeature6Title: "3言語対応",
    savageFeature6Body: "中国語・日本語・英語の完全ローカライズ。全キャラクターのセリフも3言語で楽しめます。",
    savageModeKicker: "GAME LOOP",
    savageModeTitle: "3ステップで毒舌局へ",
    savageModeLead: "キャラ選択からマス判定まで、友達との集まりに向けたテンポで進みます。",
    savageStep1Title: "坊主を選ぶ",
    savageStep1Body: "通常、特殊、レアから選び、そのラウンドの台詞とスキル傾向を決めます。",
    savageStep2Title: "マスをタップ",
    savageStep2Body: "20マスから安全地帯を探し、隠された3つの地雷を避けます。",
    savageStep3Title: "毒舌を受ける",
    savageStep3Body: "安全でも口撃され、地雷なら罰ゲームと爆笑演出が発生します。",
    savageDownloadKicker: "DOWNLOAD SIGNAL",
    savageDownloadTitle: "毒舌坊主をダウンロード",
    savageDownloadLead: "踏んだ？自業自得。次の集まりに毒舌パーティーを持ち込みましょう。",
    savageAppStore: "App Storeでダウンロード",
    savageOfficial: "公式サイトを見る",
    savageDownloadIdle: "ダウンロード経路を準備中です。お問い合わせから公開通知を受け取れます。",
    savageDownloadAppStore: "App Store の通知を記録しました。公開後に最新情報を受け取れます。",
    savageDownloadOfficial: "公式サイトの経路を準備しました。Singularity Games の製品一覧もご確認ください。",
    savageBackProducts: "製品一覧へ戻る",
  },
};

Object.entries(savageTranslations).forEach(([lang, dictionary]) => {
  Object.assign(translations[lang], dictionary);
});

const snakeTranslations = {
  zh: {
    snakeKicker: "NEON SNAKE ARENA",
    snakeTitle: "蛇蛇·贪吃蛇",
    snakeLead: "霓虹风格的休闲贪吃蛇，吃掉发光能量点延长身体，抓住加速时机穿过复杂蛇阵，在限时挑战中坚持更久。",
    snakePrimaryAction: "玩法特色",
    snakeSecondaryAction: "游戏画面",
    snakeSignal1: "限时挑战",
    snakeSignal2: "实机画面",
    snakeSignal3: "加速走位",
    snakeIntroKicker: "GAME INTRO",
    snakeIntroTitle: "游戏介绍",
    snakeIntroBody1:
      "《蛇蛇·贪吃蛇》把经典贪吃蛇玩法做成更轻快的限时挑战。玩家操控自己的蛇在深色六边形地图中移动，收集散落的彩色光点，不断变长，并尽量避免蛇头撞上其他蛇身或危险路线。",
    snakeIntroBody2:
      "游戏采用左侧虚拟摇杆控制方向，右侧闪电按钮用于短时加速。地图上会出现多条蛇和不同外观，蛇身、头像、名称与地区标签让画面更有游乐场氛围。",
    snakeIntroBody3:
      "核心策略不只是吃点成长，而是在越来越拥挤的路线中保持蛇头安全。身体变长后转向空间会变少，加速能帮你穿过空隙，也会让操作风险上升。每一次冲刺都需要判断空间、角度和节奏。",
    snakePanelKicker: "BOOST ROUTE TEST",
    snakeRouteDirection: "方向",
    snakeRouteEnergy: "吃点",
    snakeRouteBoost: "加速",
    snakeRouteRisk: "控险",
    snakeRouteDirectionTitle: "控制方向",
    snakeRouteDirectionBody: "使用左侧虚拟摇杆控制蛇身转向，优先保持节奏，不要急转撞上蛇身。",
    snakeRouteStatusDirection: "ROUTE / STABLE",
    snakeRouteEnergyTitle: "吃点成长",
    snakeRouteEnergyBody: "优先收集密集的彩色光点，让蛇身快速延长，同时给下一次转向留出空间。",
    snakeRouteStatusEnergy: "ENERGY / GROWING",
    snakeRouteBoostTitle: "加速穿行",
    snakeRouteBoostBody: "短按闪电按钮完成瞬间提速，适合穿过空隙、抢能量点或摆脱危险。",
    snakeRouteStatusBoost: "BOOST / ACTIVE",
    snakeRouteRiskTitle: "控制风险",
    snakeRouteRiskBody: "身体越长越容易被自己的路线限制，提前判断角度，尽量把风险留在身后。",
    snakeRouteStatusRisk: "RISK / WATCHING",
    snakeFeaturesKicker: "FEATURE MATRIX",
    snakeFeaturesTitle: "玩法特色",
    snakeFeaturesLead: "从能量点收集、短时加速到路线预判，每个系统都围绕“轻快成长、即时风险、限时生存”展开。",
    snakeShowcase1Title: "发光能量点",
    snakeShowcase1Body: "收集彩色光点让蛇身变长，路线越长，回避难度也越高。",
    snakeShowcase2Title: "加速冲刺",
    snakeShowcase2Body: "短按闪电按钮瞬间提速，穿过空隙或摆脱危险路线。",
    snakeShowcase3Title: "高压蛇阵",
    snakeShowcase3Body: "多条蛇同时移动，观察路线与空隙，寻找更安全的成长空间。",
    snakeFeature1Title: "轻快蛇阵挑战",
    snakeFeature1Body: "在布满蛇身和能量点的霓虹地图中移动，寻找空隙、保持节奏，体验更紧张的休闲贪吃蛇。",
    snakeFeature2Title: "加速冲刺",
    snakeFeature2Body: "右侧闪电按钮带来瞬间爆发，可用于穿过空隙、快速吃点或脱离危险路线，也会提高操作风险。",
    snakeFeature3Title: "发光能量点",
    snakeFeature3Body: "地图上密集分布彩色光点，收集后蛇身变长。路线越长，转向和回避的难度也越高。",
    snakeFeature4Title: "定位与回避",
    snakeFeature4Body: "观察前方蛇身和能量点分布，选择安全路线。贪吃一点可能收获更多，也可能把自己送进死角。",
    snakeFeature5Title: "多样蛇皮肤",
    snakeFeature5Body: "截图中包含机械头、皇冠灰蛇、红黄蛇、金龙蛇等不同外观，让每一局都有更鲜明的视觉变化。",
    snakeFeature6Title: "限时生存节奏",
    snakeFeature6Body: "顶部倒计时持续推动节奏，玩家需要在有限时间内吃到更多能量，同时保持蛇头安全。",
    snakeRhythmKicker: "CONTROL LOOP",
    snakeRhythmTitle: "操作与对局节奏",
    snakeRhythmLead: "简单操作形成高压判断：控制方向、吃点成长、加速穿行，再用路线意识控制风险。",
    snakeStep1Title: "控制方向",
    snakeStep1Body: "使用左下角虚拟摇杆控制蛇身方向，保持平滑转向，避免蛇头撞上其他蛇身。",
    snakeStep2Title: "吃点成长",
    snakeStep2Body: "优先收集密集的彩色光点，让身体长度快速提升，同时留意下一次转向空间。",
    snakeStep3Title: "加速穿行",
    snakeStep3Body: "遇到狭窄空隙或远处能量点时短按加速，但要提前判断路线，避免冲进蛇身。",
    snakeStep4Title: "控制风险",
    snakeStep4Body: "身体越长越容易限制自己的回旋空间。不要盲目加速，尽量利用开阔区域调整方向。",
    snakeGalleryKicker: "VISUAL ARCHIVE",
    snakeGalleryTitle: "游戏画面",
    snakeGalleryLead: "点击缩略图切换预览，浏览能量收集、加速冲刺、多蛇蛇阵与高压控场。",
    snakeGallery1Title: "能量点收集",
    snakeGallery1Body: "在六边形地图里收集彩色光点，身体不断延长。",
    snakeGallery2Title: "长蛇控场",
    snakeGallery2Body: "蛇身变长后，转向空间变小，更考验路线控制。",
    snakeGallery3Title: "高压蛇阵",
    snakeGallery3Body: "在复杂蛇阵中抓住空隙，避免蛇头撞上危险路线。",
    snakeGallery4Title: "多蛇同屏",
    snakeGallery4Body: "多条蛇同时移动，局面更拥挤，判断也更刺激。",
    snakeGallery5Title: "摇杆与加速",
    snakeGallery5Body: "左侧控制方向，右侧闪电加速，形成清晰的双手操作。",
    snakeGallery6Title: "高速穿行",
    snakeGallery6Body: "利用加速穿过关键空隙，争取更长的存活时间。",
    snakeCtaKicker: "ENTER THE NEON GRID",
    snakeCtaTitle: "进入霓虹蛇阵",
    snakeCtaLead: "用定位、加速和判断力，在限定时间内吃掉更多能量，让蛇蛇不断变长并安全活到最后。",
    snakeCtaPrimary: "联系与支持",
    snakeCtaSecondary: "返回产品",
  },
  en: {
    snakeKicker: "NEON SNAKE ARENA",
    snakeTitle: "Snake · Neon Bite",
    snakeLead: "A neon-style casual snake challenge. Eat glowing energy points to grow longer, boost through dense routes, and survive longer in timed rounds.",
    snakePrimaryAction: "Game Features",
    snakeSecondaryAction: "Screens",
    snakeSignal1: "Timed Runs",
    snakeSignal2: "Screens",
    snakeSignal3: "Boost Routes",
    snakeIntroKicker: "GAME INTRO",
    snakeIntroTitle: "Game Intro",
    snakeIntroBody1:
      "Snake · Neon Bite turns classic snake gameplay into a faster timed challenge. Move across a dark hex-grid arena, collect scattered colored energy points, keep growing, and avoid crashing into other bodies or risky routes.",
    snakeIntroBody2:
      "The left virtual stick controls direction, while the lightning button on the right triggers a short boost. Multiple snakes, skins, avatars, names, and region tags make each match feel like a bright arcade arena.",
    snakeIntroBody3:
      "The core strategy is not only eating points, but keeping the head safe as the route becomes crowded. A longer body leaves less turning space. Boosting can cut through gaps, but it also raises the risk of a mistake.",
    snakePanelKicker: "BOOST ROUTE TEST",
    snakeRouteDirection: "Turn",
    snakeRouteEnergy: "Energy",
    snakeRouteBoost: "Boost",
    snakeRouteRisk: "Risk",
    snakeRouteDirectionTitle: "Control Direction",
    snakeRouteDirectionBody: "Use the left virtual stick to steer smoothly. Keep rhythm first and avoid sharp turns into snake bodies.",
    snakeRouteStatusDirection: "ROUTE / STABLE",
    snakeRouteEnergyTitle: "Eat To Grow",
    snakeRouteEnergyBody: "Prioritize dense clusters of colored energy points so the body grows quickly while leaving room for the next turn.",
    snakeRouteStatusEnergy: "ENERGY / GROWING",
    snakeRouteBoostTitle: "Boost Through",
    snakeRouteBoostBody: "Tap the lightning button for a quick burst, useful for crossing gaps, grabbing energy, or escaping danger.",
    snakeRouteStatusBoost: "BOOST / ACTIVE",
    snakeRouteRiskTitle: "Control Risk",
    snakeRouteRiskBody: "The longer the body, the easier it is to trap yourself. Read angles early and keep danger behind you.",
    snakeRouteStatusRisk: "RISK / WATCHING",
    snakeFeaturesKicker: "FEATURE MATRIX",
    snakeFeaturesTitle: "Game Features",
    snakeFeaturesLead: "Energy collection, short boosts, and route reading all support a loop of quick growth, immediate risk, and timed survival.",
    snakeShowcase1Title: "Glowing Energy",
    snakeShowcase1Body: "Collect colored points to grow longer. The longer the route, the harder the escape.",
    snakeShowcase2Title: "Boost Dash",
    snakeShowcase2Body: "Tap the lightning button to speed through gaps or escape dangerous routes.",
    snakeShowcase3Title: "Crowded Arena",
    snakeShowcase3Body: "Multiple snakes move at once, forcing you to read open space and safer routes.",
    snakeFeature1Title: "Fast Snake Challenge",
    snakeFeature1Body: "Move through a neon map filled with bodies and energy points, find gaps, and keep a tense casual rhythm.",
    snakeFeature2Title: "Boost Dash",
    snakeFeature2Body: "The lightning button creates a burst of speed for gaps, fast pickups, and escapes, while increasing control risk.",
    snakeFeature3Title: "Glowing Energy Points",
    snakeFeature3Body: "Dense colored points are scattered across the arena. Collect them to grow, but longer routes make turns harder.",
    snakeFeature4Title: "Positioning And Avoidance",
    snakeFeature4Body: "Read nearby bodies and energy clusters before choosing a path. Greed can gain more, or corner you.",
    snakeFeature5Title: "Snake Skins",
    snakeFeature5Body: "Mechanical heads, crowned gray snakes, red-yellow snakes, and golden dragon looks make each run visually distinct.",
    snakeFeature6Title: "Timed Survival Rhythm",
    snakeFeature6Body: "The countdown keeps pressure high. Eat more energy within the limit while keeping the head safe.",
    snakeRhythmKicker: "CONTROL LOOP",
    snakeRhythmTitle: "Control And Match Rhythm",
    snakeRhythmLead: "Simple inputs create high-pressure decisions: steer, grow, boost through, then manage risk with route awareness.",
    snakeStep1Title: "Control Direction",
    snakeStep1Body: "Use the lower-left virtual stick to steer smoothly and avoid hitting other snake bodies.",
    snakeStep2Title: "Eat To Grow",
    snakeStep2Body: "Collect dense energy clusters to increase body length while watching the next turn space.",
    snakeStep3Title: "Boost Through",
    snakeStep3Body: "Tap boost near narrow gaps or far energy points, but read the route before rushing forward.",
    snakeStep4Title: "Control Risk",
    snakeStep4Body: "Long bodies reduce turning room. Avoid blind boosts and use open zones to reset direction.",
    snakeGalleryKicker: "VISUAL ARCHIVE",
    snakeGalleryTitle: "Game Screens",
    snakeGalleryLead: "Click thumbnails to preview energy pickup, boost movement, multi-snake fields, and pressure routes.",
    snakeGallery1Title: "Energy Pickup",
    snakeGallery1Body: "Collect colored points across the hex grid and keep growing.",
    snakeGallery2Title: "Long Body Control",
    snakeGallery2Body: "A longer snake leaves less room to turn and demands cleaner positioning.",
    snakeGallery3Title: "Pressure Field",
    snakeGallery3Body: "Use gaps in dense snake routes to keep the head out of danger.",
    snakeGallery4Title: "Multi-Snake Screen",
    snakeGallery4Body: "Several snakes move together, creating a tighter and more exciting board.",
    snakeGallery5Title: "Stick And Boost",
    snakeGallery5Body: "Direction on the left, lightning boost on the right, built for clear two-handed play.",
    snakeGallery6Title: "High-Speed Run",
    snakeGallery6Body: "Use boost to cross key openings and survive longer.",
    snakeCtaKicker: "ENTER THE NEON GRID",
    snakeCtaTitle: "Enter The Neon Snake Grid",
    snakeCtaLead: "Use positioning, boosts, and judgment to eat more energy within the limit, grow longer, and survive to the end.",
    snakeCtaPrimary: "Contact Support",
    snakeCtaSecondary: "Back To Products",
  },
  ja: {
    snakeKicker: "NEON SNAKE ARENA",
    snakeTitle: "ヘビ・もぐもぐ",
    snakeLead: "ネオン風のカジュアルスネーク。光るエネルギーを食べて体を伸ばし、加速のタイミングで複雑な蛇陣を抜け、制限時間内でより長く生き残ります。",
    snakePrimaryAction: "ゲーム特徴",
    snakeSecondaryAction: "ゲーム画面",
    snakeSignal1: "制限時間",
    snakeSignal2: "実機画面",
    snakeSignal3: "加速ルート",
    snakeIntroKicker: "GAME INTRO",
    snakeIntroTitle: "ゲーム紹介",
    snakeIntroBody1:
      "『ヘビ・もぐもぐ』は、クラシックなスネーク遊びをテンポのよい制限時間チャレンジにしたゲームです。暗い六角形マップを移動し、散らばる色とりどりの光点を集めて体を伸ばし、ほかの蛇や危険なルートへの衝突を避けます。",
    snakeIntroBody2:
      "左側の仮想スティックで方向を操作し、右側の稲妻ボタンで短時間加速します。複数の蛇や外観、アイコン、名前、地域ラベルが表示され、明るいアーケード感を作ります。",
    snakeIntroBody3:
      "大切なのは点を食べるだけでなく、混み合うルートの中で頭を安全に保つことです。体が長くなるほど曲がる空間は減ります。加速は隙間を抜ける助けになりますが、操作ミスのリスクも高まります。",
    snakePanelKicker: "BOOST ROUTE TEST",
    snakeRouteDirection: "方向",
    snakeRouteEnergy: "光点",
    snakeRouteBoost: "加速",
    snakeRouteRisk: "危険",
    snakeRouteDirectionTitle: "方向を制御",
    snakeRouteDirectionBody: "左側の仮想スティックで滑らかに向きを変えます。急旋回で蛇身にぶつからないよう、まずリズムを保ちます。",
    snakeRouteStatusDirection: "ROUTE / STABLE",
    snakeRouteEnergyTitle: "食べて成長",
    snakeRouteEnergyBody: "密集した色付きエネルギーを優先して集め、体を早く伸ばしながら次の旋回スペースを残します。",
    snakeRouteStatusEnergy: "ENERGY / GROWING",
    snakeRouteBoostTitle: "加速で突破",
    snakeRouteBoostBody: "稲妻ボタンを押して一瞬だけ加速。隙間を抜ける、光点を取りに行く、危険から逃げる時に有効です。",
    snakeRouteStatusBoost: "BOOST / ACTIVE",
    snakeRouteRiskTitle: "リスク制御",
    snakeRouteRiskBody: "体が長いほど自分のルートに閉じ込められやすくなります。早めに角度を読み、危険を後ろへ流しましょう。",
    snakeRouteStatusRisk: "RISK / WATCHING",
    snakeFeaturesKicker: "FEATURE MATRIX",
    snakeFeaturesTitle: "ゲーム特徴",
    snakeFeaturesLead: "エネルギー収集、短時間加速、ルート読みが、素早い成長、即時リスク、制限時間サバイバルを支えます。",
    snakeShowcase1Title: "光るエネルギー",
    snakeShowcase1Body: "色付きの光点を集めて体を伸ばします。長くなるほど回避は難しくなります。",
    snakeShowcase2Title: "加速ダッシュ",
    snakeShowcase2Body: "稲妻ボタンで一気に加速し、隙間を抜けたり危険なルートから離れます。",
    snakeShowcase3Title: "高圧の蛇陣",
    snakeShowcase3Body: "複数の蛇が同時に動き、空きスペースと安全なルートを読む必要があります。",
    snakeFeature1Title: "軽快な蛇陣チャレンジ",
    snakeFeature1Body: "蛇身とエネルギーに満ちたネオンマップで、隙間を探しながら緊張感あるカジュアル体験を楽しめます。",
    snakeFeature2Title: "加速ダッシュ",
    snakeFeature2Body: "右側の稲妻ボタンで瞬間加速。隙間突破、素早い回収、危険回避に使えますが、操作リスクも上がります。",
    snakeFeature3Title: "光るエネルギー点",
    snakeFeature3Body: "マップには色付き光点が密集しています。集めるほど長くなり、旋回と回避の難度も高まります。",
    snakeFeature4Title: "位置取りと回避",
    snakeFeature4Body: "前方の蛇身と光点配置を観察して安全なルートを選択します。欲張るほど報酬も危険も大きくなります。",
    snakeFeature5Title: "多彩な蛇スキン",
    snakeFeature5Body: "機械ヘッド、王冠付きの灰色蛇、赤黄の蛇、金龍風など、毎回違う見た目を楽しめます。",
    snakeFeature6Title: "制限時間のリズム",
    snakeFeature6Body: "上部のカウントダウンがテンポを作ります。限られた時間でより多く食べ、頭を安全に保ちます。",
    snakeRhythmKicker: "CONTROL LOOP",
    snakeRhythmTitle: "操作と対局テンポ",
    snakeRhythmLead: "シンプルな操作が高圧判断を生みます。方向制御、成長、加速突破、そしてリスク管理。",
    snakeStep1Title: "方向を制御",
    snakeStep1Body: "左下の仮想スティックで蛇の方向を操作し、滑らかに曲がってほかの蛇身を避けます。",
    snakeStep2Title: "食べて成長",
    snakeStep2Body: "密集したエネルギーを集め、体を伸ばしながら次の旋回スペースを確認します。",
    snakeStep3Title: "加速で突破",
    snakeStep3Body: "狭い隙間や遠い光点へ向かう時に加速。ただし突っ込む前にルートを読みます。",
    snakeStep4Title: "リスク制御",
    snakeStep4Body: "長い体は回り込みを制限します。無理な加速を避け、開けた場所で方向を整えます。",
    snakeGalleryKicker: "VISUAL ARCHIVE",
    snakeGalleryTitle: "ゲーム画面",
    snakeGalleryLead: "サムネイルをクリックして、エネルギー回収、加速移動、複数蛇の盤面、高圧ルートを確認できます。",
    snakeGallery1Title: "エネルギー回収",
    snakeGallery1Body: "六角形マップで色付き光点を集め、体を伸ばします。",
    snakeGallery2Title: "長い体の制御",
    snakeGallery2Body: "蛇が長くなるほど曲がる空間が減り、位置取りが重要になります。",
    snakeGallery3Title: "高圧蛇陣",
    snakeGallery3Body: "密集したルートの隙間を使い、頭を危険から守ります。",
    snakeGallery4Title: "複数蛇の画面",
    snakeGallery4Body: "複数の蛇が同時に動き、盤面はさらに緊張感を増します。",
    snakeGallery5Title: "スティックと加速",
    snakeGallery5Body: "左で方向、右で稲妻加速。わかりやすい両手操作です。",
    snakeGallery6Title: "高速突破",
    snakeGallery6Body: "加速で重要な隙間を抜け、より長く生き残ります。",
    snakeCtaKicker: "ENTER THE NEON GRID",
    snakeCtaTitle: "霓虹蛇陣へ入ろう",
    snakeCtaLead: "位置取り、加速、判断力で制限時間内により多くのエネルギーを食べ、最後まで生き残りましょう。",
    snakeCtaPrimary: "お問い合わせ",
    snakeCtaSecondary: "プロダクトへ戻る",
  },
};

Object.entries(snakeTranslations).forEach(([lang, dictionary]) => {
  Object.assign(translations[lang], dictionary);
});

const estateTranslations = {
  zh: {
    estateKicker: "ESTATEFORCE CONTROL OS",
    estateTitle: "EstateForce",
    estateLead: "不动产资产指令控制台。专为海外及日本的中小型不动产公司设计的 NocoBase 基础 SaaS 不动产管理系统。",
    estatePrimaryAction: "核心模块",
    estateSecondaryAction: "技术架构",
    estateSignal1: "核心模块",
    estateSignal2: "NocoBase 基础",
    estateSignal3: "海外适配",
    estateIntroKicker: "PRODUCT INTRO",
    estateIntroTitle: "产品介绍",
    estateIntroBody1:
      "EstateForce 是专为海外及日本的中小型不动产公司设计的 NocoBase 基础 SaaS 不动产管理系统。系统将房源管理、租赁管理、合同管理、维修订单管理、用户角色管理一体化，大幅提升业务效率。",
    estateIntroBody2:
      "通过采用最新的低代码技术和云原生架构，EstateForce 为不动产企业提供灵活、可扩展的解决方案。无论您是管理几十套还是几千套物业，EstateForce 都能满足您的需求，帮助您实现数字化转型。",
    estateIntroBody3:
      "系统支持多语言、多币种，特别适合在日本和海外开展业务的不动产公司。通过直观的用户界面和强大的功能模块，EstateForce 让复杂的不动产管理变得简单高效。",
    estateConsoleKicker: "MODULE COMMAND CENTER",
    estateModulePropertyShort: "房源",
    estateModuleLeaseShort: "租赁",
    estateModuleContractShort: "合同",
    estateModuleMaintenanceShort: "维修",
    estateModuleRolesShort: "权限",
    estateModuleStatusProperty: "PROPERTY NODE / READY",
    estateModuleStatusLease: "LEASE NODE / SYNCED",
    estateModuleStatusContract: "CONTRACT NODE / ACTIVE",
    estateModuleStatusMaintenance: "WORK ORDER / TRACKING",
    estateModuleStatusRoles: "ROLE MATRIX / SECURE",
    estateModulesKicker: "FIVE CORE MODULES",
    estateModulesTitle: "5个核心模块",
    estateModulesLead: "提供全面的不动产管理解决方案的集成系统。",
    estateModulePropertyTitle: "房源管理",
    estateModulePropertyBody: "物业信息、照片、价格、状态等一体化管理，实现高效的物业运营。",
    estateModulePropertyItem1: "物业基本信息管理",
    estateModulePropertyItem2: "照片・视频上传",
    estateModulePropertyItem3: "价格历史追踪",
    estateModulePropertyItem4: "空置状况管理",
    estateModulePropertyItem5: "物业搜索、筛选",
    estateModuleLeaseTitle: "租赁管理",
    estateModuleLeaseBody: "租户信息、租赁历史、支付状况综合管理。",
    estateModuleLeaseItem1: "租户基本信息",
    estateModuleLeaseItem2: "租赁历史管理",
    estateModuleLeaseItem3: "支付状况追踪",
    estateModuleLeaseItem4: "信用信息管理",
    estateModuleLeaseItem5: "沟通记录",
    estateModuleContractTitle: "合同管理",
    estateModuleContractBody: "从合同创建到结束，全生命周期自动化管理。",
    estateModuleContractItem1: "合同模板",
    estateModuleContractItem2: "电子签名支持",
    estateModuleContractItem3: "到期自动提醒",
    estateModuleContractItem4: "续约管理",
    estateModuleContractItem5: "法律合规",
    estateModuleMaintenanceTitle: "维修订单管理",
    estateModuleMaintenanceBody: "从维修请求到完成，高效的工作流程管理。",
    estateModuleMaintenanceItem1: "订单接收系统",
    estateModuleMaintenanceItem2: "优先级管理",
    estateModuleMaintenanceItem3: "工作人员分配",
    estateModuleMaintenanceItem4: "进度追踪",
    estateModuleMaintenanceItem5: "成本管理",
    estateModuleRolesTitle: "用户角色管理",
    estateModuleRolesBody: "细粒度权限控制，实现安全高效的团队协作。",
    estateModuleRolesItem1: "基于角色的访问控制",
    estateModuleRolesItem2: "权限自定义",
    estateModuleRolesItem3: "用户组管理",
    estateModuleRolesItem4: "操作日志记录",
    estateModuleRolesItem5: "安全审计",
    estateTechKicker: "TECH ARCHITECTURE",
    estateTechTitle: "技术架构",
    estateTechLead: "采用最新技术栈，兼具稳定性和可扩展性的系统。",
    estateTechNocoBody: "开源低代码平台，实现快速开发和灵活定制。",
    estateTechPostgresBody: "企业级数据库，保证高性能和可靠性。",
    estateTechDockerBody: "容器化部署，实现一键部署和环境一致性。",
    estateTechJsBody: "灵活的业务逻辑，可定制的工作流程。",
    estateAudienceKicker: "TARGET USERS",
    estateAudienceTitle: "目标用户",
    estateAudienceLead: "专为海外及日本的中小型不动产公司需求定制的解决方案。",
    estateAudience1Title: "不动产公司",
    estateAudience1Body: "物业管理、客户管理、合同管理一体化，大幅提升业务效率。通过数字化增强竞争力。",
    estateAudience2Title: "物业管理公司",
    estateAudience2Body: "维护管理、租户应对、费用管理高效化。同时实现服务质量提升和成本削减。",
    estateAudience3Title: "海外扩展企业",
    estateAudience3Body: "多语言支持、当地法规适应、远程管理功能，支持海外不动产业务的高效运营。",
    estateCtaKicker: "START ASSET OPS",
    estateCtaTitle: "用 EstateForce 革新不动产管理",
    estateCtaLead: "立即开始免费试用，体验高效的不动产管理。",
    estateCtaPrimary: "免费试用",
    estateCtaSecondary: "联系我们",
  },
  en: {
    estateKicker: "ESTATEFORCE CONTROL OS",
    estateTitle: "EstateForce",
    estateLead: "A real-estate asset command console. A NocoBase-based SaaS property management system for small and medium real-estate teams in Japan and overseas.",
    estatePrimaryAction: "Core Modules",
    estateSecondaryAction: "Tech Stack",
    estateSignal1: "Core Modules",
    estateSignal2: "NocoBase Base",
    estateSignal3: "Global Ready",
    estateIntroKicker: "PRODUCT INTRO",
    estateIntroTitle: "Product Intro",
    estateIntroBody1:
      "EstateForce is a NocoBase-based SaaS property management system designed for small and medium real-estate companies operating in Japan and overseas. It unifies property, leasing, contracts, maintenance work orders, and user roles to improve daily operations.",
    estateIntroBody2:
      "Built with low-code technology and a cloud-native architecture, EstateForce gives property teams a flexible and extensible platform. Whether you manage dozens or thousands of units, it helps teams move toward digital operations.",
    estateIntroBody3:
      "The system supports multiple languages and currencies, making it especially useful for companies running business across Japan and international markets. Clear interfaces and strong modules make complex property management simpler and faster.",
    estateConsoleKicker: "MODULE COMMAND CENTER",
    estateModulePropertyShort: "Property",
    estateModuleLeaseShort: "Lease",
    estateModuleContractShort: "Contract",
    estateModuleMaintenanceShort: "Work",
    estateModuleRolesShort: "Roles",
    estateModuleStatusProperty: "PROPERTY NODE / READY",
    estateModuleStatusLease: "LEASE NODE / SYNCED",
    estateModuleStatusContract: "CONTRACT NODE / ACTIVE",
    estateModuleStatusMaintenance: "WORK ORDER / TRACKING",
    estateModuleStatusRoles: "ROLE MATRIX / SECURE",
    estateModulesKicker: "FIVE CORE MODULES",
    estateModulesTitle: "5 Core Modules",
    estateModulesLead: "An integrated system for comprehensive property management workflows.",
    estateModulePropertyTitle: "Property Management",
    estateModulePropertyBody: "Manage property information, photos, pricing, and status in one operational surface.",
    estateModulePropertyItem1: "Basic property profiles",
    estateModulePropertyItem2: "Photo and video uploads",
    estateModulePropertyItem3: "Price history tracking",
    estateModulePropertyItem4: "Vacancy status management",
    estateModulePropertyItem5: "Property search and filters",
    estateModuleLeaseTitle: "Lease Management",
    estateModuleLeaseBody: "Manage tenant information, lease history, and payment status in one place.",
    estateModuleLeaseItem1: "Tenant profiles",
    estateModuleLeaseItem2: "Lease history management",
    estateModuleLeaseItem3: "Payment status tracking",
    estateModuleLeaseItem4: "Credit information management",
    estateModuleLeaseItem5: "Communication records",
    estateModuleContractTitle: "Contract Management",
    estateModuleContractBody: "Automate the contract lifecycle from creation through completion.",
    estateModuleContractItem1: "Contract templates",
    estateModuleContractItem2: "E-signature support",
    estateModuleContractItem3: "Expiration reminders",
    estateModuleContractItem4: "Renewal management",
    estateModuleContractItem5: "Legal compliance",
    estateModuleMaintenanceTitle: "Maintenance Orders",
    estateModuleMaintenanceBody: "Track an efficient workflow from maintenance request to completion.",
    estateModuleMaintenanceItem1: "Request intake system",
    estateModuleMaintenanceItem2: "Priority management",
    estateModuleMaintenanceItem3: "Staff assignment",
    estateModuleMaintenanceItem4: "Progress tracking",
    estateModuleMaintenanceItem5: "Cost management",
    estateModuleRolesTitle: "User Role Management",
    estateModuleRolesBody: "Fine-grained permission controls for secure and efficient team collaboration.",
    estateModuleRolesItem1: "Role-based access control",
    estateModuleRolesItem2: "Custom permissions",
    estateModuleRolesItem3: "User group management",
    estateModuleRolesItem4: "Operation logs",
    estateModuleRolesItem5: "Security audit",
    estateTechKicker: "TECH ARCHITECTURE",
    estateTechTitle: "Tech Architecture",
    estateTechLead: "A modern stack designed for stability, extensibility, and fast rollout.",
    estateTechNocoBody: "Open-source low-code platform for fast development and flexible customization.",
    estateTechPostgresBody: "Enterprise-grade database for performance and reliability.",
    estateTechDockerBody: "Containerized deployment for one-click rollout and consistent environments.",
    estateTechJsBody: "Flexible business logic and customizable workflows.",
    estateAudienceKicker: "TARGET USERS",
    estateAudienceTitle: "Target Users",
    estateAudienceLead: "A solution tailored for small and medium real-estate companies in Japan and overseas.",
    estateAudience1Title: "Real-Estate Companies",
    estateAudience1Body: "Unify property, customer, and contract management to improve efficiency and strengthen digital competitiveness.",
    estateAudience2Title: "Property Managers",
    estateAudience2Body: "Streamline maintenance, tenant response, and fee management while improving service quality and reducing costs.",
    estateAudience3Title: "Overseas Expansion Teams",
    estateAudience3Body: "Multi-language support, local compliance adaptation, and remote management for cross-border property operations.",
    estateCtaKicker: "START ASSET OPS",
    estateCtaTitle: "Modernize property management with EstateForce",
    estateCtaLead: "Start a free trial and experience faster real-estate operations.",
    estateCtaPrimary: "Free Trial",
    estateCtaSecondary: "Contact Us",
  },
  ja: {
    estateKicker: "ESTATEFORCE CONTROL OS",
    estateTitle: "EstateForce",
    estateLead: "不動産資産の指令コンソール。海外および日本の中小不動産会社向けに設計された、NocoBase ベースの SaaS 不動産管理システムです。",
    estatePrimaryAction: "中核モジュール",
    estateSecondaryAction: "技術構成",
    estateSignal1: "中核モジュール",
    estateSignal2: "NocoBase 基盤",
    estateSignal3: "海外対応",
    estateIntroKicker: "PRODUCT INTRO",
    estateIntroTitle: "製品紹介",
    estateIntroBody1:
      "EstateForce は、海外および日本の中小不動産会社向けに設計された NocoBase ベースの SaaS 不動産管理システムです。物件、賃貸、契約、修繕依頼、ユーザー権限を一体化し、業務効率を高めます。",
    estateIntroBody2:
      "最新のローコード技術とクラウドネイティブ構成により、柔軟で拡張しやすいソリューションを提供します。数十件から数千件の物件まで、デジタル化を支援します。",
    estateIntroBody3:
      "多言語、多通貨に対応し、日本と海外で事業を展開する不動産会社に適しています。直感的な UI と強力な機能で、複雑な管理をシンプルにします。",
    estateConsoleKicker: "MODULE COMMAND CENTER",
    estateModulePropertyShort: "物件",
    estateModuleLeaseShort: "賃貸",
    estateModuleContractShort: "契約",
    estateModuleMaintenanceShort: "修繕",
    estateModuleRolesShort: "権限",
    estateModuleStatusProperty: "PROPERTY NODE / READY",
    estateModuleStatusLease: "LEASE NODE / SYNCED",
    estateModuleStatusContract: "CONTRACT NODE / ACTIVE",
    estateModuleStatusMaintenance: "WORK ORDER / TRACKING",
    estateModuleStatusRoles: "ROLE MATRIX / SECURE",
    estateModulesKicker: "FIVE CORE MODULES",
    estateModulesTitle: "5つの中核モジュール",
    estateModulesLead: "不動産管理に必要なワークフローを統合したシステムです。",
    estateModulePropertyTitle: "物件管理",
    estateModulePropertyBody: "物件情報、写真、価格、状態を一元管理し、効率的な運用を実現します。",
    estateModulePropertyItem1: "物件基本情報管理",
    estateModulePropertyItem2: "写真・動画アップロード",
    estateModulePropertyItem3: "価格履歴の追跡",
    estateModulePropertyItem4: "空室状況管理",
    estateModulePropertyItem5: "物件検索・絞り込み",
    estateModuleLeaseTitle: "賃貸管理",
    estateModuleLeaseBody: "入居者情報、賃貸履歴、支払い状況を総合的に管理します。",
    estateModuleLeaseItem1: "入居者基本情報",
    estateModuleLeaseItem2: "賃貸履歴管理",
    estateModuleLeaseItem3: "支払い状況追跡",
    estateModuleLeaseItem4: "信用情報管理",
    estateModuleLeaseItem5: "コミュニケーション記録",
    estateModuleContractTitle: "契約管理",
    estateModuleContractBody: "契約作成から終了まで、ライフサイクル全体を自動化します。",
    estateModuleContractItem1: "契約テンプレート",
    estateModuleContractItem2: "電子署名対応",
    estateModuleContractItem3: "期限自動リマインド",
    estateModuleContractItem4: "更新管理",
    estateModuleContractItem5: "法務コンプライアンス",
    estateModuleMaintenanceTitle: "修繕依頼管理",
    estateModuleMaintenanceBody: "修繕依頼から完了まで、効率的なワークフローで管理します。",
    estateModuleMaintenanceItem1: "依頼受付システム",
    estateModuleMaintenanceItem2: "優先度管理",
    estateModuleMaintenanceItem3: "担当者割り当て",
    estateModuleMaintenanceItem4: "進捗追跡",
    estateModuleMaintenanceItem5: "コスト管理",
    estateModuleRolesTitle: "ユーザー権限管理",
    estateModuleRolesBody: "細かな権限制御で、安全かつ効率的なチーム協業を実現します。",
    estateModuleRolesItem1: "ロールベースアクセス制御",
    estateModuleRolesItem2: "権限カスタマイズ",
    estateModuleRolesItem3: "ユーザーグループ管理",
    estateModuleRolesItem4: "操作ログ記録",
    estateModuleRolesItem5: "セキュリティ監査",
    estateTechKicker: "TECH ARCHITECTURE",
    estateTechTitle: "技術構成",
    estateTechLead: "安定性と拡張性を兼ね備えた最新技術スタックです。",
    estateTechNocoBody: "オープンソースのローコード基盤で、迅速な開発と柔軟なカスタマイズを実現します。",
    estateTechPostgresBody: "高性能と信頼性を備えたエンタープライズ級データベースです。",
    estateTechDockerBody: "コンテナ化により、一括デプロイと環境の一貫性を実現します。",
    estateTechJsBody: "柔軟な業務ロジックとカスタムワークフローに対応します。",
    estateAudienceKicker: "TARGET USERS",
    estateAudienceTitle: "対象ユーザー",
    estateAudienceLead: "海外および日本の中小不動産会社向けに最適化されたソリューションです。",
    estateAudience1Title: "不動産会社",
    estateAudience1Body: "物件、顧客、契約管理を一体化し、業務効率を高めます。デジタル化で競争力を強化します。",
    estateAudience2Title: "物件管理会社",
    estateAudience2Body: "修繕管理、入居者対応、費用管理を効率化し、サービス品質向上とコスト削減を実現します。",
    estateAudience3Title: "海外展開企業",
    estateAudience3Body: "多言語対応、現地法規への適応、遠隔管理機能により、海外不動産事業を支援します。",
    estateCtaKicker: "START ASSET OPS",
    estateCtaTitle: "EstateForce で不動産管理を刷新",
    estateCtaLead: "無料トライアルを開始し、効率的な不動産管理を体験してください。",
    estateCtaPrimary: "無料トライアル",
    estateCtaSecondary: "お問い合わせ",
  },
};

Object.entries(estateTranslations).forEach(([lang, dictionary]) => {
  Object.assign(translations[lang], dictionary);
});

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
  ja: {
    ceo: {
      name: "創業者 & CEO",
      group: "経営 / 戦略",
      bio: "会社戦略と全体運営を担い、チームをビジョンへ導きながら継続的な革新を推進します。",
      tags: ["戦略設計", "チームづくり", "プロダクト方針"],
    },
    cto: {
      name: "最高技術責任者",
      group: "技術 / アーキテクチャ",
      bio: "技術ロードマップ、ゲームエンジン最適化、AI 活用、高並行サービス基盤を統括します。",
      tags: ["AI アーキテクチャ", "エンジン最適化", "開発効率"],
    },
    creative: {
      name: "クリエイティブディレクター",
      group: "創造 / 世界観",
      bio: "ゲームコンセプト、ビジュアル方向、体験設計を通じて、抽象的なアイデアを没入できる世界へ変換します。",
      tags: ["世界観", "物語体験", "インタラクション"],
    },
    server: {
      name: "ゲームサーバー責任者",
      group: "技術 / サーバー",
      bio: "バックエンドアーキテクチャとオンラインシステムを設計し、安定性、拡張性、データ安全性を支えます。",
      tags: ["高並行", "データ安全", "安定運用"],
    },
    client: {
      name: "ゲームクライアント責任者",
      group: "技術 / クライアント",
      bio: "クライアント体験の開発と最適化を担い、性能、操作感、クロスデバイス品質を高めます。",
      tags: ["クロス端末", "性能最適化", "モーション"],
    },
    art: {
      name: "アートディレクター",
      group: "アート / ビジュアル",
      bio: "ビジュアル方針を定義し、キャラクター、環境、エフェクト、プロダクトアートを統括します。",
      tags: ["3D アセット", "ビジュアル規範", "演出効果"],
    },
    design: {
      name: "ゲームデザイン責任者",
      group: "企画 / システム",
      bio: "ゲームシステム、コンテンツ計画、成長リズム、長期的なプレイヤー体験を設計します。",
      tags: ["ゲームシステム", "レベル設計", "継続率"],
    },
    tools: {
      name: "AI ゲームツール開発責任者",
      group: "AI / ツールチェーン",
      bio: "AI を活用した制作ツールを開発し、チーム効率とアルゴリズム駆動の体験を向上させます。",
      tags: ["AIGC", "ツールチェーン", "スマートワークフロー"],
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
let activeSaylyPlan = "free";
let activeSaylyDownloadState = "idle";
let activeSavageRole = "normal";
let activeSavageBoardState = "idle";
let activeSavageBoardCell = "";
let activeSavageDownloadState = "idle";
let activeSnakeRoute = "direction";
let activeEstateModule = "property";
const languageMeta = {
  zh: "zh-CN",
  en: "en",
  ja: "ja-JP",
};

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem("sg-language");
    return translations[stored] ? stored : "zh";
  } catch {
    return "zh";
  }
}

function storeLanguage(lang) {
  try {
    window.localStorage.setItem("sg-language", lang);
  } catch {
    // Storage can be unavailable in some embedded or private browsing contexts.
  }
}

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
  document.querySelectorAll(
    ".product-card, .value-card, .team-card, .contact-card, .contact-minimal-panel, .game-hud-panel, .game-shot-card, .game-feature-card, .game-gallery-viewer, .savage-hero-media, .savage-board-panel, .savage-role-card, .snake-hero-media, .snake-control-panel, .estate-hero-media, .estate-console-panel, .estate-module-card, .estate-tech-card, .estate-audience-card",
  ).forEach((card) => {
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

function applyLanguage(lang, burstTarget = null) {
  const nextLang = translations[lang] ? lang : "zh";
  const dictionary = translations[nextLang];
  currentLang = nextLang;
  document.documentElement.lang = languageMeta[nextLang] || "zh-CN";

  document.querySelectorAll("[data-lang]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.lang === nextLang);
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = dictionary[key] || translations.zh[key];
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    const value = dictionary[key] || translations.zh[key];
    if (value) node.setAttribute("placeholder", value);
  });

  updateHeroTitleEffects(nextLang);
  updateTeamDetail(activeMemberKey);
  updateGameGalleryText();
  updateSaylyDemoText();
  updateSaylyPlanStatus();
  updateSaylyDownloadStatus();
  updateSavageBoardStatus();
  updateSavageRoleText();
  updateSavageDownloadStatus();
  updateSnakeRouteText();
  updateEstateModuleText();
  updateCopyStatus(dictionary.contactCopyIdle);
  updateSubscribeStatus(dictionary.fantasySubscribeIdle, "idle");
  storeLanguage(nextLang);
  if (burstTarget) spawnBurst(burstTarget, 20);
}

function setupLanguage() {
  const buttons = document.querySelectorAll("[data-lang]");
  currentLang = getStoredLanguage();
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang, button);
    });
  });
  applyLanguage(currentLang);
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

function updateSubscribeStatus(message, state = "idle") {
  const status = document.getElementById("fantasySubscribeStatus");
  if (!status || !message) return;
  status.textContent = message;
  status.dataset.state = state;
}

function setupLocalSubscribe() {
  document.querySelectorAll("[data-subscribe-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input[type='email']");
      const button = form.querySelector("button");
      const dictionary = translations[currentLang] || translations.zh;

      if (!input || !input.value.trim() || !input.validity.valid) {
        updateSubscribeStatus(dictionary.fantasySubscribeInvalid, "error");
        input?.focus();
        return;
      }

      updateSubscribeStatus(dictionary.fantasySubscribeSuccess, "success");
      input.value = "";
      if (button) spawnBurst(button, 28);
    });
  });
}

function updateGameGalleryText() {
  const active = document.querySelector(".game-gallery-thumbs button.is-active");
  const title = document.getElementById("gameGalleryTitleText");
  const body = document.getElementById("gameGalleryBodyText");
  if (!active || !title || !body) return;

  const titleKey = active.dataset.galleryTitle;
  const bodyKey = active.dataset.galleryBody;
  const dictionary = translations[currentLang] || translations.zh;
  title.dataset.i18n = titleKey;
  body.dataset.i18n = bodyKey;
  title.textContent = dictionary[titleKey] || translations.zh[titleKey] || title.textContent;
  body.textContent = dictionary[bodyKey] || translations.zh[bodyKey] || body.textContent;
}

function setupGameGallery() {
  const viewer = document.getElementById("gameGalleryImage");
  const buttons = document.querySelectorAll(".game-gallery-thumbs button");
  const controls = document.querySelectorAll("[data-gallery-step]");
  if (!viewer || !buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.dataset.galleryImage;
      if (!image) return;

      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      viewer.classList.add("is-switching");
      window.setTimeout(() => {
        viewer.src = image;
        updateGameGalleryText();
        viewer.classList.remove("is-switching");
        if (window.innerWidth < 1100) {
          viewer.closest(".game-gallery-viewer")?.scrollIntoView({
            block: "center",
            behavior: prefersReduced ? "auto" : "smooth",
          });
        }
      }, 120);
      spawnBurst(button, 18);
    });
  });

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const activeIndex = [...buttons].findIndex((button) => button.classList.contains("is-active"));
      const step = Number(control.dataset.galleryStep) || 1;
      const nextIndex = (activeIndex + step + buttons.length) % buttons.length;
      const nextButton = buttons[nextIndex];
      nextButton.click();
      nextButton.scrollIntoView({
        block: "nearest",
        inline: "center",
        behavior: prefersReduced ? "auto" : "smooth",
      });
    });
  });

  updateGameGalleryText();
}

function updateSaylyDemoText() {
  const active = document.querySelector("[data-sayly-tone].is-active");
  const tone = document.getElementById("saylyDemoTone");
  const output = document.getElementById("saylyDemoOutput");
  if (!active || !tone || !output) return;

  const dictionary = translations[currentLang] || translations.zh;
  const toneKey = active.dataset.saylyToneLabel;
  const outputKey = active.dataset.saylyOutput;
  tone.dataset.i18n = toneKey;
  output.dataset.i18n = outputKey;
  tone.textContent = dictionary[toneKey] || translations.zh[toneKey] || tone.textContent;
  output.textContent = dictionary[outputKey] || translations.zh[outputKey] || output.textContent;
}

function setupSaylyDemo() {
  const buttons = document.querySelectorAll("[data-sayly-tone]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      updateSaylyDemoText();
      spawnBurst(button, 18);
    });
  });

  updateSaylyDemoText();
}

function updateSaylyPlanStatus() {
  const status = document.getElementById("saylyPlanStatus");
  if (!status) return;

  const dictionary = translations[currentLang] || translations.zh;
  const key = activeSaylyPlan === "pro" ? "saylyPlanStatusPro" : "saylyPlanStatusFree";
  status.dataset.i18n = key;
  status.textContent = dictionary[key] || translations.zh[key] || status.textContent;

  document.querySelectorAll("[data-sayly-plan]").forEach((button) => {
    const isSelected = button.dataset.saylyPlan === activeSaylyPlan;
    button.setAttribute("aria-pressed", String(isSelected));
    button.closest(".sayly-price-card")?.classList.toggle("is-selected", isSelected);
  });
}

function setupSaylyPricing() {
  document.querySelectorAll("[data-sayly-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSaylyPlan = button.dataset.saylyPlan || "free";
      updateSaylyPlanStatus();
      spawnBurst(button, activeSaylyPlan === "pro" ? 32 : 20);
    });
  });

  updateSaylyPlanStatus();
}

function updateSaylyDownloadStatus() {
  const status = document.getElementById("saylyDownloadStatus");
  if (!status) return;

  const dictionary = translations[currentLang] || translations.zh;
  const keys = {
    idle: "saylyDownloadIdle",
    appstore: "saylyDownloadAppStore",
    official: "saylyDownloadOfficial",
  };
  const key = keys[activeSaylyDownloadState] || keys.idle;
  status.dataset.i18n = key;
  status.textContent = dictionary[key] || translations.zh[key] || status.textContent;
}

function setupSaylyDownloads() {
  document.querySelectorAll("[data-sayly-download]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSaylyDownloadState = button.dataset.saylyDownload || "idle";
      updateSaylyDownloadStatus();
      spawnBurst(button, 30);
    });
  });

  updateSaylyDownloadStatus();
}

function updateSavageBoardStatus() {
  const status = document.getElementById("savageBoardStatus");
  if (!status) return;

  const dictionary = translations[currentLang] || translations.zh;
  const keys = {
    idle: "savageBoardIdle",
    safe: "savageBoardSafe",
    mine: "savageBoardMine",
  };
  const key = keys[activeSavageBoardState] || keys.idle;
  const fallback = translations.zh[key] || "";
  status.dataset.i18n = key;
  status.dataset.state = activeSavageBoardState;
  status.textContent = (dictionary[key] || fallback).replace("{cell}", activeSavageBoardCell || "--");
}

function setupSavageBoard() {
  const board = document.querySelector("[data-savage-board]");
  const buttons = document.querySelectorAll("[data-monk-cell]");
  const reset = document.querySelector("[data-monk-reset]");
  if (!board || !buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isMine = button.dataset.monkRisk === "true";
      activeSavageBoardState = isMine ? "mine" : "safe";
      activeSavageBoardCell = button.dataset.monkCell || "";

      buttons.forEach((item) => {
        item.classList.remove("is-safe", "is-mine");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add(isMine ? "is-mine" : "is-safe");
      button.setAttribute("aria-pressed", "true");
      updateSavageBoardStatus();
      spawnBurst(button, isMine ? 38 : 20);
    });
  });

  reset?.addEventListener("click", () => {
    activeSavageBoardState = "idle";
    activeSavageBoardCell = "";
    buttons.forEach((button) => {
      button.classList.remove("is-safe", "is-mine");
      button.setAttribute("aria-pressed", "false");
    });
    updateSavageBoardStatus();
    spawnBurst(reset, 18);
  });

  updateSavageBoardStatus();
}

function updateSavageRoleText() {
  const title = document.getElementById("savageRoleTitle");
  const body = document.getElementById("savageRoleBody");
  if (!title || !body) return;

  const dictionary = translations[currentLang] || translations.zh;
  const roleKey = activeSavageRole || "normal";
  const titleKey = `savageRole${roleKey[0].toUpperCase()}${roleKey.slice(1)}Title`;
  const bodyKey = `savageRole${roleKey[0].toUpperCase()}${roleKey.slice(1)}Body`;

  title.dataset.i18n = titleKey;
  body.dataset.i18n = bodyKey;
  title.textContent = dictionary[titleKey] || translations.zh[titleKey] || title.textContent;
  body.textContent = dictionary[bodyKey] || translations.zh[bodyKey] || body.textContent;

  document.querySelectorAll("[data-monk-role]").forEach((button) => {
    const isSelected = button.dataset.monkRole === activeSavageRole;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function setupSavageRoles() {
  const buttons = document.querySelectorAll("[data-monk-role]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSavageRole = button.dataset.monkRole || "normal";
      updateSavageRoleText();
      spawnBurst(button, activeSavageRole === "rare" ? 30 : 18);
    });
  });

  updateSavageRoleText();
}

function updateSavageDownloadStatus() {
  const status = document.getElementById("savageDownloadStatus");
  if (!status) return;

  const dictionary = translations[currentLang] || translations.zh;
  const keys = {
    idle: "savageDownloadIdle",
    appstore: "savageDownloadAppStore",
    official: "savageDownloadOfficial",
  };
  const key = keys[activeSavageDownloadState] || keys.idle;
  status.dataset.i18n = key;
  status.textContent = dictionary[key] || translations.zh[key] || status.textContent;
}

function setupSavageDownloads() {
  document.querySelectorAll("[data-monk-download]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSavageDownloadState = button.dataset.monkDownload || "idle";
      updateSavageDownloadStatus();
      spawnBurst(button, 30);
    });
  });

  updateSavageDownloadStatus();
}

function updateSnakeRouteText() {
  const panel = document.querySelector("[data-snake-panel]");
  const title = document.getElementById("snakeRouteTitle");
  const body = document.getElementById("snakeRouteBody");
  const status = document.getElementById("snakeRouteStatus");
  if (!panel || !title || !body || !status) return;

  const dictionary = translations[currentLang] || translations.zh;
  const route = activeSnakeRoute || "direction";
  const routeName = route[0].toUpperCase() + route.slice(1);
  const titleKey = `snakeRoute${routeName}Title`;
  const bodyKey = `snakeRoute${routeName}Body`;
  const statusKey = `snakeRouteStatus${routeName}`;
  const power = {
    direction: "45%",
    energy: "66%",
    boost: "88%",
    risk: "58%",
  };

  title.dataset.i18n = titleKey;
  body.dataset.i18n = bodyKey;
  status.dataset.i18n = statusKey;
  title.textContent = dictionary[titleKey] || translations.zh[titleKey] || title.textContent;
  body.textContent = dictionary[bodyKey] || translations.zh[bodyKey] || body.textContent;
  status.textContent = dictionary[statusKey] || translations.zh[statusKey] || status.textContent;
  panel.style.setProperty("--snake-route-power", power[route] || power.direction);

  document.querySelectorAll("[data-snake-route]").forEach((button) => {
    const isSelected = button.dataset.snakeRoute === route;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function setupSnakeRoutes() {
  const buttons = document.querySelectorAll("[data-snake-route]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSnakeRoute = button.dataset.snakeRoute || "direction";
      updateSnakeRouteText();
      spawnBurst(button, activeSnakeRoute === "boost" ? 30 : 18);
    });
  });

  updateSnakeRouteText();
}

function updateEstateModuleText() {
  const panel = document.querySelector("[data-estate-console]");
  const title = document.getElementById("estateModuleTitle");
  const body = document.getElementById("estateModuleBody");
  const list = document.getElementById("estateModuleList");
  const status = document.getElementById("estateModuleStatus");
  if (!panel || !title || !body || !list || !status) return;

  const dictionary = translations[currentLang] || translations.zh;
  const module = activeEstateModule || "property";
  const config = {
    property: {
      title: "estateModulePropertyTitle",
      body: "estateModulePropertyBody",
      status: "estateModuleStatusProperty",
      items: [
        "estateModulePropertyItem1",
        "estateModulePropertyItem2",
        "estateModulePropertyItem3",
        "estateModulePropertyItem4",
        "estateModulePropertyItem5",
      ],
      power: "78%",
    },
    lease: {
      title: "estateModuleLeaseTitle",
      body: "estateModuleLeaseBody",
      status: "estateModuleStatusLease",
      items: [
        "estateModuleLeaseItem1",
        "estateModuleLeaseItem2",
        "estateModuleLeaseItem3",
        "estateModuleLeaseItem4",
        "estateModuleLeaseItem5",
      ],
      power: "70%",
    },
    contract: {
      title: "estateModuleContractTitle",
      body: "estateModuleContractBody",
      status: "estateModuleStatusContract",
      items: [
        "estateModuleContractItem1",
        "estateModuleContractItem2",
        "estateModuleContractItem3",
        "estateModuleContractItem4",
        "estateModuleContractItem5",
      ],
      power: "84%",
    },
    maintenance: {
      title: "estateModuleMaintenanceTitle",
      body: "estateModuleMaintenanceBody",
      status: "estateModuleStatusMaintenance",
      items: [
        "estateModuleMaintenanceItem1",
        "estateModuleMaintenanceItem2",
        "estateModuleMaintenanceItem3",
        "estateModuleMaintenanceItem4",
        "estateModuleMaintenanceItem5",
      ],
      power: "66%",
    },
    roles: {
      title: "estateModuleRolesTitle",
      body: "estateModuleRolesBody",
      status: "estateModuleStatusRoles",
      items: [
        "estateModuleRolesItem1",
        "estateModuleRolesItem2",
        "estateModuleRolesItem3",
        "estateModuleRolesItem4",
        "estateModuleRolesItem5",
      ],
      power: "92%",
    },
  };
  const item = config[module] || config.property;

  title.dataset.i18n = item.title;
  body.dataset.i18n = item.body;
  status.dataset.i18n = item.status;
  title.textContent = dictionary[item.title] || translations.zh[item.title] || title.textContent;
  body.textContent = dictionary[item.body] || translations.zh[item.body] || body.textContent;
  status.textContent = dictionary[item.status] || translations.zh[item.status] || status.textContent;
  list.replaceChildren(
    ...item.items.map((key) => {
      const listItem = document.createElement("li");
      listItem.dataset.i18n = key;
      listItem.textContent = dictionary[key] || translations.zh[key] || "";
      return listItem;
    })
  );
  panel.style.setProperty("--estate-module-power", item.power);

  document.querySelectorAll("[data-estate-module]").forEach((button) => {
    const isSelected = button.dataset.estateModule === module;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function setupEstateModules() {
  const buttons = document.querySelectorAll("[data-estate-module]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeEstateModule = button.dataset.estateModule || "property";
      updateEstateModuleText();
      spawnBurst(button, activeEstateModule === "contract" ? 30 : 18);
    });
  });

  updateEstateModuleText();
}

resizeCanvas();
setupPointer();
setupTiltCards();
setupReveal();
setupLanguage();
setupTeamDirectory();
setupEmailCopy();
setupLocalSubscribe();
setupGameGallery();
setupSaylyDemo();
setupSaylyPricing();
setupSaylyDownloads();
setupSavageBoard();
setupSavageRoles();
setupSavageDownloads();
setupSnakeRoutes();
setupEstateModules();
updateHeroTitleEffects(currentLang);
setupVideoFallback();

if (!prefersReduced) {
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas);
