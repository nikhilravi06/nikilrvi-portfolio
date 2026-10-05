import { useState } from "react"
import { skillGroups } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Skills() {
  const [active, setActive] = useState<string>(skillGroups[0].label)

  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="04" id="skills-heading" title="Skills" />
        </Reveal>
        <ul className="flex flex-col gap-2 border-t border-line pt-8" role="tablist" aria-label="Skill groups">
          {skillGroups.map((group, index) => {
            const selected = active === group.label

            return (
              <li
                key={group.label}
                className="grid gap-3 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:items-start sm:gap-10"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`skills-panel-${index}`}
                  className={`glass-chip w-fit text-left text-sm ${
                    selected ? "border-accent/40 text-ink" : "text-muted"
                  }`}
                  onClick={() => setActive(group.label)}
                >
                  {group.label}
                </button>
                {selected ? (
                  <ul
                    id={`skills-panel-${index}`}
                    role="tabpanel"
                    className="flex flex-wrap gap-2 sm:pt-0.5"
                  >
                    {group.items.map((item) => (
                      <li key={item} className="glass-chip text-sm text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
