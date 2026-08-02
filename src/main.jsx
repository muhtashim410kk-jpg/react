import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import App from './App'

import Jsxhandling from './component'
import Counter from './component'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <App />
  </StrictMode>,
)
