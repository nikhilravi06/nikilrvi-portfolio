import { summary } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="01" id="about-heading" title="About" />
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:gap-20">
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed text-ink">{summary.about}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="border-t border-line">
              <div className="border-b border-line py-5">
                <dt className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">Languages</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  {summary.languages.join(" · ")}
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">Outside work</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  {summary.interests.join(" · ")}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
