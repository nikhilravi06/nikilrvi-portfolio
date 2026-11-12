export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pixel grid place-items-center rounded-full bg-ink leading-none text-white ${className}`}
    >
      NR
    </span>
  )
}
