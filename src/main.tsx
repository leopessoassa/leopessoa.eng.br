import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser'
import './assets/styles/global.css'
import App from './App.tsx'

// Inicializa o EmailJS uma única vez, no ponto de entrada da aplicação.
// blockHeadless bloqueia bots; limitRate evita spam sem código extra.
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    id: 'contact-form',
    throttle: 10_000, // máximo 1 envio a cada 10s por página
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
