import React, { PureComponent } from 'react'
import { Connector, Input } from 'state-control'
import { DEFAULT, IDS, STATUSES } from '../constants'
import { getRandomField, getUpdatedField } from '../utils'
import CanvasField from './CanvasField'
import style from './GriffeathMachine.css'

export default class GriffeathMachine extends PureComponent {
    static defaultProps = { ...DEFAULT }

    state = {
        ...this.props,
        field: [],
        status: STATUSES.pause,
    }

    componentWillMount () {
        this.randomizeField(this.handlePlay)
        document.addEventListener('keydown', this.processKey)
    }

    getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

    randomizeField = (callback) => {
        this.setState({ field: getRandomField(this.state) }, callback)
    }

    processKey = (e) => {
        if (e.keyCode === 32) {
            e.preventDefault()
            this.handlePlay()
        }
    }

    nextStep = () => {
        this.setState({ field: getUpdatedField(this.state) })

        if (this.state.status === STATUSES.play) {
            requestAnimationFrame(this.nextStep)
        }
    }

    handleNew = () => {
        this.randomizeField()
    }

    handleNext = () => {
        this.setState({ field: getUpdatedField(this.state) })
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
                    className="state-control-input"
                    key="connector"
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
                <p>
                    <span
                        onClick={this.handlePlay}
                        onKeyDown={this.processKey}
                        className={style.field}
                        role="presentation"
                        title={this.getActionName()}
                    >
                        <CanvasField
                            width={this.state.width}
                            height={this.state.height}
                            field={this.state.field}
                            states={this.state.states}
                        />
                    </span>
                </p>
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
