import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/portfolio-data";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </p>
  );
}

export function About() {
  const { t, tr } = useI18n();

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <Reveal>
            <SectionLabel>{t("about.label")}</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
              {t("about.title")}
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {t("about.available")}
                </p>
                <p className="mt-1 font-serif-lux text-lg text-gold">
                  {tr(profile.availability)}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={1}>
            <p className="font-serif-lux text-xl leading-loose text-muted-foreground md:text-[1.35rem] md:leading-[2.1]">
              {tr(profile.summary)}
            </p>
          </Reveal>


        </div>
      </div>
    </section>
  );
}
