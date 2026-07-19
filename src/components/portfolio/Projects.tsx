import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { projects, type Project } from "@/lib/portfolio-data";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, tr } = useI18n();
  return (
    <motion.button
      layoutId={`card-${project.id}`}
      onClick={onOpen}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex h-full cursor-pointer flex-col rounded-2xl border border-border/60 bg-card text-left transition-colors hover:border-gold/50 hover:shadow-elegant overflow-hidden"
    >
      {/* Cover image */}
      {project.cover && (
        <div className="relative h-44 w-full shrink-0 overflow-hidden">
          <img
            src={project.cover}
            alt={tr(project.title)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/80" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
      <h3 className="mt-3 font-display text-2xl leading-snug text-foreground">
        {tr(project.title)}
      </h3>
      <p className="mt-4 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {tr(project.overview)}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t2) => (
          <span
            key={t2}
            className="rounded-full bg-secondary/50 px-2.5 py-1 text-[0.7rem] text-muted-foreground"
          >
            {t2}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded-full px-2 py-1 text-[0.7rem] text-gold/70">
            +{project.tech.length - 4}
          </span>
        )}
      </div>
      <span className="mt-6 flex items-center gap-2 text-sm text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {t("projects.details")}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, tr, lang } = useI18n();
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        layoutId={`card-${project.id}`}
        className="relative z-10 max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border/70 bg-card p-8 shadow-elegant md:p-10 scrollbar-modal"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
          aria-label={t("projects.close")}
        >
          ✕
        </button>

        {project.cover && (
          <div className="mb-6 -mx-8 -mt-8 md:-mx-10 md:-mt-10 overflow-hidden rounded-t-3xl">
            <img
              src={project.cover}
              alt={tr(project.title)}
              className="w-full object-contain"
            />
          </div>
        )}

        <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">
          {tr(project.title)}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{tr(project.company)}</p>

        <p className="mt-6 font-serif-lux text-lg leading-relaxed text-muted-foreground">
          {tr(project.overview)}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              {t("projects.role")}
            </p>
            <p className="mt-1 text-sm text-foreground">{tr(project.role)}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              {t("projects.team")}
            </p>
            <p className="mt-1 text-sm text-foreground">{tr(project.team)}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            {t("projects.tech")}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t2) => (
              <span
                key={t2}
                className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-gold"
              >
                {t2}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-3 font-display text-lg text-foreground">
              {t("projects.responsibilities")}
            </p>
            <ul className="space-y-2">
              {project.responsibilities[lang].map((r, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-display text-lg text-foreground">
              {t("projects.results")}
            </p>
            <ul className="space-y-2">
              {project.results[lang].map((r, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
                  <span className="mt-1.5 text-gold">◆</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative border-y border-border/50 bg-card/30 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              {t("projects.label")}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
              {t("projects.title")}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 font-serif-lux text-lg text-muted-foreground">
              {t("projects.desc")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i % 3}>
              <ProjectCard project={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
