import { site } from "../data/resume.ts"

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas text-body">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-16 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-medium text-ink">{site.name}</p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={site.linkedin}
            className="text-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {site.linkedinLabel}
          </a>
          <a href="#top" className="text-body transition-colors hover:text-ink">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
