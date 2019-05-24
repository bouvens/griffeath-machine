import { getUpdatedElement } from '../common/utils'

onmessage = function updatePoints ({ data: { field, width, height, states, from, to } }) {
  const result = new Int8Array(to - from)
  for (let i = from; i < to; i += 1) {
    const x = i % width
    // eslint-disable-next-line no-bitwise
    const y = (i / width) | 0
    result[i - from] = getUpdatedElement(i, x, y, field, width, height, states)
  }

  postMessage(result)
}
