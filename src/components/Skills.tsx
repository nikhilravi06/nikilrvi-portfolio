import { useEffect, useMemo, useState } from "react"
import { skillGroups } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"

type SkillFile = "skills.ts" | "stack.json" | "run_pipeline.sh"

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

const skillFiles: { id: SkillFile; label: string }[] = [
  { id: "skills.ts", label: "skills.ts" },
  { id: "stack.json", label: "stack.json" },
  { id: "run_pipeline.sh", label: "run_pipeline.sh" },
]

function SkillsTypeScript() {
  const lineCount = 3 + skillGroups.length + 3

  return (
    <div className="skills-editor-scroll">
      <div className="ide-code-wrap">
        <div className="ide-ln" aria-hidden="true">
          {Array.from({ length: lineCount }, (_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
        <pre className="code-block ide-code skills-code-pane">
          <code>
            <span className="tok-muted">{"// typed stack — edit-friendly\n"}</span>
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
            <span className="skills-cursor" aria-hidden="true" />
          </code>
        </pre>
      </div>
    </div>
  )
}

function SkillsJson() {
  const stack = skillGroups.reduce<Record<string, string[]>>((acc, group) => {
    acc[group.label] = group.items
    return acc
  }, {})

  return (
    <div className="skills-editor-scroll">
      <pre className="code-block ide-code skills-code-pane skills-code-pane--solo">
        <code>
          <span className="tok-punct">{"{\n"}</span>
          <span className="tok-punct">{'  "'}</span>
          <span className="tok-key">name</span>
          <span className="tok-punct">{'": "'}</span>
          <span className="tok-string">nikilrvi-stack</span>
          <span className="tok-punct">{'",\n  "'}</span>
          <span className="tok-key">categories</span>
          <span className="tok-punct">: {"{\n"}</span>
          {Object.entries(stack).map(([label, items], groupIndex, groups) => (
            <span key={label}>
              <span className="tok-punct">{'    "'}</span>
              <span className="tok-key">{label}</span>
              <span className="tok-punct">{'": ['}</span>
              {items.map((item, index) => (
                <span key={item}>
                  <span className="tok-string">&quot;{item}&quot;</span>
                  {index < items.length - 1 ? <span className="tok-punct">, </span> : null}
                </span>
              ))}
              <span className="tok-punct">{"]"}</span>
              {groupIndex < groups.length - 1 ? <span className="tok-punct">,</span> : null}
              <span className="tok-punct">{"\n"}</span>
            </span>
          ))}
          <span className="tok-punct">{"  }\n}"}</span>
        </code>
      </pre>
    </div>
  )
}

function SkillsShell() {
  const allSkills = skillGroups.flatMap((g) => g.items)
  return (
    <div className="skills-editor-scroll">
      <pre className="code-block ide-code skills-code-pane skills-code-pane--solo">
        <code>
          <span className="tok-muted">#!/bin/bash{"\n"}</span>
          <span className="tok-muted"># verify toolchain{"\n\n"}</span>
          <span className="tok-keyword">echo </span>
          <span className="tok-string">&quot;Running skill-check…&quot;</span>
          <span className="tok-punct">{"\n"}</span>
          {allSkills.map((skill) => (
            <span key={skill}>
              <span className="tok-keyword">command </span>
              <span className="tok-punct">-v </span>
              <span className="tok-name">{skill.toLowerCase().replace(/\s+/g, "_")}</span>
              <span className="tok-punct">{" && "}</span>
              <span className="tok-keyword">echo </span>
              <span className="tok-string">&quot;✓ {skill}&quot;</span>
              <span className="tok-punct">{"\n"}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

function SkillsTerminal({ animate }: { animate: boolean }) {
  const lines = useMemo(
    () => [
      { kind: "cmd" as const, text: "nikilrvi@portfolio:~/skills$ npm run skill-check" },
      ...skillGroups.map((group) => ({
        kind: "ok" as const,
        label: group.label,
        values: group.items.join(" · "),
      })),
      { kind: "done" as const, text: "All categories passed · ready to ship" },
    ],
    [],
  )

  const [visible, setVisible] = useState(animate ? 0 : lines.length)

  useEffect(() => {
    if (!animate) {
      setVisible(lines.length)
      return
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      setVisible(lines.length)
      return
    }

    setVisible(0)
    let count = 0
    const timer = window.setInterval(() => {
      count += 1
      setVisible(count)
      if (count >= lines.length) window.clearInterval(timer)
    }, 220)

    return () => window.clearInterval(timer)
  }, [animate, lines.length])

  return (
    <div className="skills-terminal-panel" aria-hidden="true">
      <div className="skills-panel-tabs">
        <span className="skills-panel-tab skills-panel-tab--active">TERMINAL</span>
        <span className="skills-panel-tab">OUTPUT</span>
      </div>
      <div className="ide-terminal skills-terminal-body">
        {lines.slice(0, visible).map((line, index) => {
          if (line.kind === "cmd") {
            return (
              <p key={index} className="ide-terminal-line">
                <span className="tok-prompt">nikilrvi@portfolio</span>
                <span className="tok-punct">:</span>
                <span className="tok-path">~/skills</span>
                <span className="tok-punct">$ </span>
                <span className="tok-cmd">npm run skill-check</span>
              </p>
            )
          }
          if (line.kind === "done") {
            return (
              <p key={index} className="ide-terminal-line">
                <span className="tok-success">●</span>
                <span className="tok-terminal-values">{line.text}</span>
              </p>
            )
          }
          return (
            <p key={index} className="ide-terminal-line">
              <span className="tok-success">✓</span>
              <span className="tok-terminal-label">{line.label}</span>
              <span className="tok-muted"> → </span>
              <span className="tok-terminal-values">{line.values}</span>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export function Skills() {
  const [activeFile, setActiveFile] = useState<SkillFile>("skills.ts")

  return (
    <section id="skills" aria-labelledby="skills-heading" className="skills-stage">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="skills-stage-header">
            <h2 id="skills-heading" className="skills-stage-title">Skills</h2>
            <p className="skills-stage-lead">
              Open the files — same stack as the resume, shown as code you can actually read.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="skills-workspace">
            <div className="skills-window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span className="skills-window-title">nikilrvi — skills workspace</span>
            </div>

            <div className="skills-workspace-body">
              <aside className="skills-sidebar" aria-label="Skill files">
                <p className="skills-sidebar-label">EXPLORER</p>
                <ul>
                  {skillFiles.map((file) => (
                    <li key={file.id}>
                      <button
                        type="button"
                        className={`skills-file-btn ${
                          activeFile === file.id ? "skills-file-btn--active" : ""
                        }`}
                        onClick={() => setActiveFile(file.id)}
                        aria-current={activeFile === file.id ? "true" : undefined}
                      >
                        {file.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="skills-main-pane">
                <div className="ide-skills-tabs" role="tablist" aria-label="Open editors">
                  {skillFiles.map((file) => (
                    <button
                      key={file.id}
                      type="button"
                      role="tab"
                      aria-selected={activeFile === file.id}
                      className={`ide-tab ${activeFile === file.id ? "ide-tab--active" : ""}`}
                      onClick={() => setActiveFile(file.id)}
                    >
                      {file.label}
                    </button>
                  ))}
                </div>

                <p className="skills-breadcrumb" aria-hidden="true">
                  src › skills › {activeFile}
                </p>

                {activeFile === "skills.ts" ? <SkillsTypeScript /> : null}
                {activeFile === "stack.json" ? <SkillsJson /> : null}
                {activeFile === "run_pipeline.sh" ? <SkillsShell /> : null}

                <SkillsTerminal animate={true} />

                <div className="ide-status" aria-hidden="true">
                  <span>TypeScript · JSON · Shell</span>
                  <span>Spaces: 2</span>
                  <span>Prettier</span>
                </div>
              </div>
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
