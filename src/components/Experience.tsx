import { experience } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeading id="experience-heading" title="Experience" />
        </Reveal>
        <ol className="space-y-4">
          {experience.map((role) => (
            <li key={`${role.title}-${role.period}`}>
              <Reveal>
                <article className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-10">
                  <p className="text-sm font-medium text-muted">{role.period}</p>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
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
