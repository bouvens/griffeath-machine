import React from 'react'
import PropTypes from 'prop-types'
import hueToRgb from 'number-to-color/map'

export default class CanvasField extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    states: PropTypes.number.isRequired,
  }

  drawPixel = (x, y, h) => {
    const index = (x + (y * this.props.width)) * 4
    const { r, g, b } = hueToRgb(h)

    this.canvasData.data[index] = r
    this.canvasData.data[index + 1] = g
    this.canvasData.data[index + 2] = b
    this.canvasData.data[index + 3] = 255
  }

  paint = (field) => {
    this.canvasData = this.canvasContext.getImageData(0, 0, this.props.width, this.props.height)

    for (let x = 0; x < this.props.width; x += 1) {
      for (let y = 0; y < this.props.height; y += 1) {
        if (field[x]) {
          this.drawPixel(x, y, field[x][y] / this.props.states)
        }
      }
    }

    this.canvasContext.putImageData(this.canvasData, 0, 0)
  }

  refCanvas = (elem) => {
    this.canvasContext = elem && elem.getContext('2d')
  }

  canvasContext

  canvasData

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
