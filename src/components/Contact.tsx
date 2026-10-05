import { ArrowUpRight } from "lucide-react"
import { site } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="06" id="contact-heading" title="Contact" />
        </Reveal>
        <Reveal>
          <a
            href={`mailto:${site.email}`}
            className="inline-block max-w-full font-serif text-[clamp(1.7rem,5vw,3.4rem)] leading-tight tracking-tight break-words text-ink transition-colors duration-200 hover:text-accent"
          >
            {site.email}
          </a>
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors duration-200 hover:text-accent"
              >
                {site.phoneDisplay}
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors duration-200 hover:text-accent"
              >
                {site.linkedinLabel}
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={site.resumeHref}
                className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors duration-200 hover:text-accent"
              >
                Download resume
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
            <li className="text-sm text-muted">{site.location}</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
