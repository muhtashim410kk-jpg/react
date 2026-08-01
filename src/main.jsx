import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import App from './App'

import Jsxhandling from './component'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jsxhandling />
    <App />
  </StrictMode>,
)
