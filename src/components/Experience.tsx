import { experience } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-canvas-soft">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading id="experience-heading" title="Experience" />
        </Reveal>
        <ol className="divide-y divide-line-strong">
          {experience.map((role) => (
            <li key={`${role.title}-${role.period}`} className="py-8 first:pt-0 last:pb-0">
              <Reveal>
                <article className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-10">
                  <p className="text-sm text-muted">{role.period}</p>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm leading-normal text-body">
                      {role.organization}
                      {role.location ? ` · ${role.location}` : ""}
                      {role.kind ? ` · ${role.kind}` : ""}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
