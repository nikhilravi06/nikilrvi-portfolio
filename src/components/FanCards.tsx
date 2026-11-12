import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, type ReactNode } from "react"

/* Each card is a small illustration of real work from the resume.
   They are drawings, not data: no numbers or metrics are shown. */

type Card = { label: string; bg: string; art: ReactNode }

const ConfusionMatrix = () => {
  const shades = [
    [0.95, 0.15, 0.08],
    [0.12, 0.85, 0.2],
    [0.06, 0.22, 0.9],
  ]
  return (
    <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-white/10 p-2.5">
      {shades.flat().map((o, i) => (
        <span key={i} className="aspect-square rounded-[5px]" style={{ background: `rgba(140,230,210,${o})` }} />
      ))}
    </div>
  )
}

const TokenBars = () => (
  <div className="flex h-[96px] w-full flex-col justify-end gap-2 rounded-xl bg-white p-3 shadow-sm">
    <div className="flex h-[56px] items-end justify-center gap-5">
      {[
        ["A", "62%", "#c7cdd6"],
        ["B", "34%", "#1a8cff"],
      ].map(([k, h, c]) => (
        <div key={k} className="flex h-full flex-col items-center justify-end gap-1">
          <span className="w-7 rounded-t-md" style={{ height: h, background: c }} />
          <span className="font-mono text-[9px] text-neutral-500">{k}</span>
        </div>
      ))}
    </div>
    <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-400">tokens / call</span>
  </div>
)

const Redacted = () => (
  <div className="flex w-full flex-col gap-1.5 rounded-xl bg-white p-3 font-mono text-[9px] leading-tight text-neutral-700 shadow-sm">
    {[
      ["name", "w-14"],
      ["dob", "w-10"],
      ["phone", "w-16"],
      ["mrn", "w-12"],
    ].map(([k, w]) => (
      <div key={k} className="flex items-center gap-1.5">
        <span className="text-neutral-400">{k}:</span>
        <span className={`h-2 rounded-sm bg-neutral-900 ${w}`} />
      </div>
    ))}
    <span className="mt-1 self-start rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
      PII · PHI masked
    </span>
  </div>
)

const TrendLine = () => (
  <svg viewBox="0 0 120 80" className="w-full drop-shadow-sm">
    <rect width="120" height="80" rx="12" fill="white" />
    {[20, 38, 56].map((y) => (
      <line key={y} x1="12" x2="108" y1={y} y2={y} stroke="#eee" />
    ))}
    <path d="M12 62 L30 58 L46 60 L62 46 L78 40 L94 28 L108 18" fill="none" stroke="#ff5a5f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 62 L30 58 L46 60 L62 46 L78 40 L94 28 L108 18 L108 70 L12 70Z" fill="#ff5a5f" opacity=".12" />
  </svg>
)

const JsonSnippet = () => (
  <pre className="w-full overflow-hidden rounded-xl bg-[#0f1720] p-3 font-mono text-[8.5px] leading-[1.5] text-[#cfe3ff]">
    {`{
  "step": "intent",
  "prompt": "…",
  "next": "verify",
  "on_fail": "retry"
}`}
  </pre>
)

const Waveform = () => (
  <div className="flex h-[80px] w-full items-center justify-center gap-[3px] rounded-xl bg-white/15 px-2">
    {[6, 14, 22, 30, 18, 34, 26, 12, 20, 32, 16, 8, 24, 14, 6].map((h, i) => (
      <span key={i} className="w-[4px] rounded-full bg-white" style={{ height: h }} />
    ))}
  </div>
)

const UrlCheck = () => (
  <div className="flex w-full flex-col gap-2 rounded-xl bg-white p-3 shadow-sm">
    <div className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-1 font-mono text-[8px] text-neutral-500">
      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
      paypa1-login.example
    </div>
    <div className="flex items-center gap-2">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-red-500 text-[11px] font-bold text-white">!</span>
      <span className="text-[10px] font-semibold text-neutral-800">Phishing risk</span>
    </div>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
      <span className="block h-full w-4/5 rounded-full bg-red-500" />
    </div>
  </div>
)

const cards: Card[] = [
  { label: "Model evaluation", bg: "linear-gradient(160deg,#20403f,#0f2526)", art: <ConfusionMatrix /> },
  { label: "Token-cost analysis", bg: "linear-gradient(160deg,#dfe6ec,#b9c6d3)", art: <TokenBars /> },
  { label: "PII / PHI masking", bg: "linear-gradient(160deg,#a9b8b1,#8da096)", art: <Redacted /> },
  { label: "Prompt workflows", bg: "linear-gradient(160deg,#1c2b4a,#0c1426)", art: <JsonSnippet /> },
  { label: "Text-to-speech testing", bg: "linear-gradient(160deg,#7b61ff,#3a2bb8)", art: <Waveform /> },
  { label: "Revenue trends", bg: "linear-gradient(160deg,#f4f4f4,#dcdcdc)", art: <TrendLine /> },
  { label: "PhishFinder", bg: "linear-gradient(150deg,#ff6b6b,#c44dff 60%,#5b6cff)", art: <UrlCheck /> },
]

export function FanCards() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(62)
  useEffect(() => {
    const update = () => setStep(window.innerWidth < 640 ? Math.min(32, (window.innerWidth - 130) / 6) : 70)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])
  const n = cards.length
  const mid = (n - 1) / 2

  return (
    <div className="relative mx-auto flex h-[150px] w-full max-w-[560px] items-end justify-center sm:h-[190px]">
      {cards.map((card, i) => {
        const offset = i - mid
        const rotate = offset * 5
        const x = offset * step
        const y = Math.abs(offset) * Math.abs(offset) * 3
        return (
          <motion.figure
            key={card.label}
            className="group absolute bottom-0 m-0 origin-bottom"
            style={{ zIndex: i + 1 }}
            initial={reduce ? false : { x: 0, y: 40, rotate: 0, opacity: 0 }}
            animate={{ x, y, rotate, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 16, delay: reduce ? 0 : 0.25 + i * 0.06 }}
            whileHover={reduce ? undefined : { y: y - 22, rotate: rotate * 0.4, zIndex: 20, transition: { duration: 0.2 } }}
          >
            <div
              className="grid h-[104px] w-[104px] place-items-center rounded-[20px] p-3 shadow-[0_14px_28px_-10px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:h-[136px] sm:w-[136px] sm:rounded-[24px] sm:p-4"
              style={{ background: card.bg }}
            >
              <div className="w-full origin-center scale-[0.72] sm:scale-100">{card.art}</div>
            </div>
            <figcaption className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {card.label}
            </figcaption>
          </motion.figure>
        )
      })}
    </div>
  )
}
