import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { nav, site } from "../data/resume.ts"
import { Monogram } from "./Monogram.tsx"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className={`relative flex w-full max-w-[34rem] items-center justify-between gap-3 rounded-full border border-black/5 bg-white/90 py-1.5 pl-1.5 pr-1.5 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_-8px_rgba(0,0,0,0.25)]" : "shadow-[0_4px_18px_-6px_rgba(0,0,0,0.18)]"
        }`}
      >
        <a href="#top" aria-label={`${site.name}, back to top`} className="shrink-0">
          <Monogram className="h-9 w-9 text-[13px]" />
        </a>

        <ul className="hidden items-center gap-6 text-[14px] text-body sm:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resumeHref} target="_blank" rel="noopener" className="transition-colors hover:text-ink">
              Resume
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href="#contact"
            className="rounded-full bg-brand px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Work with me
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-ink hover:bg-black/5 sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <ul className="absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-3xl border border-black/5 bg-white p-2 text-[15px] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)] sm:hidden">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-ink hover:bg-black/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeHref}
                target="_blank"
                rel="noopener"
                className="block rounded-2xl px-4 py-2.5 text-ink hover:bg-black/5"
              >
                Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
