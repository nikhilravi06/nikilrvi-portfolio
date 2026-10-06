import { Experience } from "./components/Experience.tsx"
import { Footer } from "./components/Footer.tsx"
import { Header } from "./components/Header.tsx"
import { Hero } from "./components/Hero.tsx"
import { Projects } from "./components/Projects.tsx"
import { Skills } from "./components/Skills.tsx"

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
