export function SectionHeading({
  index,
  title,
  id,
  intro,
}: {
  index: string
  title: string
  id: string
  intro?: string
}) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 text-[0.72rem] font-medium tracking-[0.22em] text-accent uppercase">
        {index}
      </p>
      <h2
        id={id}
        className="font-serif text-[2.4rem] leading-none tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{intro}</p>
      ) : null}
    </div>
  )
}
