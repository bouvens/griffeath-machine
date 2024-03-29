import React, { PureComponent } from 'react'
import { DEFAULT, STATUSES } from '../constants'
import { getRandomField, getUpdatedField } from './utils'
import CanvasField from './CanvasField'
import ControlBlock from '../common/ControlBlock'
import style from '../common/GriffeathMachine.css'

export default class OriginalMachine extends PureComponent {
  field = null

  canvas = React.createRef()

  state = {
    ...DEFAULT,
    status: STATUSES.play,
  }

  componentDidMount() {
    this.handleNew()
    this.nextStep()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestID)
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
