import { motion } from "motion/react";
import { HeroScene } from "./HeroScene";
import { useI18n } from "@/lib/i18n";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { t } = useI18n();

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { v: t("hero.stat1v"), l: t("hero.stat1l") },
    { v: t("hero.stat2v"), l: t("hero.stat2l") },
    { v: t("hero.stat3v"), l: t("hero.stat3l") },
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-hero-dark">
      {/* faint grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-hero-grid opacity-60" />

      {/* 3D scene, offset to the right */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* left-side legibility wash */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background via-background/70 to-transparent md:via-background/40" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            variants={item}
            className="mb-8 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.45em] text-gold"
          >
            <span className="h-px w-10 bg-gold/70" />
            {t("hero.role")}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-sans text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {t("hero.headLead")}{" "}
            <span className="text-gradient-gold">{t("hero.headAccent")}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("projects")}
              className="cursor-pointer rounded-md px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold"
              style={{ background: "var(--gradient-gold)" }}
            >
              {t("hero.viewWork")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("contact")}
              className="cursor-pointer rounded-md border border-border/80 bg-card/30 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-gold/70 hover:text-gold"
            >
              {t("hero.contact")}
            </motion.button>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/40 pt-8"
          >
            {stats.map((s) => (
              <div key={s.v}>
                <dt className="text-lg font-bold text-foreground">{s.v}</dt>
                <dd className="mt-1 font-mono text-[0.7rem] leading-relaxed text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-6 z-20 flex items-center gap-3 text-muted-foreground"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em]">
          {t("hero.scroll")}
        </span>
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block h-8 w-px origin-top bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
