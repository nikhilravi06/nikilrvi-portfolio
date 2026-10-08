import { useState } from "react"
import { skillGroups } from "../data/resume.ts"
import { Reveal } from "./Reveal.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

type SkillTab = "skills.ts" | "stack.json"

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

function SkillsTypeScriptCode() {
  return (
    <pre className="code-block">
      <span className="tok-muted">// stack definition</span>
      {"\n"}
      <span className="tok-key">export const</span> skills = {"{"}
      {"\n"}
      {skillGroups.map((group) => {
        const key = groupKey(group.label)
        return (
          <span key={group.label}>
            {"  "}
            <span className="tok-key">{key}</span>
            : [
            {group.items.map((item) => `"${item}"`).join(", ")}
            ],
            {"\n"}
          </span>
        )
      })}
      {"}"} as const;
    </pre>
  )
}

function SkillsJsonCode() {
  return (
    <pre className="code-block">
      {"{"}
      {"\n"}
      {"  "}
      <span className="tok-key">"name"</span>
      {": "}
      &quot;nikilrvi-stack&quot;,
      {"\n"}
      {"  "}
      <span className="tok-key">"categories"</span>
      {": {"}
      {"\n"}
      {skillGroups.map((group, index) => (
        <span key={group.label}>
          {"    "}
          <span className="tok-key">&quot;{group.label}&quot;</span>
          {": ["}
          {group.items.map((item) => `"${item}"`).join(", ")}
          ]{index < skillGroups.length - 1 ? "," : ""}
          {"\n"}
        </span>
      ))}
      {"  }"}
      {"\n"}
      {"}"}
    </pre>
  )
}

export function Skills() {
  const [tab, setTab] = useState<SkillTab>("skills.ts")
  const tabs: SkillTab[] = ["skills.ts", "stack.json"]

  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            title="Skills"
            intro="Same stack as my resume — shown as code, grouped by category."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill file views">
            {tabs.map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                className={`category-tab ${tab === id ? "category-tab--active" : ""}`}
                onClick={() => setTab(id)}
              >
                {id}
              </button>
            ))}
          </div>

          <div className="device-mockup mt-8">
            <div className="device-laptop">
              <div className="device-laptop-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              {tab === "skills.ts" ? <SkillsTypeScriptCode /> : <SkillsJsonCode />}
            </div>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <li key={group.label}>
              <Reveal>
                <article className="feature-card p-5">
                  <div className="flex gap-4">
                    <div className="workflow-step-icon" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{group.label}</h3>
                      <p className="mt-1 text-sm leading-normal text-body">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

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
