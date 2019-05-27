export function getRandomField ({ width, height, states }) {
  const size = width * height
  const field = new Uint8Array(size)

  for (let i = 0; i < size; i += 1) {
    field[i] = Math.floor(Math.random() * states)
  }

  return field
}

function mod (number, limit) {
  if (number < 0) {
    return number + limit
  }

  if (number >= limit) {
    return number - limit
  }

  return number
}

export function getUpdatedElement (i, x, y, field, width, height, states) {
  const element = field[i]
  const plusOne = mod(element + 1, states)

  if (field[x + mod(y - 1, height) * width] === plusOne
    || field[x + mod(y + 1, height) * width] === plusOne
    || field[mod(x - 1, width) + y * width] === plusOne
    || field[mod(x + 1, width) + y * width] === plusOne) {
    return plusOne
  }

  return element
}

export const getUpdatedField = ({ field, width, height, states }) => {
  const result = new Uint8Array(width * height)

  for (let y = 0; y < height; y += 1) {
    const padding = y * width
    for (let x = 0; x < width; x += 1) {
      const i = x + padding
      result[i] = getUpdatedElement(i, x, y, field, width, height, states)
    }
  }

  return result
}
