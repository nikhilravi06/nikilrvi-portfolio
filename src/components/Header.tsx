import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { nav, site } from "../data/resume.ts"

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

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

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-canvas/95 text-ink backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-ink lowercase"
          onClick={close}
        >
          nikilrvi
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`text-sm font-medium transition-colors ${
                active === item.id ? "text-ink" : "text-body hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="btn-primary !min-h-10 !h-10 !px-[18px]">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`mailto:${site.email}`}
            className="btn-primary !min-h-10 !h-10 !px-[18px]"
            onClick={close}
          >
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-ink"
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
          className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-canvas px-5 py-8 text-ink md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  className="block py-3 text-2xl font-semibold tracking-[-0.02em] text-ink"
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
