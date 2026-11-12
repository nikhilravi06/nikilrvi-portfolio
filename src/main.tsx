import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "@fontsource-variable/archivo/wdth.css"
import "@fontsource-variable/dm-sans/index.css"
import "@fontsource/silkscreen/400.css"
import "@fontsource/silkscreen/700.css"
import "@fontsource/gochi-hand/400.css"
import "@fontsource/jetbrains-mono/400.css"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
