import { Hero } from "./components/Hero.tsx"
import { Nav } from "./components/Nav.tsx"
import { About, Contact, Experience, Projects, Skills } from "./components/Sections.tsx"

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
