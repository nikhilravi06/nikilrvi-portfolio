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
        <p className="mb-3 text-[0.6875rem] font-semibold tracking-[0.08em] text-muted uppercase">
          {index}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-normal text-body">{intro}</p>
      ) : null}
    </div>
  )
}
