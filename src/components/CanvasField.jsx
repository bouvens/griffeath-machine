import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

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
function hslToRgb (h, s, l) {
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

export default class CanvasField extends React.PureComponent {
    static propTypes = {
        field: PropTypes.arrayOf(PropTypes.array).isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        states: PropTypes.number.isRequired,
    }

    componentDidMount () {
        this.paint()
    }

    componentDidUpdate () {
        this.paint()
    }

    canvasContext
    canvasData

    drawPixel = (x, y, h, s, l) => {
        const index = (x + (y * this.props.width)) * 4
        const { r, g, b } = hslToRgb(h, s, l)

        this.canvasData.data[index] = r
        this.canvasData.data[index + 1] = g
        this.canvasData.data[index + 2] = b
        this.canvasData.data[index + 3] = 255
    }

    clear = () => {
        this.canvasContext.clearRect(0, 0, this.props.width, this.props.height)
    }

    paint = () => {
        this.canvasData = this.canvasContext.getImageData(0, 0, this.props.width, this.props.height)

        for (let x = 0; x < this.props.width; x += 1) {
            for (let y = 0; y < this.props.height; y += 1) {
                this.drawPixel(x, y, (_.get(this.props.field, [x, y]) / this.props.states), 1, 0.5)
            }
        }

        this.canvasContext.putImageData(this.canvasData, 0, 0)
    }

    handleRefCanvas = (elem) => {
        this.canvasContext = elem.getContext('2d')
    }

    render () {
        return (
            <canvas
                ref={this.handleRefCanvas}
                width={this.props.width}
                height={this.props.height}
            >
                {'You are using an outdated browser without support of canvas elements.'}
            </canvas>
        )
    }
}
