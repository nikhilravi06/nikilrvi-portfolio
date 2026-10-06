import { projects } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

const cardBackgrounds: Record<string, string> = {
  PhishFinder: "bg-gradient-to-br from-[#2a1810] via-[#8c4028] to-[#1a0f0c]",
  TOMS: "bg-gradient-to-br from-[#1a1a1a] via-[#4a4a4a] to-[#0f0f0f]",
}

function ProjectVisual({ name, subtitle }: { name: string; subtitle: string }) {
  const bg = cardBackgrounds[name] ?? "bg-muted-paper"

  if (name === "PhishFinder") {
    return (
      <div
        className={`relative flex aspect-[16/10] flex-col items-center justify-center px-6 text-center ${bg}`}
        aria-hidden="true"
      >
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40"
          aria-hidden="true"
        >
          <div
            className="h-28 w-28 rounded-full border-2 border-[#5eead4]/60 shadow-[0_0_24px_rgba(94,234,212,0.35)] sm:h-32 sm:w-32"
          />
        </div>
        <h3
          className="relative z-10 text-3xl font-bold tracking-tight sm:text-4xl"
          style={{
            textShadow:
              "0 0 20px rgba(94,234,212,0.45), 0 0 40px rgba(94,234,212,0.15)",
          }}
        >
          <span className="text-[#a7f3ec]">Phish</span>
          <span className="text-[#fef3c7]">Finder</span>
        </h3>
        <p className="relative z-10 mt-3 max-w-[16rem] text-xs leading-snug text-[#e7d5c8]/80">{subtitle}</p>
      </div>
    )
  }

  if (name === "TOMS") {
    return (
      <div
        className={`relative flex aspect-[16/10] flex-col items-center justify-center px-6 text-center ${bg}`}
        aria-hidden="true"
      >
        <h3 className="text-4xl font-extrabold tracking-[0.2em] text-[#d4af37] sm:text-5xl">TOMS</h3>
        <div className="mt-3 flex items-center gap-2 text-[#c9a227]/70" aria-hidden="true">
          <span className="text-[0.5rem]">★</span>
          <span className="h-px w-8 bg-[#b91c1c]/80" />
          <span className="text-[0.5rem]">★</span>
        </div>
        <p className="mt-3 max-w-[16rem] text-xs leading-snug text-white/55">{subtitle}</p>
      </div>
    )
  }

  return (
    <div className={`flex aspect-[16/10] items-center justify-center px-6 ${bg}`}>
      <h3 className="text-2xl font-bold text-white">{name}</h3>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-muted-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeading id="projects-heading" title="Projects" />
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name}>
              <Reveal>
                <article className="template-card h-full overflow-hidden" aria-label={project.name}>
                  <div className="sr-only">
                    <h3>{project.name}</h3>
                  </div>
                  <ProjectVisual name={project.name} subtitle={project.subtitle} />
                  <div className="p-6">
                    <p className="text-sm font-semibold text-ink">{project.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink">{project.summary}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.impact}</p>
                    <p className="mt-5 text-[0.78rem] tracking-wide text-muted uppercase">
                      {project.technologies.join(" · ")}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
