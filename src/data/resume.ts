// All content on the site comes from this file and mirrors the resume.
// Do not add roles, metrics, or links that are not on the resume.

export const site = {
  name: "Nikhil Ravi",
  role: "AI Data Analyst",
  email: "nikhilravi546@gmail.com",
  phoneDisplay: "+91 9496245812",
  phoneHref: "tel:+919496245812",
  linkedin: "https://www.linkedin.com/in/nikhil-ravi-6125b4227",
  location: "Angamaly, Kerala",
  resumeHref: "/Nikhil-Ravi-Resume.pdf",
  tagline:
    "Turning AI and business data into insights that improve model quality and reduce cost.",
  summary:
    "AI Data Analyst with 2+ years of experience at VoiceStack and Amazon, analyzing AI model performance, building data privacy pipelines, and curating multimodal training data. Skilled in Python, SQL, and prompt engineering, with hands-on work in model evaluation (confusion matrices, token-cost analysis) and revenue trend analysis.",
  languages: ["English", "Malayalam", "Hindi", "Tamil"],
} as const

export const nav = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
] as const

export type Role = {
  title: string
  organization: string
  location?: string
  period: string
  kind?: "Internship"
  points: string[]
}

export const experience: Role[] = [
  {
    title: "AI Data Analyst",
    organization: "VoiceStack, Good Methods Global",
    location: "Trivandrum",
    period: "Nov 2025 – Nov 2026",
    points: [
      "Compared two AI models on output accuracy (confusion matrices) and token consumption, and recommended the model that best balanced performance and cost.",
      "Analyzed clients’ monthly revenue trends to measure revenue growth attributable to product adoption.",
      "Built Python scripts to process raw data and mask PII and PHI before use in AI workflows.",
      "Converted masked text into audio with gTTS and Python, enabling automated voice-based testing.",
      "Designed and refined AI prompts and workflow logic to improve response quality.",
      "Transformed structured datasets into JSON-based automation pipelines for AI-driven workflows.",
      "Built and validated AI process flows so prompts executed in the correct sequence with accurate outcomes.",
      "Monitored AI model outputs daily to catch failures and recurring break patterns, and proposed targeted fixes.",
      "Identified recurring errors, blockers, and edge cases through data analysis to improve model reliability.",
      "Queried and extracted data with MySQL and Python for model performance analysis and validation.",
      "Worked closely with AI engineers, sharing data-driven recommendations for model optimization.",
      "Ran review meetings to surface model issues, share findings, and propose enhancements.",
    ],
  },
  {
    title: "ML Data Associate",
    organization: "Amazon Development Center",
    location: "Chennai",
    period: "Sep 2024 – Oct 2025",
    points: [
      "Annotated and refined multimodal training data (text, image, audio, and video) to improve NLP and conversational AI models.",
      "Ensured semantic and contextual accuracy for stronger intent detection and language understanding.",
      "Supported AI data pipelines and workflows built on JSON-structured datasets.",
    ],
  },
  {
    title: "Front-End Web Developer Intern",
    organization: "Camino Infotech Solutions",
    location: "Kalamassery",
    period: "May 2023",
    kind: "Internship",
    points: ["Developed responsive interfaces with HTML, CSS, and JavaScript from UI/UX wireframes."],
  },
  {
    title: "iOS App Developer Intern",
    organization: "Consolidated Techware Pvt. Ltd.",
    period: "Apr 2022",
    kind: "Internship",
    points: [
      "Designed and built native iOS applications using Swift and Xcode.",
      "Tested and debugged apps for stability and performance.",
    ],
  },
]

export type Project = {
  name: string
  subtitle: string
  summary: string
  impact: string
  technologies: string[]
  mark: string
}

export const projects: Project[] = [
  {
    name: "PhishFinder",
    subtitle: "Real-time phishing detection plugin",
    summary:
      "Browser plugin that detects phishing websites by analyzing URLs with a Random Forest classifier.",
    impact: "Reduced false positives and improved real-time threat detection accuracy.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    mark: "/projects/phishfinder-mark.svg",
  },
  {
    name: "TOMS",
    subtitle: "Traffic Offence Management System",
    summary:
      "Web platform for traffic violation tracking and reporting. Users can upload documents, track cases, and pay fines.",
    impact: "Streamlined case handling, enabled digital record-keeping, and reduced paperwork.",
    technologies: ["PHP", "MySQL", "HTML", "JavaScript", "CSS", "XAMPP Server"],
    mark: "/projects/toms-mark.svg",
  },
]

export type SkillGroup = { label: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & Data",
    items: ["Data Analysis", "Prompt Engineering", "Data Annotation", "AI / Machine Learning"],
  },
  { label: "Languages", items: ["Python", "C", "JavaScript", "PHP"] },
  { label: "Tools", items: ["GitHub", "MySQL", "JSON"] },
  { label: "Web", items: ["HTML", "CSS", "Responsive Design"] },
  { label: "Concepts", items: ["OOP", "Data Structures"] },
]

export const softSkills = [
  "Teamwork",
  "Communication",
  "Problem-solving",
  "Creative thinking",
  "Multi-tasking",
]

export const certifications = [
  { name: "Data Analysis with Python", issuer: "IBM" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Coursera" },
  { name: "Build Real World AI Applications with Gemini and Imagen", issuer: "Google" },
  { name: "Prompt Design in Vertex AI", issuer: "Google" },
  { name: "One Million Prompters", issuer: "Dubai Future Foundation" },
  { name: "Foundations of Prompt Engineering", issuer: "AWS" },
  { name: "Essentials of Prompt Engineering", issuer: "AWS" },
  { name: "Workshop on Ethical Hacking", issuer: "NIT Calicut" },
]

export const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    school: "Federal Institute of Science and Technology, Kerala",
    period: "2020 – 2024",
    note: "First Class",
  },
  {
    title: "Higher Secondary (DHSE)",
    school: "St. Joseph’s HSS, Karukutty",
    period: "2018 – 2020",
    note: "91%",
  },
  {
    title: "Secondary School Certificate (CBSE)",
    school: "Sacred Heart Public School, Mookkannur",
    period: "2017 – 2018",
    note: "85%",
  },
]
