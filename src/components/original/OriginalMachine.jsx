import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DEFAULT, IDS, KEY_FOR_PAUSE, KEY_FOR_RESET, STATUSES } from '../constants'
import style from '../common/GriffeathMachine.css'
import { getRandomField, getUpdatedField } from './utils'
import CanvasField from './CanvasField'
import ControlBlock from '../common/ControlBlock'

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
    [IDS.width]: this.props.width,
    [IDS.height]: this.props.height,
    [IDS.states]: this.props.states,
    status: STATUSES.pause,
  }

  componentDidMount() {
    this.handleNew()
    this.handlePlay()

    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestID)

    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    switch (event.key) {
      case KEY_FOR_PAUSE:
        event.preventDefault()
        this.handlePlay()
        break
      case KEY_FOR_RESET:
        event.preventDefault()
        this.handleNew()
        break
      default:
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

  render() {
    return (
      <>
        <ControlBlock
          state={this.state}
          onChange={this.changeHandler}
          onReset={this.handleNew}
          onPlayPause={this.handlePlay}
          onNextStep={this.handleNext}
        />
        <div
          onClick={this.handlePlay}
          onKeyDown={this.handleKeyDown}
          className={style.field}
          role="presentation"
          title="⏯"
        >
          <CanvasField
            width={this.state.width}
            height={this.state.height}
            field={this.field}
            states={this.state.states}
            ref={this.canvas}
          />
        </div>
      </>
    )
  }
}
