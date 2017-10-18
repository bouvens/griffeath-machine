import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class CanvasField extends React.PureComponent {
    static propTypes = {
        field: PropTypes.arrayOf(PropTypes.array).isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        states: PropTypes.number.isRequired,
        multiplier: PropTypes.number,
    }

    static defaultProps = {
        multiplier: 1,
    }

    componentDidMount () {
        this.paint()
    }
    componentDidUpdate () {
        this.paint()
    }

    drawPoint = (x, y, color) => {
        if (!this.canvas) {
            return
        }
        const ctx = this.canvas.getContext('2d')
        const { multiplier } = this.props

        ctx.fillStyle = color
        ctx.fillRect(Math.round(x) * multiplier, Math.round(y) * multiplier, multiplier, multiplier)
    }

    clear = () => {
        const ctx = this.canvas.getContext('2d')

        ctx.clearRect(0, 0, this.props.width, this.props.height)
    }

    paint = () => {
        for (let x = 0; x < this.props.width; x += 1) {
            for (let y = 0; y < this.props.height; y += 1) {
                this.drawPoint(x, y, `hsl(${(_.get(this.props.field, [x, y]) / this.props.states) * 360}, 80% ,70%)`)
            }
        }
    }

    canvas = null

    handleRefCanvas = (elem) => {
        this.canvas = elem
    }

    render () {
        return (
            <canvas
                style={{
                    display: 'block',
                    marginBottom: '1.6em',
                }}
                ref={this.handleRefCanvas}
                width={this.props.width * this.props.multiplier}
                height={this.props.height * this.props.multiplier}
            >
                {'You are using an outdated browser without support of canvas elements.'}
            </canvas>
        )
    }
}
