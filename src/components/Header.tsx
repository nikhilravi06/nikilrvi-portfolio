import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { nav, site } from "../data/resume.ts"

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const [overHero, setOverHero] = useState(true)

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const hero = document.getElementById("top")
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) setOverHero(entry.isIntersecting)
      },
      { threshold: 0.12 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const main = document.getElementById("main")
    const footer = document.querySelector("footer")
    document.body.style.overflow = open ? "hidden" : ""
    if (open) {
      main?.setAttribute("inert", "")
      footer?.setAttribute("inert", "")
    } else {
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
    }
    return () => {
      document.body.style.overflow = ""
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const close = () => setOpen(false)
  const onLight = overHero && !open
  const contactClass = `sq-btn !min-h-9 !px-4 !text-[0.65rem] ${
    onLight ? "sq-btn--light" : "sq-btn--dark"
  }`

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        onLight ? "bg-transparent text-white" : "border-b border-line bg-paper text-ink shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="text-[0.95rem] font-semibold tracking-[0.06em] lowercase"
          onClick={close}
        >
          nikilrvi
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`text-[0.8rem] font-medium tracking-wide transition-opacity duration-200 ${
                active === item.id ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className={contactClass}>Contact</a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a href={`mailto:${site.email}`} className={contactClass} onClick={close}>
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-paper px-5 py-8 text-ink md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  className="block py-3 text-2xl font-semibold tracking-tight"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
