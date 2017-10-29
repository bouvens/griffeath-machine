import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { hslToRgb } from '../utils'

export default class CanvasField extends React.PureComponent {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        field: PropTypes.arrayOf(PropTypes.array).isRequired,
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
                this.drawPixel(x, y, _.get(this.props.field, [x, y]) / this.props.states, 1, 0.5)
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
