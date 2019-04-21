import { getUpdatedElement } from '../common/utils'

function updatePoint (x, y, field, width, height, states) {
  const element = field[x][y]
  return getUpdatedElement(element, x, y, field, width, height, states)
}

onmessage = function ({ data: { field, width, height, states } }) {
  const result = []
  const length = width * height
  for (let i = 0; i < length; i += 1) {
    const x = i % width
    // eslint-disable-next-line no-bitwise
    const y = (i / width) << 0
    if (!result[x]) {
      result[x] = []
    }
    result[x][y] = updatePoint(x, y, field, width, height, states)
  }
  postMessage(result)
}
