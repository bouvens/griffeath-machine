import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Stats from './lib/stats'
import './index.css'

render(<App />, document.querySelector('#app'))

const stats = new Stats()
document.body.appendChild(stats.dom)
requestAnimationFrame(function loop() {
  stats.update()
  requestAnimationFrame(loop)
})
