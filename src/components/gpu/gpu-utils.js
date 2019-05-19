import GPU from 'gpu.js'

function myMod (number, limit) {
  if (number < 0) {
    return number + limit
  }

  if (number >= limit) {
    return number - limit
  }

  return number
}

function updateElement (field, width, height, states) {
  const i = this.thread.x
  const element = field[i]
  const hor = i % width
  // eslint-disable-next-line no-undef
  const ver = trunc(i / width)
  const plusOne = myMod(element + 1, states)

  let next = myMod(hor - 1, width)
  if (field[next + ver * width] === plusOne) {
    return plusOne
  }

  next = myMod(hor + 1, width)
  if (field[next + ver * width] === plusOne) {
    return plusOne
  }

  next = myMod(ver - 1, height)
  if (field[hor + next * width] === plusOne) {
    return plusOne
  }

  next = myMod(ver + 1, height)
  if (field[hor + next * width] === plusOne) {
    return plusOne
  }

  return element
}

const gpu = new GPU()

export const makeGetUpdatedField = (size) => gpu
  .createKernel(updateElement)
  .setOutput([size])
  .setFunctions([myMod])
