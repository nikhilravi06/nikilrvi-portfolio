import { site } from "../data/resume.ts"

export function Hero() {
  return (
    <section
      id="top"
      className="hero-canvas flex min-h-[min(100svh,920px)] flex-col items-center justify-center px-5 pb-20 pt-24 text-center text-white sm:px-8"
      style={{ backgroundColor: "#0c0a09" }}
    >
      <div className="max-w-3xl">
        <h1 className="text-[clamp(2.6rem,8vw,5.25rem)] leading-[1.02] font-bold tracking-[-0.03em] text-white">
          {site.name}
        </h1>
        <div className="mt-10">
          <a href={site.resumeHref} className="sq-btn sq-btn--light">Resume</a>
        </div>
      </div>
    </section>
  )
}
