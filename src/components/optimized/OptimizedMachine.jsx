import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Check, Connector, Input } from 'state-control'
import { DEFAULT, IDS, KEY_FOR_PAUSE, KEY_FOR_RESET, STATUSES } from '../constants'
import style from '../common/GriffeathMachine.css'
import CanvasField from '../common/CanvasField'
import { getRandomField, getUpdatedField } from '../common/utils'

export default class OptimizedMachine extends PureComponent {
  field = null

  canvas = React.createRef()

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    states: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
  }

  static defaultProps = { ...DEFAULT }

  state = {
    [IDS.width]: this.props.width,
    [IDS.height]: this.props.height,
    [IDS.states]: this.props.states,
    [IDS.shuffle]: this.props.shuffle,
    status: STATUSES.play,
  }

  componentDidMount() {
    this.handleNew()
    this.nextStep()

    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestID)

    document.removeEventListener('keydown', this.handleKeyDown)
  }

  getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

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

  changeHandler = (name, initialValue) => {
    let value = initialValue

    if (name === IDS.states && value > 255) {
      value = 255
    }

    this.setState({ [name]: value })
  }

  render() {
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
          <Check
            id={IDS.shuffle}
            label="Shuffle colors"
          />
        </Connector>
        <div
          onClick={this.handlePlay}
          onKeyDown={this.handleKeyDown}
          className={style.field}
          role="presentation"
          title={this.getActionName()}
        >
          <CanvasField
            width={this.state.width}
            height={this.state.height}
            states={this.state.states}
            shuffle={this.state.shuffle}
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
