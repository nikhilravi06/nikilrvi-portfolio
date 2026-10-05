import { site } from "../data/resume.ts"

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{site.name}</p>
        <a href="#top" className="transition-colors duration-200 hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}
