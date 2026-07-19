import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/portfolio-data";

const links = [
  { id: "about", key: "nav.about" as const },
  { id: "skills", key: "nav.skills" as const },
  { id: "career", key: "nav.career" as const },
  { id: "projects", key: "nav.projects" as const },
  { id: "education", key: "nav.education" as const },
  { id: "contact", key: "nav.contact" as const },
];

export function Nav() {
  const { t, lang, toggle, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => go("hero")}
          className="group flex items-baseline gap-2 transition-opacity hover:opacity-80 cursor-pointer"
        >
          <span className="font-display text-lg tracking-wide text-foreground">
            {tr(profile.name)}
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.3em] text-gold sm:inline">
            Portfolio
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="group relative cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.key)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="relative flex cursor-pointer items-center rounded-full border border-border/70 bg-secondary/40 p-0.5 text-xs font-medium"
          >
            {(["ja", "en"] as const).map((l) => (
              <span
                key={l}
                className={`relative z-10 rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
                  lang === l ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {l === "ja" ? "日本語" : "EN"}
                {lang === l && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-gold"
                    style={{ background: "var(--gradient-gold)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </span>
            ))}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="cursor-pointer py-2 text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(l.key)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
