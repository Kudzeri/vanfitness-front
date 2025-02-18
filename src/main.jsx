import { StrictMode } from 'react'
import './app/globals.css'
import { createRoot } from 'react-dom/client'
import Main from './pages/Main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
