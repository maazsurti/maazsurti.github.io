import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Reduced motion: follow the OS preference, but let a stored override
// ('on'/'off', set by the dev MotionToggle) win in either direction.
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
const applyReduceMotion = (reduce: boolean) =>
  document.documentElement.classList.toggle('reduce-motion', reduce)
const override = localStorage.getItem('reduce-motion')
applyReduceMotion(override === 'on' ? true : override === 'off' ? false : motionQuery.matches)
motionQuery.addEventListener('change', e => {
  if (!localStorage.getItem('reduce-motion')) applyReduceMotion(e.matches)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
