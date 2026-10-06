import { skillGroups } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-muted-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeading id="skills-heading" title="Skills" />
        </Reveal>
        <ul className="grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <li key={group.label}>
              <Reveal>
                <h3 className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted uppercase">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink"
                    >
                      {item}
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
