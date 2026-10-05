import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { site, summary } from "../data/resume.ts"
import { Crystal, PointerCrystal } from "./Crystal.tsx"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      <div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.55, ease }}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:gap-10"
        >
          <h1 className="font-serif text-[clamp(3.4rem,11vw,7.4rem)] leading-[0.88] tracking-[-0.03em] text-ink">
            Nikhil
            <br />
            Ravi
          </h1>
          <PointerCrystal>
            <Crystal size={168} className="h-auto w-16 sm:w-28 md:w-40" />
          </PointerCrystal>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.08, ease }}
        >
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink sm:text-xl">{summary.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-sm text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Email
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-sm text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              LinkedIn
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href={site.resumeHref}
              className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-sm text-muted transition-colors duration-200 hover:border-ink hover:text-ink"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
