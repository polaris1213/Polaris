import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/portfolio-data";

// SVG icons for each contact method
function EmailIcon() {
  return <img src="/gmail_new_logo.webp" alt="Gmail" width={18} height={18} className="h-[18px] w-[18px] object-contain" />;
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function ChatworkIcon() {
  return (
    <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white p-0.5">
      <img src="/chatwork_logo.webp" alt="Chatwork" width={16} height={16} className="h-[16px] w-[16px] object-contain" />
    </span>
  );
}

function LineIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
    </svg>
  );
}

type ContactLink = {
  key: string;
  label: string;
  href: string;
  icon: React.FC;
  gradient: string;
};

export function Contact() {
  const { t, tr } = useI18n();
  const year = new Date().getFullYear();

  const links: ContactLink[] = [
    {
      key: "email",
      label: t("contact.email"),
      href: `mailto:${profile.email}`,
      icon: EmailIcon,
      gradient: "var(--gradient-gold)",
    },
    {
      key: "linkedin",
      label: t("contact.linkedin"),
      href: profile.linkedin,
      icon: LinkedInIcon,
      gradient: "linear-gradient(135deg, #0077b5, #00a0dc)",
    },
    {
      key: "chatwork",
      label: t("contact.chatwork"),
      href: profile.chatwork ? `${profile.chatwork}` : "#",
      icon: ChatworkIcon,
      gradient: "linear-gradient(135deg, #e8380d, #f47c20)",
    },
    {
      key: "line",
      label: t("contact.line"),
      href: profile.line ? `${profile.line}` : "#",
      icon: LineIcon,
      gradient: "linear-gradient(135deg, #00b300, #00c300)",
    },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-warm">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center md:py-44">
        <Reveal>
          <p className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            {t("contact.label")}
            <span className="h-px w-8 bg-gold/60" />
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            {t("contact.title")}
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-xl font-serif-lux text-lg leading-relaxed text-muted-foreground">
            {t("contact.desc")}
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.key}
                  href={link.href}
                  target={link.key !== "email" ? "_blank" : undefined}
                  rel={link.key !== "email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium text-white shadow-elegant min-w-[160px]"
                  style={{ background: link.gradient }}
                >
                  <Icon />
                  {link.label}
                </motion.a>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span className="font-display text-sm text-foreground">{tr(profile.name)}</span>
          <span>
            © {year} {tr(profile.name)}. {t("footer.rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
