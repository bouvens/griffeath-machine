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

function myKernel (field, width, height, states) {
  // what a mess
  const ver = this.thread.x
  const hor = this.thread.y
  const element = field[hor][ver]
  const plusOne = myMod(element + 1, states)

  let next = myMod(hor - 1, width)
  if (field[next][ver] === plusOne) {
    return plusOne
  }

  next = myMod(hor + 1, width)
  if (field[next][ver] === plusOne) {
    return plusOne
  }

  next = myMod(ver - 1, height)
  if (field[hor][next] === plusOne) {
    return plusOne
  }

  next = myMod(ver + 1, height)
  if (field[hor][next] === plusOne) {
    return plusOne
  }

  return element
}

const gpu = new GPU()

export const makeGetUpdatedField = (fieldWidth, fieldHeight) => gpu
  .createKernel(myKernel)
  .setOutput([fieldHeight, fieldWidth]) // more of the mess
  .setFunctions([myMod])
