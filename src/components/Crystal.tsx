import { useId, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

export function Crystal({
  className = "",
  size = 96,
}: {
  className?: string
  size?: number
}) {
  const raw = useId().replace(/:/g, "")

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 96"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${raw}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="42%" stopColor="#f6e7df" stopOpacity="0.62" />
          <stop offset="100%" stopColor="#8c4030" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id={`${raw}-shine`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polygon
        points="40,3 74,30 40,93 6,30"
        fill={`url(#${raw}-body)`}
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1"
      />
      <polygon points="40,3 74,30 40,38" fill={`url(#${raw}-shine)`} />
      <polygon points="6,30 40,38 40,3" fill="rgba(255,255,255,0.42)" />
      <polygon points="6,30 40,38 40,93" fill="rgba(140,64,48,0.14)" />
      <polygon points="40,38 74,30 40,93" fill="rgba(255,255,255,0.22)" />
      <polygon points="28,30 40,10 40,38" fill="rgba(255,255,255,0.55)" />
    </svg>
  )
}

export function PointerCrystal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const rotateX = useSpring(tiltX, { stiffness: 180, damping: 22 })
  const rotateY = useSpring(tiltY, { stiffness: 180, damping: 22 })

  const reset = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={
        reduce
          ? undefined
          : (event) => {
              const box = ref.current?.getBoundingClientRect()
              if (!box) return
              const px = (event.clientX - box.left) / box.width - 0.5
              const py = (event.clientY - box.top) / box.height - 0.5
              tiltY.set(px * 28)
              tiltX.set(py * -22)
            }
      }
      onMouseLeave={reduce ? undefined : reset}
    >
      <motion.div
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 700 }}
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={
          reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
        }
        className="drop-shadow-[0_18px_24px_rgba(140,64,48,0.18)]"
      >
        {children}
      </motion.div>
    </div>
  )
}
