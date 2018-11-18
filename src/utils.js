/* eslint-disable prefer-arrow-callback,prefer-destructuring */
import GPU from 'gpu.js'

export function getRandomField ({ width, height, states }) {
  const field = []

  for (let x = 0; x < width; x += 1) {
    field[x] = []
    for (let y = 0; y < height; y += 1) {
      field[x][y] = Math.floor(Math.random() * states)
    }
  }

  return field
}

function myMod (number, limit) {
  return number % limit
}

const gpu = new GPU()
gpu.addFunction(myMod)

export const getUpdatedField = gpu.createKernel(function (field, width, height, states) {
  const x = this.thread.x
  const y = this.thread.y
  const element = field[y][x]
  const plusOne = myMod(element + 1, states)

  let next = myMod(y - 1, height)
  if (field[next][x] === plusOne) {
    return plusOne
  }

  next = myMod(y + 1, height)
  if (field[next][x] === plusOne) {
    return plusOne
  }

  next = myMod(x - 1, width)
  if (field[y][next] === plusOne) {
    return plusOne
  }

  next = myMod(x + 1, width)
  if (field[y][next] === plusOne) {
    return plusOne
  }

  return element
}).setOutput([700, 1000])

export function mapNumToRGB (h) {
  const h2rgb = (initT) => {
    const t = initT < 0 ? initT + 1 : initT % 1

    if (t < 1 / 6) {
      return 6 * t
    }
    if (t < 1 / 2) {
      return 1
    }
    if (t < 2 / 3) {
      return ((2 / 3) - t) * 6
    }

    return 0
  }

  const r = h2rgb(h + (1 / 3))
  const g = h2rgb(h)
  const b = h2rgb(h - (1 / 3))

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

const colorMapping = []
const DEFAULT_COLOR = { r: 0, g: 0, b: 0 }

export function getColor (h, states) {
  if (colorMapping.length !== states) {
    colorMapping.length = states
    for (let i = 0; i < states; i += 1) {
      colorMapping[i] = mapNumToRGB(i / states)
    }
  }
  return colorMapping[h] || DEFAULT_COLOR
}
