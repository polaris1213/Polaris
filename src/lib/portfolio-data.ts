export type Lang = "ja" | "en";
export type LocalizedString = Record<Lang, string>;
export type LocalizedList = Record<Lang, string[]>;

export interface Project {
  id: string;
  title: LocalizedString;
  period: string;
  company: LocalizedString;
  role: LocalizedString;
  team: LocalizedString;
  overview: LocalizedString;
  tech: string[];
  responsibilities: LocalizedList;
  results: LocalizedList;
  featured?: boolean;
  cover?: string;
}

export interface CareerItem {
  id: string;
  period: string;
  company: LocalizedString;
  type: LocalizedString;
  summary: LocalizedString;
}

export interface EducationItem {
  period: string;
  school: LocalizedString;
  detail: LocalizedString;
}

export interface Certification {
  date: string;
  name: LocalizedString;
}

export const profile = {
  name: { ja: "太田 魁人", en: "Kaito Ota" } as LocalizedString,
  kana: { ja: "おおた かいと", en: "Kaito Ota" } as LocalizedString,
  title: {
    ja: "フルスタックエンジニア",
    en: "Full-Stack Engineer",
  } as LocalizedString,
  tagline: {
    ja: "8年の歳月をかけて磨いた、静かで確かな技術。",
    en: "Eight years of quiet, dependable craft in software.",
  } as LocalizedString,
  summary: {
    ja: "2018年に大学を卒業後、Webエンジニアとしてキャリアを歩み始め、約8年にわたりWebアプリケーション、業務システム、SaaS、そしてAI活用プロジェクトに携わってまいりました。フロントエンド・バックエンド・クラウドインフラを横断し、要件が未確定な段階から課題を整理し、最適な設計を提案することを得意としています。技術と業務の双方から価値を届けることを、静かな誇りとしています。",
    en: "After graduating in 2018, I began my career as a web engineer and have spent nearly eight years building web applications, enterprise systems, SaaS products, and AI-powered projects. Working across frontend, backend, and cloud infrastructure, I excel at organizing ambiguous requirements and proposing the right architecture. Delivering value from both a technical and business perspective is my quiet source of pride.",
  } as LocalizedString,
  location: { ja: "日本", en: "Japan" } as LocalizedString,
  email: "infiniteriseup@gmail.com",
  linkedin: "https://www.linkedin.com/in/%E9%AD%81%E4%BA%BA-%E5%A4%AA%E7%94%B0-19404441a/",
  chatwork: "https://www.chatwork.com/2j8j74dpanmsk",
  line: "https://line.me/ti/p/heRb8UW62T",
  availability: {
    ja: "フリーランス・フルタイム稼働可",
    en: "Freelance · Full-time Available",
  } as LocalizedString,
};

export const skillGroups: {
  label: LocalizedString;
  items: string[];
}[] = [
  {
    label: { ja: "フロントエンド", en: "Frontend" },
    items: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript"],
  },
  {
    label: { ja: "バックエンド", en: "Backend" },
    items: ["Node.js", "Python", "Django", "FastAPI", "Laravel", "PHP"],
  },
  {
    label: { ja: "クラウド / インフラ", en: "Cloud / Infra" },
    items: ["AWS Lambda", "ECS", "RDS", "CloudWatch", "Docker", "GitHub Actions", "Firebase"],
  },
  {
    label: { ja: "データベース", en: "Database" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    label: { ja: "AI / LLM", en: "AI / LLM" },
    items: ["OpenAI API", "Claude API", "LangGraph", "CrewAI", "LangChain", "AI Agent", "RAG", "MCP", "Chatbots", "Voice AI", "n8n", "Automation"],
  },
];

export const career: CareerItem[] = [
  {
    id: "freelance",
    period: "現在",
    company: { ja: "フリーランス", en: "Freelance" },
    type: { ja: "独立", en: "Independent" },
    summary: {
      ja: "AI活用プロジェクトを中心に、要件整理から設計・開発・運用改善まで一貫して担当。",
      en: "Focused on AI projects, owning everything from requirements to design, development, and operations.",
    },
  },
  {
    id: "smallit",
    period: "2023.01 — 2025.03",
    company: { ja: "株式会社 Smallit", en: "Smallit Inc." },
    type: { ja: "業務委託", en: "Contract" },
    summary: {
      ja: "SaaS・業務システム開発でフルスタックエンジニアとして設計・開発・運用改善を担当。",
      en: "Full-stack engineer designing, building, and improving SaaS and enterprise systems.",
    },
  },
  {
    id: "wapon",
    period: "2021.08 — 2022.12",
    company: { ja: "株式会社 wapon", en: "wapon Inc." },
    type: { ja: "業務委託", en: "Contract" },
    summary: {
      ja: "EC統合管理・予約管理システムの開発を通じてフルスタック開発を担当。",
      en: "Full-stack development of e-commerce integration and reservation management systems.",
    },
  },
  {
    id: "bluepeak",
    period: "2018.06 — 2021.07",
    company: { ja: "BluePeak Digital Solutions Inc.", en: "BluePeak Digital Solutions Inc." },
    type: { ja: "正社員", en: "Full-time" },
    summary: {
      ja: "Webサイト構築と業務システム開発を通じて、フロント・バックエンド開発の基礎を確立。",
      en: "Established a foundation in frontend and backend development through web and enterprise systems.",
    },
  },
];

export const education: EducationItem[] = [
  {
    period: "2014.06 — 2018.04",
    school: {
      ja: "ホセ・リサール大学",
      en: "José Rizal University",
    },
    detail: {
      ja: "コンピュータサイエンス学部 卒業（学士）",
      en: "B.S. in Computer Science",
    },
  },
];

export const certifications: Certification[] = [
  {
    date: "2024.10",
    name: {
      ja: "AWS Certified Developer – Associate",
      en: "AWS Certified Developer – Associate",
    },
  },
  {
    date: "2021.11",
    name: { ja: "基本情報技術者試験", en: "Fundamental Information Technology Engineer" },
  },
  {
    date: "2018.04",
    name: {
      ja: "学士（コンピュータサイエンス）",
      en: "Bachelor of Computer Science",
    },
  },
];

export const projects: Project[] = [
  {
    id: "knowledge-ai",
    featured: true,
    cover: "/projects/knowledge-ai.png",
    title: {
      ja: "社内ナレッジ検索 AI システム",
      en: "Internal Knowledge Search AI",
    },
    period: "2025.12 — 2026.05",
    company: { ja: "フリーランス", en: "Freelance" },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "単独開発", en: "Solo" },
    overview: {
      ja: "社内ドキュメントやマニュアルを自然言語で検索できる AI ナレッジ検索システムの開発。",
      en: "An AI knowledge-search system enabling natural-language search across internal documents and manuals.",
    },
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "OpenAI API"],
    responsibilities: {
      ja: [
        "FastAPI による API 開発",
        "PDF アップロード機能実装",
        "Embedding 生成処理実装",
        "ベクトル検索機能構築",
        "React による管理画面開発",
        "Docker 環境構築",
      ],
      en: [
        "API development with FastAPI",
        "PDF upload functionality",
        "Embedding generation pipeline",
        "Vector search implementation",
        "Admin dashboard in React",
        "Docker environment setup",
      ],
    },
    results: {
      ja: [
        "ドキュメント検索時間を大幅に削減",
        "問い合わせ対応工数の削減に貢献",
        "社内ナレッジ活用率の向上",
      ],
      en: [
        "Dramatically reduced document search time",
        "Cut inquiry-handling workload",
        "Increased internal knowledge utilization",
      ],
    },
  },
  {
    id: "sales-saas",
    featured: true,
    cover: "/projects/sales-saas.png",
    title: { ja: "AI 営業支援 SaaS", en: "AI Sales Enablement SaaS" },
    period: "2025.04 — 2025.11",
    company: { ja: "フリーランス", en: "Freelance" },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "3 人チーム", en: "Team of 3" },
    overview: {
      ja: "顧客管理・商談管理・提案書作成を一元化する SaaS。生成 AI を活用し、顧客情報や商談履歴から提案文を自動生成。",
      en: "A SaaS unifying customer, deal, and proposal management, using generative AI to auto-draft proposals from customer and deal history.",
    },
    tech: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Docker", "OpenAI API"],
    responsibilities: {
      ja: [
        "Next.js による管理画面開発",
        "Node.js によるバックエンド API 開発",
        "顧客情報管理機能の設計・実装",
        "OpenAI API 連携による提案文生成機能開発",
        "AWS 環境構築およびデプロイ対応",
        "データベース設計",
      ],
      en: [
        "Admin dashboard with Next.js",
        "Backend API with Node.js",
        "Customer management design & build",
        "Proposal generation via OpenAI API",
        "AWS setup and deployment",
        "Database design",
      ],
    },
    results: {
      ja: [
        "提案書作成業務を自動化し営業工数を 30% 削減",
        "AI 活用機能を短期間で PoC から本番環境まで実装",
        "レスポンス改善により生成時間を短縮",
      ],
      en: [
        "Automated proposals, cutting sales workload by 30%",
        "Delivered AI features from PoC to production quickly",
        "Improved response times for generation",
      ],
    },
  },
  {
    id: "clinic",
    featured: true,
    cover: "/projects/clinic.png",
    title: {
      ja: "医療機関向け予約・患者管理システム",
      en: "Clinic Reservation & Patient Management",
    },
    period: "2024.05 — 2025.03",
    company: { ja: "株式会社 Smallit", en: "Smallit Inc." },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "5 人チーム", en: "Team of 5" },
    overview: {
      ja: "クリニック・診療所向けに予約管理、患者情報管理、問診管理を提供するクラウド型業務システム。",
      en: "A cloud system for clinics providing reservation, patient records, and intake management.",
    },
    tech: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    responsibilities: {
      ja: [
        "予約管理機能開発",
        "患者管理画面実装",
        "認証認可機能実装",
        "REST API 設計",
        "データベース設計",
        "障害対応および保守",
      ],
      en: [
        "Reservation management features",
        "Patient management screens",
        "Authentication & authorization",
        "REST API design",
        "Database design",
        "Incident response & maintenance",
      ],
    },
    results: {
      ja: [
        "予約業務のデジタル化を実現",
        "月間数万件規模の予約処理を安定運用",
        "画面表示速度改善によるユーザー体験向上",
      ],
      en: [
        "Digitized reservation operations",
        "Stable handling of tens of thousands of monthly bookings",
        "Improved UX through faster rendering",
      ],
    },
  },
  {
    id: "crm",
    cover: "/projects/crm.png",
    title: { ja: "顧客管理 CRM システム", en: "Customer CRM System" },
    period: "2023.10 — 2024.04",
    company: { ja: "株式会社 Smallit", en: "Smallit Inc." },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "5 人チーム", en: "Team of 5" },
    overview: {
      ja: "営業活動を支援する CRM システム。顧客管理、商談管理、レポート出力機能を提供。",
      en: "A CRM supporting sales with customer management, deal tracking, and report export.",
    },
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    responsibilities: {
      ja: [
        "顧客管理画面開発",
        "商談管理機能実装",
        "CSV 出力機能実装",
        "API 設計",
        "データベース設計",
      ],
      en: [
        "Customer management screens",
        "Deal management features",
        "CSV export",
        "API design",
        "Database design",
      ],
    },
    results: {
      ja: [
        "営業担当者の情報管理工数削減",
        "レポート出力自動化を実現",
        "検索性能改善により業務効率 20% 向上",
      ],
      en: [
        "Reduced sales info-management effort",
        "Automated report generation",
        "20% efficiency gain via faster search",
      ],
    },
  },
  {
    id: "doc-ai",
    cover: "/projects/doc-search.png",
    title: { ja: "AI ドキュメント検索システム", en: "AI Document Search System" },
    period: "2023.01 — 2023.09",
    company: { ja: "株式会社 Smallit", en: "Smallit Inc." },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "3 人チーム", en: "Team of 3" },
    overview: {
      ja: "企業内ナレッジを自然言語検索できる生成 AI 活用システムの開発。",
      en: "A generative-AI system enabling natural-language search of enterprise knowledge.",
    },
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "OpenAI API"],
    responsibilities: {
      ja: [
        "ドキュメント管理機能開発",
        "OpenAI API 連携",
        "検索 API 開発",
        "管理画面実装",
        "システム運用対応",
      ],
      en: [
        "Document management features",
        "OpenAI API integration",
        "Search API development",
        "Admin dashboard",
        "System operations",
      ],
    },
    results: {
      ja: [
        "社内問い合わせ対応時間削減",
        "検索精度向上による業務効率改善",
        "生成 AI 導入プロジェクトの立ち上げに貢献",
      ],
      en: [
        "Reduced internal inquiry handling time",
        "Improved efficiency via search accuracy",
        "Helped launch the generative-AI initiative",
      ],
    },
  },
  {
    id: "ec",
    cover: "/projects/ec-mol.png",
    title: { ja: "EC サイト統合管理システム", en: "E-Commerce Integration System" },
    period: "2022.03 — 2022.12",
    company: { ja: "株式会社 wapon", en: "wapon Inc." },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "4 人チーム", en: "Team of 4" },
    overview: {
      ja: "複数 EC モールの商品情報・在庫情報を一元管理する Web システム。",
      en: "A web system centralizing product and inventory data across multiple e-commerce malls.",
    },
    tech: ["React", "Node.js", "MySQL", "AWS"],
    responsibilities: {
      ja: [
        "商品管理画面開発",
        "在庫同期機能実装",
        "CSV インポート・エクスポート機能開発",
        "バッチ処理開発",
      ],
      en: [
        "Product management screens",
        "Inventory synchronization",
        "CSV import/export",
        "Batch processing",
      ],
    },
    results: {
      ja: [
        "在庫更新作業の自動化を実現",
        "運用工数削減に貢献",
        "データ同期エラーを削減",
      ],
      en: [
        "Automated inventory updates",
        "Reduced operational workload",
        "Cut data-sync errors",
      ],
    },
  },
  {
    id: "salon",
    cover: "/projects/reservation.png",
    title: { ja: "予約管理 Web システム（美容サロン）", en: "Salon Reservation System" },
    period: "2021.08 — 2022.02",
    company: { ja: "株式会社 wapon", en: "wapon Inc." },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "4 人チーム", en: "Team of 4" },
    overview: {
      ja: "美容サロン向けの予約管理システム開発。",
      en: "A reservation management system for beauty salons.",
    },
    tech: ["React", "Node.js", "MySQL"],
    responsibilities: {
      ja: [
        "予約画面実装",
        "API 開発",
        "顧客管理機能開発",
        "メール通知機能実装",
      ],
      en: [
        "Reservation screens",
        "API development",
        "Customer management",
        "Email notifications",
      ],
    },
    results: {
      ja: ["予約業務の効率化を実現", "顧客管理機能によりリピート率向上に貢献"],
      en: ["Streamlined reservation operations", "Boosted repeat rate via customer management"],
    },
  },
  {
    id: "logistics",
    cover: "/projects/logistics.png",
    title: { ja: "物流企業向け配送管理システム", en: "Logistics Delivery Management" },
    period: "2019.10 — 2020.12",
    company: { ja: "BluePeak Digital Solutions Inc.", en: "BluePeak Digital Solutions Inc." },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "7 人チーム", en: "Team of 7" },
    overview: {
      ja: "配送状況管理、請求管理、在庫管理を行う業務システム。",
      en: "An enterprise system for delivery tracking, billing, and inventory.",
    },
    tech: ["PHP", "JavaScript", "MySQL"],
    responsibilities: {
      ja: ["配送管理画面実装", "帳票出力機能開発", "API 連携", "テストおよび保守"],
      en: ["Delivery management screens", "Report/document output", "API integration", "Testing & maintenance"],
    },
    results: {
      ja: ["帳票作成時間短縮", "業務効率向上に貢献"],
      en: ["Faster report generation", "Improved operational efficiency"],
    },
  },
  {
    id: "realestate",
    cover: "/projects/realestate.png",
    title: { ja: "不動産マッチングプラットフォーム", en: "Real Estate Matching Platform" },
    period: "2021.01 — 2021.07",
    company: { ja: "BluePeak Digital Solutions Inc.", en: "BluePeak Digital Solutions Inc." },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "5 人チーム", en: "Team of 5" },
    overview: {
      ja: "不動産オーナーと入居希望者をマッチングする Web サービス。",
      en: "A web service matching property owners with prospective tenants.",
    },
    tech: ["React", "Node.js", "MySQL", "AWS"],
    responsibilities: {
      ja: ["検索機能開発", "問い合わせ機能実装", "管理画面開発", "API 開発"],
      en: ["Search features", "Inquiry features", "Admin dashboard", "API development"],
    },
    results: {
      ja: ["検索速度改善", "ユーザー利便性向上", "問い合わせ件数増加に貢献"],
      en: ["Improved search speed", "Better usability", "Increased inquiry volume"],
    },
  },
  {
    id: "rpa",
    cover: "/projects/rpa.png",
    title: {
      ja: "業務自動化（RPA）システム開発",
      en: "Business Automation (RPA) System",
    },
    period: "2025.04 — 現在",
    company: { ja: "フリーランス", en: "Freelance" },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    team: { ja: "単独開発", en: "Solo" },
    overview: {
      ja: "企業のバックオフィス業務を対象としたRPAシステムの開発プロジェクト。業務分析から設計・開発・導入・運用保守までを一人で担当し、業務効率化と品質向上を実現。",
      en: "An RPA system development project targeting corporate back-office operations. Solely responsible from business analysis through design, development, deployment, and ongoing maintenance.",
    },
    tech: ["UiPath", "Python", "Playwright", "pandas", "Requests", "OpenPyXL", "SQL Server", "Excel"],
    responsibilities: {
      ja: [
        "要件定義・業務分析",
        "自動化対象業務の選定および改善提案",
        "RPAシナリオ設計・実装",
        "外部システムとのデータ連携",
        "テスト・品質保証",
        "本番リリースおよび運用保守",
        "障害対応・機能改善",
        "ドキュメント作成",
      ],
      en: [
        "Requirements definition & business analysis",
        "Selection of automation targets and improvement proposals",
        "RPA scenario design & implementation",
        "Data integration with external systems",
        "Testing & quality assurance",
        "Production release and ongoing maintenance",
        "Incident response & feature improvements",
        "Documentation",
      ],
    },
    results: {
      ja: [
        "プロジェクトを単独で完遂し、安定稼働を実現",
        "定型業務の自動化により作業工数を大幅に削減",
        "ヒューマンエラーの防止による業務品質の向上",
        "業務プロセスの標準化・属人化の解消に貢献",
        "保守性・拡張性を考慮したシステムを構築",
      ],
      en: [
        "Delivered the project solo and achieved stable operation",
        "Dramatically reduced manual workload through routine task automation",
        "Improved operational quality by eliminating human error",
        "Contributed to process standardization and reduced knowledge silos",
        "Built a system with maintainability and extensibility in mind",
      ],
    },
  },
  {
    id: "hr",
    cover: "/projects/hr.png",
    title: { ja: "人事・勤怠管理システム", en: "HR & Attendance System" },
    period: "2018.06 — 2019.09",
    company: { ja: "BluePeak Digital Solutions Inc.", en: "BluePeak Digital Solutions Inc." },
    role: { ja: "フロントエンドエンジニア", en: "Frontend Engineer" },
    team: { ja: "4 人チーム", en: "Team of 4" },
    overview: {
      ja: "従業員情報管理、勤怠管理、休暇申請を行う社内業務システム。",
      en: "An internal system for employee records, attendance, and leave requests.",
    },
    tech: ["JavaScript", "PHP", "MySQL", "Linux"],
    responsibilities: {
      ja: ["画面開発", "データベース設計補助", "不具合修正"],
      en: ["Screen development", "Database design support", "Bug fixing"],
    },
    results: {
      ja: ["紙運用からのシステム移行を支援", "勤怠集計作業を効率化", "運用負荷軽減に貢献"],
      en: ["Supported migration from paper", "Streamlined attendance aggregation", "Reduced operational load"],
    },
  },
];

export const stats: { value: string; label: LocalizedString }[] = [
  { value: "8+", label: { ja: "年の開発経験", en: "Years of experience" } },
  { value: "10", label: { ja: "主要プロジェクト", en: "Key projects" } },
  { value: "4", label: { ja: "在籍・契約先", en: "Companies & clients" } },
  { value: "30%", label: { ja: "営業工数削減", en: "Workload reduced" } },
];
