import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // TODO: remove strict mode for production
  <StrictMode> 
    <App />
  </StrictMode>,
)
