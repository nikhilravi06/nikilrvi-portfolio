import { motion, useReducedMotion } from "framer-motion"
import { site } from "../data/resume.ts"
import { FanCards } from "./FanCards.tsx"
import { Monogram } from "./Monogram.tsx"

export function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
        }

  return (
    <section id="top" className="grain relative overflow-hidden">
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pb-28 pt-28 text-center sm:pb-32">
        <motion.p
          {...rise(0.05)}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[13px] text-body"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to AI &amp; data roles
        </motion.p>

        <h1 className="text-ink">
          <motion.span {...rise(0.1)} className="wide block text-[clamp(1.7rem,5.2vw,3.1rem)] font-extrabold uppercase leading-none tracking-[0.06em]">
            AI &amp; Data
          </motion.span>
          <motion.span {...rise(0.18)} className="pixel mt-1 block text-[clamp(2.6rem,9vw,5rem)] uppercase leading-[0.95] tracking-[0.04em]">
            Analyst
          </motion.span>
        </h1>

        <motion.p {...rise(0.26)} className="mt-5 max-w-md text-[clamp(1rem,1.6vw,1.1rem)] text-body">
          {site.tagline}
        </motion.p>

        <div className="mt-12 w-full sm:mt-14">
          <FanCards />
        </div>
      </div>

      {/* "Hi, this is me!" sticker */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.9 }}
        className="absolute bottom-4 left-4 z-10 flex items-end sm:bottom-5 sm:left-10"
      >
        <div className="rounded-[22px] bg-white p-1.5 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.45)]">
          <Monogram className="h-14 w-14 text-[18px] sm:h-[72px] sm:w-[72px] sm:text-[22px]" />
        </div>
        <div className="relative ml-6 hidden -translate-y-16 sm:block">
          <p className="font-hand text-[19px] leading-[1.05] text-ink" style={{ transform: "rotate(10deg)" }}>
            Hi, this
            <br />
            is me!
          </p>
          <svg
            viewBox="0 0 60 50"
            className="absolute -bottom-11 -left-8 h-12 w-14 text-ink"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M52 4 C 58 26, 40 42, 10 40" />
            <path d="M18 33 L 9 40 L 18 46" />
          </svg>
          <svg viewBox="0 0 30 24" className="absolute -right-7 -top-4 h-5 w-6 text-ink" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M3 20 L8 8" />
            <path d="M13 18 L23 6" />
            <path d="M18 22 L28 18" />
          </svg>
        </div>
      </motion.div>

      <div className="zigzag absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  )
}
