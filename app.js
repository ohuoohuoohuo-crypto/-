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
    product3Title: "アイランドマスター",
    product3Body: "謎の島を舞台に、探索者としてサバイバルに挑むアドベンチャーゲームです。",
    product4Body:
      "日本語シーンで自然に交流できる、チャットキーボードと AI チャットアシスタントです。",
    product5Body:
      "中小規模の不動産会社向けに、物件、賃貸、契約を一元管理する SaaS システムです。",
    product6Title: "毒舌坊主",
    product6Body:
      "20以上のキャラクター、強化された 3D 表現、会話チャレンジを備えたリアル対戦パーティーゲームです。",
    product7Body:
      "ネオン圏のカジュアルスネーク。エネルギーを集めて成長し、最強の蛇王を目指します。",
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
  document.querySelectorAll(".product-card, .value-card, .team-card, .contact-card, .contact-minimal-panel").forEach((card) => {
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

  updateHeroTitleEffects(nextLang);
  updateTeamDetail(activeMemberKey);
  updateCopyStatus(dictionary.contactCopyIdle);
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

resizeCanvas();
setupPointer();
setupTiltCards();
setupReveal();
setupLanguage();
setupTeamDirectory();
setupEmailCopy();
updateHeroTitleEffects(currentLang);
setupVideoFallback();

if (!prefersReduced) {
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas);
