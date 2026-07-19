import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { education, certifications } from "@/lib/portfolio-data";

export function Education() {
  const { t, tr } = useI18n();

  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="max-w-2xl">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            {t("education.label")}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            {t("education.title")}
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {/* Education */}
        <div>
          <Reveal>
            <h3 className="mb-6 font-display text-xl text-gold">{t("education.eduHead")}</h3>
          </Reveal>
          <div className="space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.period} delay={i}>
                <div className="rounded-2xl border border-border/60 bg-card p-6">
                  <span className="font-mono text-xs text-gold/70">{e.period}</span>
                  <h4 className="mt-2 font-display text-xl text-foreground">{tr(e.school)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{tr(e.detail)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <Reveal>
            <h3 className="mb-6 font-display text-xl text-gold">{t("education.certHead")}</h3>
          </Reveal>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <Reveal key={tr(c.name)} delay={i}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-card px-5 py-4 transition-colors hover:border-gold/50"
                >
                  <span className="font-mono text-xs text-gold/70">{c.date}</span>
                  <span className="h-8 w-px bg-border" />
                  <span className="text-sm text-foreground">{tr(c.name)}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
