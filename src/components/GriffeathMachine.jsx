import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Connector, Input } from 'state-control'
import { DEFAULT, IDS, STATUSES, SPACE_CODE } from './constants'
import { getRandomField, getUpdatedField } from '../utils'
import CanvasField from './CanvasField'
import style from './GriffeathMachine.css'

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

    componentWillMount () {
        this.randomizeField()
        this.handlePlay()
        document.addEventListener('keydown', this.processKey)
    }

    getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

    field = null

    randomizeField = () => {
        this.field = getRandomField(this.state)
    }

    processKey = (e) => {
        if (e.keyCode === SPACE_CODE) {
            e.preventDefault()
            this.handlePlay()
        }
    }

    nextStep = () => {
        try {
            this.field = getUpdatedField({ ...this.state, field: this.field })
        } catch (e) {
            this.field = getRandomField(this.state)
            this.setState({
                status: STATUSES.pause,
            })
        }
        this.canvas.paint(this.field)

        if (this.state.status === STATUSES.play) {
            requestAnimationFrame(this.nextStep)
        }
    }

    handleNew = () => {
        this.randomizeField()
        this.canvas.paint(this.field)
    }

    handleNext = () => {
        this.field = getUpdatedField({ ...this.state, field: this.field })
        this.canvas.paint(this.field)
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

    selectAll = (control) => control.setSelectionRange(0, control.value.length)

    render () {
        return (
            <div>
                <Connector
                    state={this.state}
                    onChange={this.changeHandler}
                    onFocus={this.selectAll}
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
                        ref={(e) => { this.canvas = e }}
                    />
                </div>
                <p><em>Press Space or click field for play/pause</em></p>
                <button className={style.bigButton} onClick={this.handleNew}>
                    New
                </button>
                <button className={style.bigButton} onClick={this.handlePlay}>
                    {this.getActionName()}
                </button>
                {this.state.status === STATUSES.pause &&
                <button className={style.bigButton} onClick={this.handleNext}>
                    Next step
                </button>
                }
            </div>
        )
    }
}
