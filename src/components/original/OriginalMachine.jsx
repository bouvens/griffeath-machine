import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Connector, Input } from 'state-control'
import { DEFAULT, IDS, SPACE_CODE, STATUSES } from '../constants'
import style from '../common/GriffeathMachine.css'
import { getRandomField, getUpdatedField } from './utils'
import CanvasField from './CanvasField'

export default class OriginalMachine extends PureComponent {
  field = null

  canvas = React.createRef()

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    states: PropTypes.number.isRequired,
  }

  static defaultProps = { ...DEFAULT }

  state = {
    width: this.props.width,
    height: this.props.height,
    states: this.props.states,
    status: STATUSES.pause,
  }

  componentDidMount () {
    this.handleNew()
    this.handlePlay()

    document.addEventListener('keydown', this.processKey)
  }

  componentWillUnmount () {
    cancelAnimationFrame(this.requestID)

    document.removeEventListener('keydown', this.processKey)
  }

  getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

  processKey = (e) => {
    if (e.keyCode === SPACE_CODE) {
      e.preventDefault()
      this.handlePlay()
    }
  }

  nextStep = () => {
    try {
      this.field = getUpdatedField({ ...this.state, field: this.field })

      if (this.state.status === STATUSES.play) {
        this.requestID = requestAnimationFrame(this.nextStep)
      }
    } catch (e) {
      cancelAnimationFrame(this.requestID)
      this.field = getRandomField(this.state)
      this.setState({ status: STATUSES.pause })
    }
    this.canvas.current.paint(this.field)
  }

  handleNew = () => {
    this.field = getRandomField(this.state)
    this.canvas.current.paint(this.field)
  }

  handleNext = () => {
    this.field = getUpdatedField({ ...this.state, field: this.field })
    this.canvas.current.paint(this.field)
  }

  handlePlay = () => {
    switch (this.state.status) {
      case STATUSES.play:
        this.setState({ status: STATUSES.pause })
        break
      case STATUSES.pause:
        this.setState({ status: STATUSES.play }, this.nextStep)
        break
      default:
    }
  }

  changeHandler = (name, value) => {
    this.setState({ [name]: value })
  }

  render () {
    return (
      <>
        <Connector
          state={this.state}
          onChange={this.changeHandler}
        >
          <Input
            id={IDS.width}
            label="Field width"
            defaultNum={1}
          />
          <Input
            id={IDS.height}
            label="Field height"
            defaultNum={1}
          />
          <Input
            id={IDS.states}
            label="Number of states"
            defaultNum={1}
          />
        </Connector>
        <div
          onClick={this.handlePlay}
          onKeyDown={this.processKey}
          className={style.field}
          role="presentation"
          title={this.getActionName()}
        >
          <CanvasField
            width={this.state.width}
            height={this.state.height}
            field={this.field}
            states={this.state.states}
            ref={this.canvas}
          />
        </div>
        <p><em>Press Space or click field for play / pause</em></p>
        <button type="button" className={style.bigButton} onClick={this.handleNew}>
          New
        </button>
        <button type="button" className={style.bigButton} onClick={this.handlePlay}>
          {this.getActionName()}
        </button>
        {this.state.status === STATUSES.pause && (
          <button type="button" className={style.bigButton} onClick={this.handleNext}>
            Next step
          </button>
        )}
      </>
    )
  }
}
