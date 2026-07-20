import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Lang, LocalizedString } from "./portfolio-data";

const STORAGE_KEY = "portfolio-lang";

const ui = {
  "nav.about": { ja: "概要", en: "About" },
  "nav.skills": { ja: "スキル", en: "Skills" },
  "nav.career": { ja: "経歴", en: "Career" },
  "nav.projects": { ja: "実績", en: "Work" },
  "nav.education": { ja: "学歴", en: "Education" },
  "nav.contact": { ja: "連絡", en: "Contact" },

  "hero.role": { ja: "ソフトウェアエンジニア", en: "Software Engineer" },
  "hero.scroll": { ja: "スクロール", en: "Scroll" },
  "hero.viewWork": { ja: "実績を見る", en: "View Projects" },
  "hero.contact": { ja: "連絡する", en: "Get in Touch" },
  "hero.headLead": { ja: "アイデアを、", en: "Turning ideas into" },
  "hero.headAccent": { ja: "価値あるプロダクトへ。", en: "products that matter." },
  "hero.subtitle": {
    ja: "技術で課題を解決し、ビジネスの成長を支援。要件定義から設計・開発・運用まで一貫して担当し、安定性・保守性・拡張性を重視した信頼されるシステム開発を提供します。現在、新しい機会を歓迎しています。",
    en: "I solve problems with technology and support business growth. Covering everything from requirements to design, development, and operations — delivering reliable systems built for stability, maintainability, and scale. Currently open to new opportunities.",
  },
  "hero.stat1v": { ja: "8年+", en: "8+ yrs" },
  "hero.stat1l": { ja: "本番システムの構築", en: "building production systems" },
  "hero.stat2v": { ja: "フルスタック", en: "Full-stack" },
  "hero.stat2l": { ja: "分散システム対応", en: "+ distributed systems" },
  "hero.stat3v": { ja: "フリーランス", en: "Freelance" },
  "hero.stat3l": { ja: "新規案件歓迎", en: "open to new work" },

  "about.label": { ja: "概要", en: "About" },
  "about.title": { ja: "静かに、確かに。", en: "Quiet. Dependable." },
  "about.available": { ja: "稼働状況", en: "Availability" },
  "about.location": { ja: "拠点", en: "Location" },

  "skills.label": { ja: "スキル", en: "Expertise" },
  "skills.title": { ja: "活かせる技術", en: "Technical Toolkit" },
  "skills.desc": {
    ja: "フロントエンドからバックエンド、クラウドインフラまで横断的に対応します。",
    en: "Spanning frontend, backend, and cloud infrastructure end to end.",
  },

  "career.label": { ja: "経歴", en: "Career" },
  "career.title": { ja: "歩んできた道", en: "The Path So Far" },

  "projects.label": { ja: "実績", en: "Selected Work" },
  "projects.title": { ja: "手がけたプロジェクト", en: "Projects I've Built" },
  "projects.desc": {
    ja: "職務経歴書に記載したプロジェクトを厳選してご紹介します。",
    en: "A curated selection drawn from my professional history.",
  },
  "projects.role": { ja: "役割", en: "Role" },
  "projects.team": { ja: "体制", en: "Team" },
  "projects.tech": { ja: "使用技術", en: "Tech Stack" },
  "projects.responsibilities": { ja: "担当業務", en: "Responsibilities" },
  "projects.results": { ja: "実績・成果", en: "Outcomes" },
  "projects.close": { ja: "閉じる", en: "Close" },
  "projects.details": { ja: "詳細を見る", en: "View details" },
  "projects.featured": { ja: "注目", en: "Featured" },

  "education.label": { ja: "学歴・資格", en: "Education & Certifications" },
  "education.title": { ja: "学びの記録", en: "Learning & Credentials" },
  "education.eduHead": { ja: "学歴", en: "Education" },
  "education.certHead": { ja: "免許・資格", en: "Certifications" },

  "contact.label": { ja: "連絡", en: "Contact" },
  "contact.title": { ja: "ご一緒できることを楽しみに。", en: "Let's build something." },
  "contact.desc": {
    ja: "新しいプロジェクトやご相談を歓迎します。お気軽にご連絡ください。",
    en: "I welcome new projects and conversations. Feel free to reach out.",
  },
  "contact.email": { ja: "メール", en: "Email" },
  "contact.linkedin": { ja: "LinkedIn", en: "LinkedIn" },
  "contact.chatwork": { ja: "Chatwork", en: "Chatwork" },
  "contact.line": { ja: "LINE", en: "LINE" },

  "footer.rights": { ja: "All rights reserved.", en: "All rights reserved." },
} satisfies Record<string, LocalizedString>;

type UIKey = keyof typeof ui;

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: UIKey) => string;
  tr: (s: LocalizedString) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "ja" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  const toggle = () => setLang(lang === "ja" ? "en" : "ja");

  const value: I18nContextValue = {
    lang,
    setLang,
    toggle,
    t: (key) => ui[key][lang],
    tr: (s) => s[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
