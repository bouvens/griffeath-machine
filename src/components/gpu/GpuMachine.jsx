import React, { PureComponent } from 'react'
import { DEFAULT, IDS, STATUSES } from '../constants'
import style from '../common/GriffeathMachine.css'
import { getRandomField } from '../original/utils'
import CanvasField from './CanvasField'
import ControlBlock from '../common/ControlBlock'

export default class GpuMachine extends PureComponent {
  field = null

  canvas = React.createRef()

  makeGetUpdatedField

  fieldUpdater

  state = {
    ...DEFAULT,
    status: STATUSES.play,
  }

  componentDidMount() {
    this.handleNew()

    import(/* webpackChunkName: "gpu-utils" */ './gpu-utils')
      .then((module) => {
        const { width, height } = this.state

        this.makeGetUpdatedField = module.makeGetUpdatedField
        this.fieldUpdater = this.makeGetUpdatedField(width, height)
        this.nextStep()
      })
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestID)
  }

  updateFieldSize = ({ width = this.state.width, height = this.state.height }) => {
    const { status } = this.state
    this.fieldUpdater = this.makeGetUpdatedField(width, height)
    this.setState({ status: STATUSES.pause }, () => {
      this.handleNew()
      this.setState({ status })
    })
  }

  updateField = () => {
    const { width, height, states } = this.state
    this.field = this.fieldUpdater(this.field, width, height, states)
  }

  nextStep = () => {
    try {
      this.updateField()

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
    this.updateField()
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

    switch (name) {
      case IDS.width:
        this.updateFieldSize({ width: value })
        break
      case IDS.height:
        this.updateFieldSize({ height: value })
        break
      case IDS.states:
        if (value > 255) {
          value = 255
        }
        break
      default:
    }
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
      </>
    )
  }
}
