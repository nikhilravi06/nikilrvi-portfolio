import { projects } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

function ProjectVisual({ name, subtitle }: { name: string; subtitle: string }) {
  if (name === "PhishFinder") {
    return (
      <div
        className="product-visual relative flex aspect-[16/10] flex-col items-center justify-center px-6 text-center"
        aria-hidden="true"
      >
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40"
          aria-hidden="true"
        >
          <div className="h-28 w-28 rounded-full border-2 border-on-dark-soft sm:h-32 sm:w-32" />
        </div>
        <h3 className="relative z-10 text-3xl font-semibold tracking-[-0.02em] text-on-dark sm:text-4xl">
          <span className="text-text-link">Phish</span>
          Finder
        </h3>
        <p className="relative z-10 mt-3 max-w-[16rem] text-xs leading-snug text-on-dark-soft">
          {subtitle}
        </p>
      </div>
    )
  }

  if (name === "TOMS") {
    return (
      <div
        className="product-visual relative flex aspect-[16/10] flex-col items-center justify-center px-6 text-center"
        aria-hidden="true"
      >
        <h3 className="text-4xl font-semibold tracking-[0.08em] text-on-dark sm:text-5xl">TOMS</h3>
        <div className="mt-3 flex items-center gap-2 text-on-dark-soft" aria-hidden="true">
          <span className="text-[0.5rem]">★</span>
          <span className="h-px w-8 bg-on-dark-soft/50" />
          <span className="text-[0.5rem]">★</span>
        </div>
        <p className="mt-3 max-w-[16rem] text-xs leading-snug text-on-dark-soft">{subtitle}</p>
      </div>
    )
  }

  return (
    <div className="product-visual flex aspect-[16/10] items-center justify-center px-6">
      <h3 className="text-2xl font-semibold text-on-dark">{name}</h3>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-canvas-soft">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading id="projects-heading" title="Projects" />
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name}>
              <Reveal>
                <article className="template-card h-full" aria-label={project.name}>
                  <div className="sr-only">
                    <h3>{project.name}</h3>
                  </div>
                  <ProjectVisual name={project.name} subtitle={project.subtitle} />
                  <div className="template-card-body border-t border-line">
                    <p className="text-lg font-semibold text-ink">{project.subtitle}</p>
                    <p className="mt-4 text-sm leading-normal text-body">{project.summary}</p>
                    <p className="mt-3 text-sm leading-normal text-muted">{project.impact}</p>
                    <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.08em] text-muted uppercase">
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
