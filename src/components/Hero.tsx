import { site } from "../data/resume.ts"

export function Hero() {
  return (
    <section id="top" className="hero-band px-5 pb-16 pt-28 text-center sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mx-auto w-full max-w-3xl">
        <h1
          className="text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink"
        >
          {site.name}
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-normal text-body">
          Selected work in data, models, and software.
        </p>
        <div className="mt-8">
          <a href={site.resumeHref} className="btn-primary">Resume</a>
        </div>
      </div>

      <div className="device-mockup mx-auto mt-14 w-full max-w-6xl sm:mt-16" aria-hidden="true">
        <div className="device-laptop">
          <div className="device-laptop-bar">
            <span />
            <span />
            <span />
          </div>
          <pre className="code-block">
            <span className="tok-muted"># portfolio.json</span>
            {"\n"}
            {"{"}
            {"\n"}
            {"  "}
            <span className="tok-key">"focus"</span>
            {": ["}
            {"\n"}
            {"    "}
            &quot;data analysis&quot;,
            {"\n"}
            {"    "}
            &quot;ML pipelines&quot;,
            {"\n"}
            {"    "}
            &quot;web interfaces&quot;
            {"\n"}
            {"  ]"}
            {"\n"}
            {"}"}
          </pre>
        </div>
        <div className="device-phone">
          <div className="device-phone-screen">
            nikilrvi
            <br />
            <span style={{ color: "#47c2ff" }}>●</span> portfolio
          </div>
        </div>
      </div>
    </section>
  )
}
