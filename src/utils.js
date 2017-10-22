import _ from 'lodash'
import { NEIGHBOURS } from './constants'

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

export const getUpdatedField = ({ field, width, height, states }) => _.map(
    field,
    (line, x) => _.map(line, (element, y) => {
        if (
            _(NEIGHBOURS)
                .map((direction) =>
                    field[mod(x + direction[0], width)][mod(y + direction[1], height)])
                .some((neighbour) => neighbour === mod(element + 1, states))
        ) {
            return mod(element + 1, states)
        }

        return element
    })
)
