import React from 'react'
import PropTypes from 'prop-types'
import { getColor } from './utils'

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

  drawPixel = (x, y, h, states) => {
    const index = (x + (y * this.props.width)) * 4
    const { r, g, b } = getColor(h, states)
    const { data } = this.canvasData

    data[index] = r
    data[index + 1] = g
    data[index + 2] = b
  }

  paint = (field = this.props.field) => {
    const { width, height, states } = this.props

    this.canvasData = this.canvasContext.getImageData(0, 0, width, height)

    for (let x = 0; x < width; x += 1) {
      for (let y = 0; y < height; y += 1) {
        if (field[x]) {
          this.drawPixel(x, y, field[x][y], states)
        }
      }
    }

    this.canvasContext.putImageData(this.canvasData, 0, 0)
  }

  refCanvas = (elem) => {
    // on unmount
    if (!elem) {
      return
    }
    this.canvasContext = elem.getContext('2d')
    this.canvasContext.fillStyle = '#000'
    this.canvasContext.fillRect(0, 0, this.props.width, this.props.height)
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
