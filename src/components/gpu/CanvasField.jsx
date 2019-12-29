import React from 'react'
import PropTypes from 'prop-types'
import getColor from 'number-to-color'

export default class CanvasField extends React.PureComponent {
  canvasContext

  uInt32Array

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    states: PropTypes.number.isRequired,
  }

  drawPixel = (x, y, h, states) => {
    const index = x + (y * this.props.width)
    const { r, g, b } = getColor(h, states)

    /* eslint-disable-next-line no-bitwise */
    this.uInt32Array[index] = (255 << 24) | (b << 16) | (g << 8) | r
  }

  paint = (field) => {
    const { width, height, states } = this.props

    this.uInt32Array = new Uint32Array(width * height)

    for (let x = 0; x < width; x += 1) {
      for (let y = 0; y < height; y += 1) {
        if (field[x]) {
          this.drawPixel(x, y, field[x][y], states)
        }
      }
    }

    const canvasData = new ImageData(new Uint8ClampedArray(this.uInt32Array.buffer), width, height)
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
        You are using an outdated browser without support of canvas elements.
      </canvas>
    )
  }
}
