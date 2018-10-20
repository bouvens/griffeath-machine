import React from 'react'
import { render } from 'react-dom'

import './index.css'
import GriffeathMachine from './components/GriffeathMachine'

render(<GriffeathMachine />, document.querySelector('#app'))

// eslint-disable-next-line no-undef, comment: it's global
const stats = new Stats()
document.body.appendChild(stats.dom)
requestAnimationFrame(function loop () {
  stats.update()
  requestAnimationFrame(loop)
})
