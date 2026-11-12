import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownToLine, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import {
  certifications,
  education,
  experience,
  focus,
  internships,
  projects,
  site,
  skills,
} from "../data/resume.ts"

const shell = "mx-auto max-w-6xl px-5 sm:px-8"

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function SectionHead({ index, label, title, intro }: { index: string; label: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[1fr_1.4fr] md:items-end">
      <div>
        <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
          {index} / {label}
        </p>
        <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1]">{title}</h2>
      </div>
      {intro && <p className="max-w-xl text-[16px] md:justify-self-end md:text-right">{intro}</p>}
    </Reveal>
  )
}

/* ─────────────────────────── Hero ─────────────────────────── */

export function Hero() {
  const reduce = useReducedMotion()
  const rise = (d: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: d },
        }

  const stats = [
    ["2+ years", "in AI and data roles"],
    ["VoiceStack · Amazon", "teams I’ve worked with"],
    ["B.Tech CSE", "First Class, 2024"],
    ["6 certifications", "Google, IBM, AWS"],
  ]

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className={`${shell} relative grid items-center gap-12 pb-16 pt-14 md:grid-cols-[1.35fr_1fr] md:gap-16 md:pb-20 md:pt-24`}>
        <div>
          <motion.p {...rise(0.05)} className="font-mono text-[13px] uppercase tracking-[0.14em] text-muted">
            {site.name} — {site.role}
          </motion.p>
          <motion.h1
            {...rise(0.1)}
            className="mt-4 text-[clamp(2.5rem,5.6vw,4.4rem)] font-semibold leading-[1.02]"
          >
            {site.headline}
          </motion.h1>
          <motion.p {...rise(0.18)} className="mt-6 max-w-xl text-[17px] leading-relaxed">
            {site.intro}
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-[15px] font-medium text-white transition-opacity hover:opacity-85"
            >
              <ArrowDownToLine size={16} /> Download résumé
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-white px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-ink"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-2.5 text-[15px] font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          {/* Handwritten "Hi, this is me!" note pointing at the photo */}
          <motion.div
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0, y: 8, rotate: -14 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.9 }}
            className="pointer-events-none absolute right-6 top-6 z-10 select-none md:-left-32 md:right-auto md:top-24"
          >
            <p className="font-hand text-[22px] leading-[1.05] text-white md:text-[24px] md:text-ink">
              Hi, this
              <br />
              is me!
            </p>
            {/* sparkle ticks */}
            <svg viewBox="0 0 30 24" className="absolute -right-6 -top-3 h-5 w-6 text-white md:text-ink" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 20 L8 8" />
              <path d="M13 18 L23 6" />
              <path d="M18 22 L28 18" />
            </svg>
            {/* arrow: curves down-left on mobile, down-right into the photo on desktop */}
            <svg viewBox="0 0 80 60" className="absolute -bottom-12 -left-12 h-12 w-16 -scale-x-100 text-white md:text-ink md:-bottom-14 md:left-10 md:h-14 md:w-20 md:scale-x-100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 4 C 4 30, 30 50, 70 46" />
              <path d="M60 37 L 71 46 L 59 54" />
            </svg>
          </motion.div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line border-black bg-gradient-to-b from-[#161616] to-black shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(0,0,0,0.45)]">
            <div
              className="absolute inset-0 opacity-[0.08]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000, transparent 75%)",
              }}
            />
            <img
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              width={640}
              height={800}
              className="absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto object-contain object-bottom"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" aria-hidden="true" />
          </div>
          <figcaption className="absolute -bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-line bg-white/95 px-4 py-3 shadow-[0_12px_24px_-14px_rgba(0,0,0,0.3)] backdrop-blur">
            <span>
              <span className="block text-[14px] font-semibold text-ink">{site.name}</span>
              <span className="block text-[13px] text-muted">{site.role}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[13px] text-body">
              <MapPin size={14} /> {site.location}
            </span>
          </figcaption>
        </motion.figure>
      </div>

      <div className={`${shell} relative pb-20`}>
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-white md:grid-cols-4">
          {stats.map(([k, v], i) => (
            <div
              key={k}
              className={`px-5 py-5 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
            >
              <dt className="text-[17px] font-semibold tracking-tight text-ink">{k}</dt>
              <dd className="mt-0.5 text-[13px] text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ─────────────────────────── Focus ─────────────────────────── */

export function Focus() {
  return (
    <section id="work" className="border-t border-line bg-white py-20 md:py-28">
      <div className={shell}>
        <SectionHead
          index="01"
          label="What I do"
          title="Where I add value"
          intro="Most of my work sits between AI models and the data around them: measuring how models perform, keeping data safe, and making workflows reliable."
        />
        <div className="grid overflow-hidden rounded-xl border border-line md:grid-cols-2">
          {focus.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.05}
              className={`p-7 md:p-9 ${i > 0 ? "border-t border-line" : ""} ${i === 1 ? "md:border-t-0 md:border-l" : ""} ${i === 3 ? "md:border-l" : ""}`}
            >
              <p className="font-mono text-[12px] text-muted">0{i + 1}</p>
              <h3 className="mt-4 text-[1.3rem] font-semibold leading-snug">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed">{f.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <li key={t} className="rounded-md bg-bg px-2.5 py-1 font-mono text-[12px] text-body ring-1 ring-line">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Experience ─────────────────────────── */

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className={shell}>
        <SectionHead index="02" label="Experience" title="Where I’ve worked" />
        <div className="border-t border-line">
          {experience.map((role) => (
            <Reveal key={role.title}>
              <article className="grid gap-4 border-b border-line py-10 md:grid-cols-[1fr_2.2fr] md:gap-12">
                <div>
                  <p className="font-mono text-[13px] text-ink">{role.period}</p>
                  <p className="mt-1 text-[14px] text-muted">{role.location}</p>
                </div>
                <div>
                  <h3 className="text-[1.35rem] font-semibold leading-snug">{role.title}</h3>
                  <p className="mt-1 text-[15px] text-muted">{role.organization}</p>
                  <ul className="mt-5 space-y-3">
                    {role.points.map((p) => (
                      <li key={p} className="relative pl-5 text-[15.5px] leading-relaxed">
                        <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-ink" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <div className="grid gap-4 py-8 md:grid-cols-[1fr_2.2fr] md:gap-12">
              <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-muted">Internships</p>
              <ul className="space-y-3">
                {internships.map((i) => (
                  <li key={i.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[15px]">
                    <span>
                      <span className="font-medium text-ink">{i.title}</span>
                      <span className="text-muted"> · {i.organization}</span>
                    </span>
                    <span className="font-mono text-[13px] text-muted">{i.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Projects ─────────────────────────── */

function ProjectArt({ name }: { name: string }) {
  if (name === "PhishFinder") {
    return (
      <div className="w-full max-w-[300px] rounded-lg border border-line bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 rounded-md bg-bg px-3 py-2 font-mono text-[11px] text-muted ring-1 ring-line">
          <span className="h-2 w-2 rounded-full bg-red-500" /> secure-login-verify.example
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">Phishing risk</span>
          <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-600 ring-1 ring-red-200">Blocked</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-bg ring-1 ring-line">
          <span className="block h-full w-[82%] rounded-full bg-red-500" />
        </div>
        <p className="mt-3 font-mono text-[10.5px] text-muted">model: random_forest · input: url features</p>
      </div>
    )
  }
  return (
    <div className="w-full max-w-[300px] rounded-lg border border-line bg-white p-4 shadow-sm">
      <p className="text-[13px] font-semibold text-ink">Case overview</p>
      <div className="mt-3 space-y-2">
        {[
          ["Document uploaded", "bg-emerald-500"],
          ["Case under review", "bg-amber-500"],
          ["Fine payment", "bg-line-strong"],
        ].map(([label, dot]) => (
          <div key={label} className="flex items-center gap-2.5 rounded-md bg-bg px-3 py-2 text-[12px] text-body ring-1 ring-line">
            <span className={`h-2 w-2 rounded-full ${dot}`} />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-white py-20 md:py-28">
      <div className={shell}>
        <SectionHead index="03" label="Projects" title="Things I’ve built" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow duration-200 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.3)]">
                <div className="relative grid h-56 place-items-center overflow-hidden border-b border-line bg-bg px-6">
                  <div className="grid-bg absolute inset-0" aria-hidden="true" />
                  <div className="relative w-full transition-transform duration-300 group-hover:-translate-y-1 [&>*]:mx-auto">
                    <ProjectArt name={p.name} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-[1.35rem] font-semibold">{p.name}</h3>
                  <p className="text-[14px] text-muted">{p.subtitle}</p>
                  <p className="mt-4 text-[15.5px] leading-relaxed">{p.summary}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">
                    <span className="font-medium">Outcome:</span> {p.impact}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {p.technologies.map((t) => (
                      <li key={t} className="rounded-md bg-bg px-2.5 py-1 font-mono text-[12px] text-body ring-1 ring-line">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Skills ─────────────────────────── */

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className={shell}>
        <SectionHead index="04" label="Skills" title="Tools, skills & credentials" />
        <Reveal className="grid overflow-hidden rounded-xl border border-line bg-white md:grid-cols-3">
          {skills.map((g, i) => (
            <div key={g.label} className={`p-7 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
              <h3 className="font-mono text-[12px] font-normal uppercase tracking-[0.14em] text-muted">{g.label}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((s) => (
                  <li key={s} className="text-[15.5px] font-medium tracking-tight text-ink">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.6fr_1fr]">
          <Reveal className="rounded-xl border border-line bg-white p-7">
            <h3 className="font-mono text-[12px] font-normal uppercase tracking-[0.14em] text-muted">Certifications</h3>
            <ul className="mt-4">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-b border-line py-3 last:border-b-0 last:pb-0">
                  <span className="text-[15px] text-ink">{c.name}</span>
                  <span className="font-mono text-[12px] text-muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex flex-col rounded-xl border border-line bg-white p-7">
            <h3 className="font-mono text-[12px] font-normal uppercase tracking-[0.14em] text-muted">Education</h3>
            <p className="mt-4 text-[1.15rem] font-semibold leading-snug tracking-tight text-ink">{education.degree}</p>
            <p className="mt-2 text-[15px]">{education.school}</p>
            <div className="mt-auto flex items-center justify-between pt-6 text-[14px]">
              <span className="font-mono text-muted">{education.period}</span>
              <span className="rounded-md bg-bg px-2.5 py-1 font-medium text-ink ring-1 ring-line">{education.note}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Contact ─────────────────────────── */

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-10 sm:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-ink px-7 py-16 text-white md:px-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 80% at 85% 20%, #000, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 85% 20%, #000, transparent 70%)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/50">05 / Contact</p>
            <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.05] !text-white">
              Hiring for an AI or data role? Let’s talk.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] text-white/65">
              I’m available for AI data analyst and data analyst roles. Email is the quickest way to reach me.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-between gap-3 rounded-md bg-white px-5 py-3.5 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              <span className="inline-flex items-center gap-2.5">
                <Mail size={17} /> {site.email}
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-between gap-3 rounded-md border border-white/20 px-5 py-3.5 text-[15px] text-white transition-colors hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2.5">
                <Phone size={16} /> {site.phoneDisplay}
              </span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 rounded-md border border-white/20 px-5 py-3.5 text-[15px] text-white transition-colors hover:bg-white/10"
            >
              LinkedIn <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 py-8 text-[13px] text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono">nikilrvi.com</p>
      </footer>
    </section>
  )
}
