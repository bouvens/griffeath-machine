import React from 'react'
import { render } from 'react-dom'

import './index.css'
import App from './components/App'

render(<App />, document.querySelector('#app'))

// eslint-disable-next-line no-undef, comment: it's global
const stats = new Stats()
document.body.appendChild(stats.dom)
requestAnimationFrame(function loop () {
  stats.update()
  requestAnimationFrame(loop)
})
