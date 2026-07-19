import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { skillGroups } from "@/lib/portfolio-data";
import { GlowCard } from "@/components/GlowCard";

// Devicons — full color, display as-is
const devicons: Record<string, string> = {
  "React.js":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "TypeScript":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Vue.js":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Node.js":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Django":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "FastAPI":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Laravel":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "PHP":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "AWS Lambda":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "ECS":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "RDS":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "CloudWatch":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "Docker":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Firebase":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "PostgreSQL":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Redis":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "SQLite":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
};

// AI icons — inline SVG components with brand colors from provided images
const AiIcons: Record<string, React.FC> = {
  "OpenAI API": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.28 9.82a5.94 5.94 0 0 0-.51-4.89 6.01 6.01 0 0 0-6.47-2.88A5.96 5.96 0 0 0 10.81 0a6 6 0 0 0-5.72 4.16 5.96 5.96 0 0 0-3.98 2.89 6.03 6.03 0 0 0 .74 7.04 5.94 5.94 0 0 0 .51 4.89 6.01 6.01 0 0 0 6.47 2.88A5.96 5.96 0 0 0 13.2 24a6 6 0 0 0 5.72-4.17 5.96 5.96 0 0 0 3.97-2.88 6.02 6.02 0 0 0-.73-7.04l.12.01zM13.2 22.5a4.47 4.47 0 0 1-2.87-1.04l.14-.08 4.77-2.75a.77.77 0 0 0 .39-.68v-6.72l2.02 1.17a.07.07 0 0 1 .04.06v5.56A4.5 4.5 0 0 1 13.2 22.5zm-9.67-4.13a4.48 4.48 0 0 1-.54-3.02l.14.09 4.77 2.75a.78.78 0 0 0 .78 0l5.83-3.37v2.33a.08.08 0 0 1-.03.06L9.6 20.04a4.5 4.5 0 0 1-6.07-1.67zm-1.26-9.9A4.47 4.47 0 0 1 4.6 6.56v5.64a.77.77 0 0 0 .39.67l5.83 3.36-2.02 1.17a.07.07 0 0 1-.07 0L3.8 14.73a4.5 4.5 0 0 1-.53-6.26zm16.6 3.87-5.83-3.37 2.01-1.16a.07.07 0 0 1 .08 0l4.93 2.84a4.5 4.5 0 0 1-.7 8.12v-5.64a.77.77 0 0 0-.38-.66l-.11-.13zm2-3.03-.14-.09-4.76-2.76a.78.78 0 0 0-.78 0L9.36 10.83V8.5a.08.08 0 0 1 .03-.06l4.93-2.84a4.5 4.5 0 0 1 6.7 4.66l-.15-.29zM8.28 12.88 6.26 11.7a.07.07 0 0 1-.04-.06V6.08a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.77 2.75a.77.77 0 0 0-.39.68l-.02 6.74zm1.1-2.36 2.6-1.5 2.6 1.5v2.98l-2.6 1.5-2.6-1.5v-2.98z" fill="#10a37f"/>
    </svg>
  ),
  "Claude API": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.755-.122-.686-.048C.501 12.51 0 11.89 0 11.222c0-.668.501-1.29 1.132-1.321l.686-.049 1.755-.12 2.34-.098 2.697-.073.79-.047h.23l-.09-.114-.09-.231-4.71-2.647C3.85 6.186 3.437 5.96 3.126 5.729a1.72 1.72 0 0 1-.686-1.364c0-.997.826-1.826 1.826-1.826.37 0 .697.09.99.267.313.19.571.424.806.67l.686.698 1.72 1.82 1.923 2.14.413.48.164.195.097-.28.073-.329.559-2.45.426-1.877.28-1.1.194-.632a1.75 1.75 0 0 1 1.706-1.28c.949 0 1.74.778 1.74 1.74 0 .162-.014.315-.06.462l-.195.632-.279 1.1-.43 1.876-.558 2.45-.074.33-.073.28.164-.196.413-.48 1.923-2.14 1.72-1.82.685-.698c.236-.246.494-.48.808-.67a1.87 1.87 0 0 1 .988-.267c1 0 1.827.829 1.827 1.826 0 .547-.243 1.026-.687 1.364-.31.23-.722.457-1.583.993L16.327 9.32l-.08.231.08.114h.23l.79.047 2.697.073 2.34.098 1.755.12.685.049C24.499 9.932 25 10.554 25 11.222c0 .668-.501 1.289-1.132 1.321l-.685.048-1.755.122-2.34.097-2.697.073-.79.048h-.23l.09.128.08.23 4.71 2.647c.861.536 1.274.762 1.583.993.444.338.687.817.687 1.364 0 .997-.826 1.826-1.826 1.826a1.87 1.87 0 0 1-.989-.267c-.313-.19-.57-.424-.807-.67l-.685-.698-1.72-1.82-1.924-2.14-.412-.48-.165-.195-.096.28-.074.329-.558 2.45-.43 1.877-.28 1.1-.193.632a1.75 1.75 0 0 1-1.707 1.28c-.949 0-1.74-.778-1.74-1.74 0-.163.015-.315.06-.462l.195-.632.28-1.1.425-1.876.559-2.45.073-.33.073-.28-.164.196-.412.48-1.924 2.14-1.72 1.82-.685.698c-.236.246-.494.48-.807.67a1.87 1.87 0 0 1-.989.267c-1 0-1.826-.83-1.826-1.826 0-.547.243-1.026.686-1.364.31-.23.723-.457 1.584-.993z" fill="#d97757"/>
    </svg>
  ),
  "LangChain": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 5v2H7l-2 3 2 3h4v2l4-5-4-5zm2 0l4 5-4 5v-2h4l2-3-2-3h-4V7z" fill="#1c7f6e"/>
    </svg>
  ),
  "LangGraph": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="4" r="2.5" fill="currentColor"/>
      <circle cx="4" cy="18" r="2.5" fill="currentColor"/>
      <circle cx="20" cy="18" r="2.5" fill="currentColor"/>
      <line x1="12" y1="6.5" x2="5.2" y2="16" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="12" y1="6.5" x2="18.8" y2="16" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="6.5" y1="18" x2="17.5" y2="18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  "CrewAI": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM6 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm12 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM4 17c0-1.5 3.6-3 8-3s8 1.5 8 3v1H4v-1z" fill="currentColor"/>
    </svg>
  ),
  "AI Agent": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="12" r="1.5" fill="currentColor"/>
      <path d="M9 19v2M15 19v2M8 6V4a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="3" r="1" fill="currentColor"/>
    </svg>
  ),
  "RAG": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 6v4c0 1.657 3.134 3 7 3s7-1.343 7-3V6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 10v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 17l2 2-2 2M5 17l-2 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "MCP": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,2 22,19 2,19" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="8" cy="15" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="15" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
      <line x1="8" y1="15" x2="12" y2="8" stroke="currentColor" strokeWidth="1"/>
      <line x1="16" y1="15" x2="12" y2="8" stroke="currentColor" strokeWidth="1"/>
      <line x1="8" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  "Chatbots": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="13" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="10.5" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="10.5" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="10.5" r="1.5" fill="currentColor"/>
      <path d="M8 17l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Voice AI": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "n8n": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="19" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="19" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="7.5" y1="12" x2="9.5" y2="12" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14.5 12 Q16 12 16.5 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M14.5 12 Q16 12 16.5 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Automation": () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

function SkillIcon({ name }: { name: string }) {
  const AiIcon = AiIcons[name];
  if (AiIcon) {
    return (
      <span className="text-gold/80 flex-shrink-0">
        <AiIcon />
      </span>
    );
  }
  if (devicons[name]) {
    return (
      <img src={devicons[name]} alt={name} width={14} height={14}
        className="h-[14px] w-[14px] shrink-0 object-contain" loading="lazy" />
    );
  }
  return null;
}

export function Skills() {
  const { t, tr } = useI18n();

  return (
    <section id="skills" className="relative border-y border-border/50 bg-card/30 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              {t("skills.label")}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
              {t("skills.title")}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 font-serif-lux text-lg text-muted-foreground">
              {t("skills.desc")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <Reveal key={tr(g.label)} delay={gi}>
              <GlowCard className="h-full">
                <motion.div
                  className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition-colors hover:border-transparent"
                >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-xl text-foreground">{tr(g.label)}</h3>
                  <span className="font-display text-sm text-gold/50">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:border-gold/30 group-hover:text-foreground"
                    >
                      <SkillIcon name={item} />
                      {item}
                    </span>
                  ))}
                </div>
                </motion.div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
