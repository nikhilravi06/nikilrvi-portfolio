import { projects } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

const projectTitleClass =
  "text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-on-dark"

const projectSubtitleClass =
  "max-w-[18rem] text-sm font-normal leading-normal text-on-dark-soft"

function ProjectVisual({ name, subtitle }: { name: string; subtitle: string }) {
  if (name === "PhishFinder") {
    return (
      <div
        className="product-visual flex aspect-[16/10] flex-col items-center justify-center px-8 text-center"
        aria-hidden="true"
      >
        <h3 className={projectTitleClass}>
          <span className="text-text-link">Phish</span>
          Finder
        </h3>
        <p className={`mt-2 ${projectSubtitleClass}`}>{subtitle}</p>
      </div>
    )
  }

  if (name === "TOMS") {
    return (
      <div
        className="product-visual flex aspect-[16/10] flex-col items-center justify-center px-8 text-center"
        aria-hidden="true"
      >
        <h3 className={projectTitleClass}>TOMS</h3>
        <p className={`mt-2 ${projectSubtitleClass}`}>{subtitle}</p>
      </div>
    )
  }

  return (
    <div className="product-visual flex aspect-[16/10] items-center justify-center px-8">
      <h3 className={projectTitleClass}>{name}</h3>
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
