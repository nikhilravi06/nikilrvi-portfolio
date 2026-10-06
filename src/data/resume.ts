export const site = {
  name: "Nikhil Ravi",
  email: "nikhilravi546@gmail.com",
  phoneDisplay: "+91 9496245812",
  phoneHref: "tel:+919496245812",
  linkedin: "https://www.linkedin.com/in/nikhil-ravi",
  linkedinLabel: "LinkedIn",
  location: "Angamaly, Kerala",
  resumeHref: "/Nikhil-Ravi-Resume.pdf",
} as const

export const nav = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
] as const

export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C", "JavaScript", "PHP"],
  },
  {
    label: "Web",
    items: ["HTML", "CSS", "Responsive design"],
  },
  {
    label: "Tools & data",
    items: ["GitHub", "MySQL", "JSON"],
  },
  {
    label: "AI & ML",
    items: [
      "Data analysis",
      "Prompt engineering",
      "Data annotation",
      "Machine learning",
    ],
  },
  {
    label: "Concepts",
    items: ["OOP", "Data structures"],
  },
]

export type Role = {
  title: string
  organization: string
  location?: string
  period: string
  kind?: "Internship"
}

export const experience: Role[] = [
  {
    title: "AI Data Analyst",
    organization: "VoiceStack, Good Methods Global",
    location: "Trivandrum",
    period: "Nov 2025 – Present",
  },
  {
    title: "ML Data Associate",
    organization: "Amazon Development Center",
    location: "Chennai",
    period: "Sep 2024 – Oct 2025",
  },
  {
    title: "Front-End Web Developer Intern",
    organization: "Camino Infotech Solutions",
    location: "Kalamassery",
    period: "May 2023",
    kind: "Internship",
  },
  {
    title: "iOS App Developer Intern",
    organization: "Consolidated Techware Pvt. Ltd.",
    period: "Apr 2022",
    kind: "Internship",
  },
]

export type Project = {
  name: string
  subtitle: string
  summary: string
  impact: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    name: "PhishFinder",
    subtitle: "Real-Time Phishing Detection Plugin",
    summary:
      "Browser plugin that detects phishing websites by analyzing URLs with a Random Forest classifier.",
    impact: "Reduced false positives and improved real-time threat detection accuracy.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "TOMS",
    subtitle: "Traffic Offence Management System",
    summary:
      "Web platform for traffic violation tracking and reporting. Users can upload documents, track cases, and pay fines.",
    impact:
      "Streamlined case handling, enabled digital record-keeping, and reduced paperwork.",
    technologies: ["PHP", "MySQL", "HTML", "JavaScript", "CSS", "XAMPP Server"],
  },
]
