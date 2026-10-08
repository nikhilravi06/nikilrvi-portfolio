import { skillGroups } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading id="skills-heading" title="Skills" />
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <li key={group.label} className="feature-card p-6 sm:p-8">
              <Reveal>
                <h3 className="text-[0.6875rem] font-semibold tracking-[0.08em] text-muted uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="badge-pill">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
