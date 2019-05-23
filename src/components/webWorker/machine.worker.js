import { getUpdatedElement } from '../common/utils'

onmessage = function updatePoints ({ data: { field, width, height, states } }) {
  const result = []
  for (let y = 0; y < height; y += 1) {
    const padding = y * width
    for (let x = 0; x < width; x += 1) {
      const i = x + padding
      result[i] = getUpdatedElement(i, x, y, field, width, height, states)
    }
  }

  postMessage(result)
}
