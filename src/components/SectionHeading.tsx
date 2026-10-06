export function SectionHeading({
  index,
  title,
  id,
  intro,
  align = "left",
}: {
  index?: string
  title: string
  id: string
  intro?: string
  align?: "left" | "center"
}) {
  const centered = align === "center"

  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {index ? (
        <p className="mb-3 text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
          {index}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.02em] text-ink"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
      ) : null}
    </div>
  )
}
