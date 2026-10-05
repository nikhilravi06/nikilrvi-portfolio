import { certifications, education } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="05" id="education-heading" title="Education" />
        </Reveal>

        <ol className="border-t border-line">
          {education.map((item) => (
            <li key={item.credential} className="border-b border-line">
              <Reveal>
                <article className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                  <div>
                    <h3 className="text-base text-ink">{item.credential}</h3>
                    <p className="mt-1 text-sm text-muted">{item.school}</p>
                  </div>
                  <p className="text-sm text-muted sm:text-right">
                    <span className="text-ink">{item.detail}</span>
                    <span className="mx-2" aria-hidden="true">
                      ·
                    </span>
                    {item.period}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-serif text-3xl tracking-tight text-ink">Certifications & workshops</h3>
          </Reveal>
          <ul className="mt-8 grid gap-x-12 border-t border-line sm:grid-cols-2">
            {certifications.map((item) => (
              <li key={item.name} className="border-b border-line py-4">
                <p className="text-sm text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
