import React from 'react'
import PropTypes from 'prop-types'
import getColor from 'number-to-color'

export default class CanvasField extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    states: PropTypes.number.isRequired,
  }

  canvasContext

  colorsOfField

  paint = (field) => {
    const { width, height, states } = this.props
    const size = width * height

    this.colorsOfField = new Uint32Array(size)

    for (let i = 0; i < size; i += 1) {
      const { r, g, b } = getColor(field[i], states)

      /* eslint-disable-next-line no-bitwise */
      this.colorsOfField[i] = (255 << 24) | (b << 16) | (g << 8) | r
    }

    const canvasData = new ImageData(new Uint8ClampedArray(this.colorsOfField.buffer), width,
      height)
    this.canvasContext.putImageData(canvasData, 0, 0)
  }

  refCanvas = (elem) => {
    this.canvasContext = elem && elem.getContext('2d')
  }

  render () {
    return (
      <canvas
        ref={this.refCanvas}
        width={this.props.width}
        height={this.props.height}
      >
        {'You are using an outdated browser without support of canvas elements.'}
      </canvas>
    )
  }
}
