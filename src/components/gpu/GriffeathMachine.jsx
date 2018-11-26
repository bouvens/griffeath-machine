import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Connector, Input } from 'state-control'
import { DEFAULT, IDS, SPACE_CODE, STATUSES } from '../constants'
import style from '../common/GriffeathMachine.css'
import { getRandomField } from './utils'
import { makeGetUpdatedField } from './gpu-utils'
import CanvasField from './CanvasField'

export default class GriffeathMachine extends PureComponent {
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

  field = null

  canvas = React.createRef()

  componentWillMount () {
    this.randomizeField()
    this.handlePlay()
    document.addEventListener('keydown', this.processKey)
    this.updateFieldSize({})
  }

  componentWillUnmount () {
    cancelAnimationFrame(this.requestID)
  }

  getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

  randomizeField = () => {
    this.field = getRandomField(this.state)
  }

  processKey = (e) => {
    if (e.keyCode === SPACE_CODE) {
      e.preventDefault()
      this.handlePlay()
    }
  }

  updateFieldSize = ({ width = this.props.width, height = this.props.height }) => {
    this.fieldUpdater = makeGetUpdatedField(width, height)
  }

  getUpdatedField = () => {
    const { width, height, states } = this.state
    return this.fieldUpdater(this.field, width, height, states)
  }

  nextStep = () => {
    try {
      this.field = this.getUpdatedField()

      if (this.state.status === STATUSES.play) {
        this.requestID = requestAnimationFrame(this.nextStep)
      }
    } catch (e) {
      cancelAnimationFrame(this.requestID)
      this.field = getRandomField(this.state)
      this.setState({
        status: STATUSES.pause,
      })
    }
    this.canvas.current.paint(this.field)
  }

  handleNew = () => {
    this.randomizeField()
    this.canvas.current.paint(this.field)
  }

  handleNext = () => {
    this.field = this.getUpdatedField()
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
    switch (name) {
      case IDS.width:
        this.updateFieldSize({ width: value })
        break
      case IDS.height:
        this.updateFieldSize({ height: value })
        break
      default:
    }
    this.setState({ [name]: value })
  }

  fieldUpdater

  render () {
    return (
      <div>
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
      </div>
    )
  }
}