import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Na build o HTML já vem pronto (scripts/prerender.js) e o React só assume o
// controle. No "npm run dev" a página chega vazia e o React desenha tudo.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
