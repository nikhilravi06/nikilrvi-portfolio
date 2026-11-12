import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { nav, site } from "../data/resume.ts"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled || open ? "border-line bg-bg/85" : "border-transparent bg-bg/0"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-ink font-mono text-[11px] font-medium text-black">
            NR
          </span>
          {site.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-1.5 text-[14px] text-body transition-colors hover:bg-white/[0.06] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md px-3 py-1.5 text-[14px] text-body transition-colors hover:bg-white/[0.06] hover:text-ink"
          >
            Contact
          </a>
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener"
            className="ml-2 rounded-md bg-ink px-3.5 py-1.5 text-[14px] font-medium text-black transition-opacity hover:opacity-85"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-md text-ink hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg px-5 pb-4 pt-2 md:hidden">
          {[...nav, { id: "contact", label: "Contact" }].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-[15px] text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener"
            className="mt-4 block rounded-md bg-ink py-2.5 text-center text-[15px] font-medium text-black"
          >
            Download résumé
          </a>
        </div>
      )}
    </header>
  )
}
