import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Parallel from 'parallel1d'
import GriffeathWorker from './machine.worker'
import { DEFAULT, IDS, STATUSES } from '../constants'
import style from '../common/GriffeathMachine.css'
import CanvasField from '../common/CanvasField'
import { getRandomField } from '../common/utils'
import ControlBlock from '../common/ControlBlock'

export default class WebWorkerMachine extends PureComponent {
  field = null

  canvas = React.createRef()

  frameTimes = []

  workers

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
    fps: 0,
  }

  componentDidMount() {
    this.workers = new Parallel(GriffeathWorker, this.updateField,
      { numberOfWorkers: 4, ArrayConstructor: Uint8Array })
    this.updateFieldRandomly()
    this.handleNext()
  }

  componentWillUnmount() {
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
    const { fps, ...state } = this.state
    return (
      <>
        {this.workers
        && (
          <p>
            {this.workers.threads}
            {' workers started'}
          </p>
        )}
        <ControlBlock
          state={state}
          onChange={this.changeHandler}
          onReset={this.makeNewField}
          onPlayPause={this.handlePlay}
          onNextStep={this.handleNext}
        />
        <div
          onClick={this.handlePlay}
          className={style.field}
          role="presentation"
          title="⏯"
        >
          <CanvasField
            width={this.state.width}
            height={this.state.height}
            states={this.state.states}
            shuffle={this.state.shuffle}
            ref={this.canvas}
          />
        </div>
        <div className={style.fps}>
          {this.state.fps}
          {' FPS'}
          <br />
          in the canvas
        </div>
      </>
    )
  }
}
