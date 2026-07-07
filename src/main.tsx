import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Selbst gehostete Schriften (kein Google-CDN, keine IP-Übermittlung an Google).
import '@fontsource-variable/fraunces/index.css' // Fraunces, Gewichtsachse (normal)
import '@fontsource-variable/fraunces/wght-italic.css' // Fraunces kursiv (Hero „besser“)
import '@fontsource-variable/inter/index.css' // Inter, Gewichtsachse
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
