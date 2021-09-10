import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Connector, Input } from 'state-control'
import Parallel from 'parallel1d'
import GriffeathWorker from './machine.worker'
import { DEFAULT, IDS, SPACE_CODE, STATUSES } from '../constants'
import style from '../common/GriffeathMachine.css'
import CanvasField from '../common/CanvasField'
import { getRandomField } from '../common/utils'

export default class WebWorkerMachine extends PureComponent {
  field = null

  canvas = React.createRef()

  frameTimes = []

  workers

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
    fps: 0,
  }

  componentDidMount() {
    this.workers = new Parallel(GriffeathWorker, this.updateField,
      { handleError: this.handleError, ArrayConstructor: Uint8Array })
    this.updateFieldRandomly()
    this.handlePlay()

    document.addEventListener('keydown', this.processKey)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.processKey)
    this.workers.terminate()
  }

  updateFPS = () => {
    const now = performance.now()
    while (this.frameTimes[0] <= now - 1000 && this.frameTimes.length > 0) {
      this.frameTimes.shift()
    }
    this.frameTimes.push(now)
    // callback should be faster with React 16 and Fiber
    this.setState(() => ({ fps: this.frameTimes.length }))
  }

  updateField = (data) => {
    this.field = data
    this.canvas.current.paint(this.field)

    if (this.state.status === STATUSES.play) {
      this.updateFPS()
      this.handleNext()
    } else {
      this.setState({ fps: 0 })
    }
  }

  handleError = () => {
    this.setState({ status: STATUSES.pause }, this.makeNewField)
  }

  getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

  processKey = (e) => {
    if (e.keyCode === SPACE_CODE) {
      e.preventDefault()
      this.handlePlay()
    }
  }

  updateFieldRandomly = () => {
    this.updateField(getRandomField(this.state))
  }

  makeNewField = () => {
    this.workers.terminate()
    this.updateFieldRandomly()
  }

  handleNext = () => {
    const { width, height, states } = this.state

    this.workers.start({ field: this.field, width, height, states }, this.field.length)
  }

  handlePlay = () => {
    switch (this.state.status) {
      case STATUSES.play:
        this.setState({ status: STATUSES.pause })
        break
      case STATUSES.pause:
        this.setState({ status: STATUSES.play }, this.handleNext)
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
        {this.workers
        && (
          <p>
            {this.workers.threads}
            {' workers started'}
          </p>
        )}
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
        <div className={style.fps}>
          {this.state.fps}
          {' FPS'}
          <br />
          in the canvas
        </div>
        <p><em>Press Space or click field for play / pause</em></p>
        <button type="button" className={style.bigButton} onClick={this.makeNewField}>
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
