import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { career } from "@/lib/portfolio-data";

export function Career() {
  const { t, tr, lang } = useI18n();

  const localizePeriod = (period: string) =>
    lang === "en" ? period.replace("現在", "Present") : period;

  return (
    <section id="career" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="max-w-2xl">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            {t("career.label")}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            {t("career.title")}
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16 pl-8 md:pl-12">
        {/* vertical line */}
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-gold/60 via-border to-transparent md:left-1" />

        <div className="space-y-12">
          {career.map((c, i) => (
            <Reveal key={c.id} delay={i}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative"
              >
                <span className="absolute -left-8 top-1.5 flex h-3 w-3 items-center justify-center md:-left-[3.05rem]">
                  <span className="absolute h-3 w-3 rounded-full border border-gold/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl text-foreground">{tr(c.company)}</h3>
                  <span className="font-mono text-sm text-gold">{localizePeriod(c.period)}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {tr(c.type)}
                </p>
                <p className="mt-3 max-w-2xl font-serif-lux text-lg leading-relaxed text-muted-foreground">
                  {tr(c.summary)}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
