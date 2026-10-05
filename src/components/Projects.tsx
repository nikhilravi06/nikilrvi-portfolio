import { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { projects } from "../data/resume.ts"
import { Crystal } from "./Crystal.tsx"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="03" id="projects-heading" title="Projects" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <ProjectCard
                index={index}
                name={project.name}
                subtitle={project.subtitle}
                summary={project.summary}
                impact={project.impact}
                technologies={project.technologies}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  index,
  name,
  subtitle,
  summary,
  impact,
  technologies,
}: {
  index: number
  name: string
  subtitle: string
  summary: string
  impact: string
  technologies: readonly string[]
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [spot, setSpot] = useState({ x: 30, y: 20 })

  return (
    <motion.article
      ref={ref}
      onMouseMove={
        reduce
          ? undefined
          : (event) => {
              const box = ref.current?.getBoundingClientRect()
              if (!box) return
              setSpot({
                x: ((event.clientX - box.left) / box.width) * 100,
                y: ((event.clientY - box.top) / box.height) * 100,
              })
            }
      }
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
      className="glass-panel group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
      style={{
        backgroundImage: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.72), transparent 42%)`,
      }}
    >
      <div className="flex items-start justify-between">
        <p className="font-serif text-lg text-accent">{String(index + 1).padStart(2, "0")}</p>
        <Crystal
          size={52}
          className="opacity-80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 motion-reduce:transition-none"
        />
      </div>
      <h3 className="mt-8 font-serif text-[2rem] leading-none tracking-tight text-ink">{name}</h3>
      <p className="mt-3 text-sm text-muted">{subtitle}</p>
      <p className="mt-5 text-sm leading-relaxed text-ink">{summary}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink">{impact}</p>
      <p className="mt-auto pt-8 text-[0.78rem] tracking-wide text-muted">
        {technologies.join("  ·  ")}
      </p>
    </motion.article>
  )
}
