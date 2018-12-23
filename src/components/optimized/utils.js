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

const mod = (number, limit) => (number < 0 ? number + limit : number % limit)

export const getUpdatedField = ({ field, width, height, states }) => field.map((line, x) => line.map((element, y) => {
  const plusOne = mod(element + 1, states)

  if (field[x][mod(y - 1, height)] === plusOne
    || field[x][mod(y + 1, height)] === plusOne
    || field[mod(x - 1, width)][y] === plusOne
    || field[mod(x + 1, width)][y] === plusOne) {
    return plusOne
  }

  return element
}))
