export const site = {
  name: "Nikhil Ravi",
  email: "nikhilravi546@gmail.com",
  phoneDisplay: "+91 9496245812",
  phoneHref: "tel:+919496245812",
  linkedin: "https://www.linkedin.com/in/nikhil-ravi",
  linkedinLabel: "linkedin.com/in/nikhil-ravi",
  location: "Angamaly, Kerala",
  resumeHref: "/Nikhil-Ravi-Resume.pdf",
} as const

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const

export const summary = {
  lead: "Data, models, and the details that decide whether they hold.",
  about:
    "I look at data, find the pattern, and turn it into something a team can use — clearer prompts, tighter workflows, better decisions.",
  languages: ["English", "Malayalam", "Hindi", "Tamil"],
  interests: ["Football", "Cricket", "Fitness & gym"],
} as const

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
    period: "Nov 2025 – Present",
    points: [
      "Queried and extracted data with MySQL and Python to analyze and validate AI model performance.",
      "Identified recurring error patterns, blockers, and edge cases that affected model reliability.",
      "Designed and refined prompts and workflow logic to improve response quality.",
      "Worked with AI engineers on data-driven recommendations for model optimization.",
      "Held meetings and review discussions to share findings, highlight model issues, and propose performance improvements.",
      "Built and validated process flows so prompt execution followed the right sequence and produced accurate outcomes.",
      "Transformed structured datasets into JSON automation pipelines for AI workflows and integrations.",
    ],
  },
  {
    title: "ML Data Associate",
    organization: "Amazon Development Center",
    location: "Chennai",
    period: "Sep 2024 – Oct 2025",
    points: [
      "Annotated and refined multimodal training data — text, image, audio, and video — to improve NLP models and conversational AI.",
      "Ensured semantic and contextual accuracy for stronger intent detection and language understanding.",
      "Supported AI data pipelines built on JSON-structured datasets, with attention to annotation quality and model training.",
    ],
  },
  {
    title: "Front-End Web Developer Intern",
    organization: "Camino Infotech Solutions",
    location: "Kalamassery",
    period: "May 2023",
    kind: "Internship",
    points: [
      "Developed responsive interfaces with HTML, CSS, and JavaScript from UI/UX wireframes.",
    ],
  },
  {
    title: "iOS App Developer Intern",
    organization: "Consolidated Techware Pvt. Ltd.",
    period: "Apr 2022",
    kind: "Internship",
    points: [
      "Designed and built native iOS applications with Swift and Xcode.",
      "Tested and debugged the apps to keep them stable and performant.",
    ],
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
      "A browser plugin that detects phishing websites by analyzing URLs with a Random Forest classifier.",
    impact: "Reduced false positives and improved real-time threat detection accuracy.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "TOMS",
    subtitle: "Traffic Offence Management System",
    summary:
      "A web platform for tracking and reporting traffic violations. People can upload documents, follow a case, and pay fines.",
    impact:
      "Streamlined case handling, enabled digital record-keeping, and reduced paperwork.",
    technologies: ["PHP", "MySQL", "HTML", "JavaScript", "CSS", "XAMPP Server"],
  },
]

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C", "JavaScript", "PHP"],
  },
  {
    label: "Web",
    items: ["HTML", "CSS"],
  },
  {
    label: "Tools",
    items: ["GitHub", "MySQL", "JSON"],
  },
  {
    label: "Concepts",
    items: ["OOP", "Data structures", "Responsive design"],
  },
  {
    label: "AI & data",
    items: [
      "Data analysis",
      "Prompt engineering",
      "Data annotation",
      "AI / machine learning",
    ],
  },
] as const

export const education = [
  {
    credential: "B.Tech in Computer Science and Engineering",
    school: "Federal Institute of Science and Technology, Kerala",
    period: "2020 – 2024",
    detail: "First Class",
  },
  {
    credential: "Higher Secondary Education (DHSE)",
    school: "St. Joseph's HSS, Karukutty",
    period: "2018 – 2020",
    detail: "91%",
  },
  {
    credential: "Secondary School Certificate (CBSE)",
    school: "Sacred Heart Public School, Mookkannur",
    period: "2017 – 2018",
    detail: "85%",
  },
] as const

export const certifications = [
  { name: "Data Analysis with Python", issuer: "IBM" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Coursera" },
  {
    name: "Build Real World AI Applications with Gemini and Imagen",
    issuer: "Google",
  },
  { name: "Prompt Design in Vertex AI", issuer: "Google" },
  { name: "One Million Prompters", issuer: "Dubai Future Foundation" },
  { name: "Foundations of Prompt Engineering", issuer: "AWS" },
  { name: "Essentials of Prompt Engineering", issuer: "AWS" },
  { name: "Workshop on Ethical Hacking", issuer: "NIT Calicut" },
] as const
