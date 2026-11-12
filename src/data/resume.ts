// All content on the site comes from this file and mirrors the resume.
// Do not add roles, metrics, or links that are not on the resume.

export const site = {
  name: "Nikhil Ravi",
  role: "AI Data Analyst",
  email: "nikhilravi546@gmail.com",
  phoneDisplay: "+91 94962 45812",
  phoneHref: "tel:+919496245812",
  linkedin: "https://www.linkedin.com/in/nikhil-ravi-6125b4227",
  location: "Kerala, India",
  resumeHref: "/Nikhil-Ravi-Resume.pdf",
  photo: "/nikhil.webp",
  headline: "I turn AI model output and business data into decisions.",
  intro:
    "AI Data Analyst with 2+ years at VoiceStack and Amazon. I evaluate AI models, build data privacy pipelines, and curate training data, using Python, SQL, and prompt engineering to improve model quality and reduce cost.",
} as const

export const nav = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
] as const

/* What I do: grouped from the resume bullets */
export const focus = [
  {
    title: "Model evaluation",
    body: "Compared AI models on output accuracy with confusion matrices and on token consumption, then recommended the best balance of performance and cost.",
    tags: ["Confusion matrices", "Token cost", "Python"],
  },
  {
    title: "Data privacy pipelines",
    body: "Built Python scripts that mask PII and PHI in raw data before it reaches AI workflows, keeping data use compliant.",
    tags: ["PII / PHI masking", "Python", "Compliance"],
  },
  {
    title: "Prompt & workflow design",
    body: "Designed prompts and workflow logic, built JSON-based automation pipelines, and validated that AI process flows ran in the right sequence.",
    tags: ["Prompt engineering", "JSON pipelines"],
  },
  {
    title: "Model monitoring",
    body: "Monitored model outputs daily, traced recurring failures and edge cases, and brought data-backed fixes to AI engineers.",
    tags: ["MySQL", "Error analysis"],
  },
]

export type Role = {
  title: string
  organization: string
  location: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: "AI Data Analyst",
    organization: "VoiceStack · Good Methods Global",
    location: "Trivandrum",
    period: "Nov 2025 — Nov 2026",
    points: [
      "Compared two AI models on accuracy (confusion matrices) and token consumption, and recommended the model that best balanced performance and cost.",
      "Analyzed clients’ monthly revenue trends to measure growth attributable to product adoption.",
      "Built Python scripts to mask PII and PHI in raw data, and converted masked text to audio with gTTS for automated voice testing.",
      "Designed prompts, workflow logic, and JSON-based automation pipelines, and validated AI process flows end to end.",
      "Monitored model outputs daily with MySQL and Python, found recurring failures and edge cases, and shared fixes with AI engineers.",
    ],
  },
  {
    title: "ML Data Associate",
    organization: "Amazon Development Center",
    location: "Chennai",
    period: "Sep 2024 — Oct 2025",
    points: [
      "Annotated and refined multimodal training data (text, image, audio, video) to improve NLP and conversational AI models.",
      "Ensured semantic and contextual accuracy for stronger intent detection and language understanding.",
      "Supported AI data pipelines built on JSON-structured datasets.",
    ],
  },
]

export const internships = [
  {
    title: "Front-End Web Developer Intern",
    organization: "Camino Infotech Solutions",
    period: "May 2023",
  },
  {
    title: "iOS App Developer Intern",
    organization: "Consolidated Techware",
    period: "Apr 2022",
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
    subtitle: "Real-time phishing detection plugin",
    summary:
      "A browser plugin that flags phishing websites by analyzing URLs with a Random Forest classifier.",
    impact: "Reduced false positives and improved real-time detection accuracy.",
    technologies: ["Python", "Machine learning", "JavaScript"],
  },
  {
    name: "TOMS",
    subtitle: "Traffic Offence Management System",
    summary:
      "A web platform to track and report traffic violations, where users upload documents, follow cases, and pay fines.",
    impact: "Streamlined case handling and replaced paperwork with digital records.",
    technologies: ["PHP", "MySQL", "JavaScript"],
  },
]

export const skills = [
  { label: "Analysis & AI", items: ["Data analysis", "Model evaluation", "Prompt engineering", "Data annotation", "Machine learning"] },
  { label: "Languages", items: ["Python", "SQL (MySQL)", "JavaScript", "PHP", "C"] },
  { label: "Data & tools", items: ["JSON pipelines", "gTTS", "GitHub", "HTML / CSS"] },
]

export const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera" },
  { name: "Data Analysis with Python", issuer: "IBM" },
  { name: "Build Real World AI Applications with Gemini and Imagen", issuer: "Google" },
  { name: "Prompt Design in Vertex AI", issuer: "Google" },
  { name: "Foundations of Prompt Engineering", issuer: "AWS" },
  { name: "Essentials of Prompt Engineering", issuer: "AWS" },
]

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "Federal Institute of Science and Technology, Kerala",
  period: "2020 — 2024",
  note: "First Class",
}
