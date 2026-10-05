import { useState } from "react"
import { experience } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="02" id="experience-heading" title="Experience" />
        </Reveal>
        <ol className="border-t border-line">
          {experience.map((role, index) => {
            const expanded = open === index
            const panelId = `role-${index}`

            return (
              <li key={`${role.title}-${role.period}`} className="border-b border-line">
                <article>
                  <button
                    type="button"
                    className="grid w-full gap-2 py-6 text-left transition-colors duration-200 hover:text-accent sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-10"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? -1 : index)}
                  >
                    <span className="text-sm text-muted">{role.period}</span>
                    <span>
                      <span className="block font-serif text-3xl tracking-tight text-ink">
                        {role.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {role.organization}
                        {role.location ? ` · ${role.location}` : ""}
                        {role.kind ? ` · ${role.kind}` : ""}
                      </span>
                    </span>
                  </button>
                  {expanded ? (
                    <ul id={panelId} className="space-y-3 pb-7 sm:pl-[calc(9.5rem+2.5rem)]">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="grid grid-cols-[0.45rem_1fr] gap-3 text-sm leading-relaxed text-ink"
                        >
                          <span className="mt-[0.55rem] h-1 w-1 bg-accent" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
