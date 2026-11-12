import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Award, ChevronDown, GraduationCap, Mail, Phone } from "lucide-react"
import {
  certifications,
  education,
  experience,
  projects,
  site,
  skillGroups,
  softSkills,
} from "../data/resume.ts"

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Title({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="mb-10 sm:mb-12">
      <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">{kicker}</p>
      <h2 className="pixel text-[clamp(2rem,5vw,3.2rem)] uppercase leading-none text-ink">{title}</h2>
    </Reveal>
  )
}

const shell = "mx-auto max-w-5xl px-5 sm:px-8"

export function About() {
  return (
    <section aria-label="About" className={`${shell} pb-6 pt-16 sm:pt-20`}>
      <Reveal className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-start">
        <p className="text-[clamp(1.15rem,2.2vw,1.45rem)] leading-[1.5] text-ink">{site.summary}</p>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-[14px] md:grid-cols-1">
          {[
            ["Based in", site.location],
            ["Experience", "VoiceStack · Amazon"],
            ["Degree", "B.Tech CSE, First Class"],
            ["Speaks", site.languages.join(" · ")],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{k}</dt>
              <dd className="mt-1 font-medium text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}

function RoleCard({ role, index }: { role: (typeof experience)[number]; index: number }) {
  const [open, setOpen] = useState(false)
  const preview = 4
  const shown = open ? role.points : role.points.slice(0, preview)
  const more = role.points.length - preview
  return (
    <Reveal>
      <article className="grid gap-4 border-t border-line py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
        <div>
          <p className="font-mono text-[12px] text-muted">{role.period}</p>
          {role.kind && (
            <span className="mt-2 inline-block rounded-full border border-line px-2 py-0.5 text-[11px] text-body">
              {role.kind}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-[1.3rem] font-semibold leading-tight text-ink">
            {role.title}
            <span className="font-normal text-muted"> · {role.organization}</span>
          </h3>
          {role.location && <p className="mt-1 text-[14px] text-muted">{role.location}</p>}
          <ul className="mt-4 space-y-2.5">
            {shown.map((p) => (
              <li key={p} className="relative pl-5 text-[15px] leading-relaxed">
                <span
                  className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-[2px]"
                  style={{ background: index === 0 ? "var(--color-brand)" : "var(--color-ink)" }}
                />
                {p}
              </li>
            ))}
          </ul>
          {more > 0 && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              {open ? "Show less" : `Show ${more} more`}
              <ChevronDown size={15} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export function Experience() {
  return (
    <section id="experience" className={`${shell} py-20 sm:py-24`}>
      <Title kicker="Where I’ve worked" title="Experience" />
      <div className="border-b border-line">
        {experience.map((role, i) => (
          <RoleCard key={role.title} role={role} index={i} />
        ))}
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className="grain py-20 sm:py-24">
      <div className={shell}>
        <Title kicker="Things I’ve built" title="Projects" />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.name}>
              <article className="hard-shadow flex h-full flex-col rounded-[28px] border-2 border-ink bg-white p-7 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <img src={p.mark} alt="" className="h-14 w-14 rounded-2xl" width={56} height={56} />
                </div>
                <h3 className="pixel mt-6 text-[1.7rem] uppercase leading-none text-ink">{p.name}</h3>
                <p className="mt-2 text-[15px] font-medium text-ink">{p.subtitle}</p>
                <p className="mt-4 text-[15px] leading-relaxed">{p.summary}</p>
                <p className="mt-4 rounded-2xl bg-paper px-4 py-3 text-[14px] leading-relaxed text-ink">
                  <span className="font-semibold">Impact: </span>
                  {p.impact}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 pt-1">
                  {p.technologies.map((t) => (
                    <li key={t} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[12px] text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className={`${shell} py-20 sm:py-24`}>
      <Title kicker="What I work with" title="Skills" />
      <Reveal className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="mb-3 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">{g.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="hard-shadow-sm rounded-full border-[1.5px] border-ink bg-white px-3.5 py-1.5 text-[14px] font-medium text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-3 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">Soft skills</h3>
          <p className="text-[15px] text-ink">{softSkills.join(" · ")}</p>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-14 md:grid-cols-2">
        <Reveal>
          <h3 className="mb-6 flex items-center gap-2 text-[1.15rem] font-semibold text-ink">
            <Award size={20} /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 text-[15px]">
                <span className="text-ink">{c.name}</span>
                <span className="shrink-0 font-mono text-[12px] text-muted">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <h3 className="mb-6 flex items-center gap-2 text-[1.15rem] font-semibold text-ink">
            <GraduationCap size={21} /> Education
          </h3>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.title} className="border-b border-line pb-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[15px] font-medium text-ink">{e.title}</p>
                  <span className="shrink-0 font-mono text-[12px] text-muted">{e.period}</span>
                </div>
                <p className="mt-1 text-[14px]">
                  {e.school} · <span className="text-ink">{e.note}</span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="zigzag rotate-180 bg-white" aria-hidden="true" style={{ background: "#fff" }} />
      <div className={`${shell} py-24 text-center sm:py-28`}>
        <Reveal>
          <p className="font-hand text-[22px] text-white/70">Got a role in mind?</p>
          <h2 className="pixel mt-2 text-[clamp(2.6rem,9vw,5.6rem)] uppercase leading-[0.95]">Let’s talk</h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] text-white/70">
            I’m open to AI data analyst and data roles. The fastest way to reach me is email.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark"
            >
              <Mail size={17} /> {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[15px] text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} /> {site.phoneDisplay}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-3 text-[15px] text-white transition-colors hover:bg-white/10"
            >
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-3 text-[15px] text-white transition-colors hover:bg-white/10"
            >
              Resume (PDF) <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="border-t border-white/10">
        <div className={`${shell} flex flex-col items-center justify-between gap-2 py-6 text-[13px] text-white/50 sm:flex-row`}>
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.location}</p>
        </div>
      </footer>
    </section>
  )
}
