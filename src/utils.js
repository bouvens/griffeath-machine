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
            _.some(NEIGHBOURS, (neighbour) =>
                field[mod(x + neighbour[0], width)][mod(y + neighbour[1], height)] === mod(element + 1, states))
        ) {
            return mod(element + 1, states)
        }

        return element
    })
)

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {object}           The RGB representation
 */
export function hslToRgb (h, s, l) {
    let r
    let g
    let b

    if (s === 0) {
        // achromatic
        r = l
        g = l
        b = l
    } else {
        const hue2rgb = (p, q, initT) => {
            let t = initT

            if (t < 0) {
                t += 1
            }
            if (t > 1) {
                t -= 1
            }
            if (t < 1 / 6) {
                return p + ((q - p) * 6 * t)
            }
            if (t < 1 / 2) {
                return q
            }
            if (t < 2 / 3) {
                return p + ((q - p) * ((2 / 3) - t) * 6)
            }

            return p
        }

        const q = l < 0.5 ? l * (1 + s) : (l + s) - (l * s)
        const p = (2 * l) - q
        r = hue2rgb(p, q, h + (1 / 3))
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - (1 / 3))
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    }
}
