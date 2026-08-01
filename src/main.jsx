import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import App from './App'
import Profile, { Setting } from './component'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Setting />
    <Profile />
    <App />
  </StrictMode>,
)
