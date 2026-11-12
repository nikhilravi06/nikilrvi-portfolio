import { Nav } from "./components/Nav.tsx"
import { Contact, Experience, Focus, Hero, Projects, Skills } from "./components/Page.tsx"

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Focus />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
