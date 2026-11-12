import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource-variable/geist/index.css"
import "@fontsource-variable/geist-mono/index.css"
import "@fontsource/gochi-hand/400.css"
import App from "./App.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
