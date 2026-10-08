import { skillGroups } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

function groupKey(label: string): string {
  return label
    .split(/\s*&\s*/)
    .flatMap((part) => part.trim().split(/\s+/))
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("")
}

function SkillsSource() {
  const lines: string[] = [
    "// nikilrvi — stack definition",
    "export const skills = {",
    ...skillGroups.map((group) => {
      const key = groupKey(group.label)
      const values = group.items.map((item) => `"${item}"`).join(", ")
      return `  ${key}: [${values}],`
    }),
    "} as const;",
    "",
    "export type SkillCategory = keyof typeof skills;",
  ]

  return (
    <div className="ide-code-wrap">
      <div className="ide-ln" aria-hidden="true">
        {lines.map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
      <pre className="code-block ide-code">
        <code>
          <span className="tok-muted">{"// nikilrvi — stack definition\n"}</span>
          <span className="tok-keyword">export const </span>
          <span className="tok-name">skills</span>
          <span className="tok-punct"> = {"{\n"}</span>
          {skillGroups.map((group) => {
            const key = groupKey(group.label)
            return (
              <span key={group.label}>
                <span className="tok-punct">{"  "}</span>
                <span className="tok-key">{key}</span>
                <span className="tok-punct">: [</span>
                {group.items.map((item, index) => (
                  <span key={item}>
                    <span className="tok-string">&quot;{item}&quot;</span>
                    {index < group.items.length - 1 ? (
                      <span className="tok-punct">, </span>
                    ) : null}
                  </span>
                ))}
                <span className="tok-punct">],{"\n"}</span>
              </span>
            )
          })}
          <span className="tok-punct">{"} as const;\n\n"}</span>
          <span className="tok-keyword">export type </span>
          <span className="tok-name">SkillCategory</span>
          <span className="tok-punct"> = </span>
          <span className="tok-keyword">keyof </span>
          <span className="tok-keyword">typeof </span>
          <span className="tok-name">skills</span>
          <span className="tok-punct">;</span>
        </code>
      </pre>
    </div>
  )
}

function SkillsTerminal() {
  return (
    <div className="ide-terminal" aria-hidden="true">
      <p className="ide-terminal-line">
        <span className="tok-prompt">nikilrvi@portfolio</span>
        <span className="tok-punct">:</span>
        <span className="tok-path">~/skills</span>
        <span className="tok-punct">$ </span>
        <span className="tok-cmd">npx skill-check --all</span>
      </p>
      {skillGroups.map((group) => (
        <p key={group.label} className="ide-terminal-line">
          <span className="tok-success">✓</span>
          <span className="tok-terminal-label">{group.label}</span>
          <span className="tok-muted"> → </span>
          <span className="tok-terminal-values">{group.items.join(" · ")}</span>
        </p>
      ))}
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            title="Skills"
            intro="How the stack is wired — typed, grouped, and ready to ship."
          />
        </Reveal>

        <Reveal>
          <div className="ide-skills">
            <div className="ide-skills-tabs" aria-hidden="true">
              <span className="ide-tab ide-tab--active">skills.ts</span>
              <span className="ide-tab">skill-check</span>
            </div>
            <SkillsSource />
            <SkillsTerminal />
            <div className="ide-status" aria-hidden="true">
              <span>TypeScript</span>
              <span>UTF-8</span>
              <span>Ln {6 + skillGroups.length}, Col 1</span>
            </div>
          </div>
        </Reveal>

        <div className="sr-only">
          <h3>Skill categories</h3>
          <ul>
            {skillGroups.map((group) => (
              <li key={group.label}>
                {group.label}: {group.items.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
