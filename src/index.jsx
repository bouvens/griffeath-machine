import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Stats from './lib/stats'
import './index.css'

const root = createRoot(document.querySelector('#app'))
root.render(<App />)

const stats = new Stats()
document.body.appendChild(stats.dom)
requestAnimationFrame(function loop() {
  stats.update()
  requestAnimationFrame(loop)
})
