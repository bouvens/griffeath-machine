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
        this.randomizeField()
        window.document.addEventListener('keydown', this.processKey)
    }

    getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

    randomizeField = () => {
        this.setState({ field: getRandomField(this.state) })
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
            window.requestAnimationFrame(this.nextStep)
        }
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
                            field={this.state.field}
                            width={this.state.width}
                            height={this.state.height}
                            states={this.state.states}
                        />
                    </span>
                </p>
                <button className={style.bigButton} onClick={this.randomizeField}>
                    New
                </button>
                <button className={style.bigButton} onClick={this.nextStep}>
                    Next step
                </button>
                <button className={style.bigButton} onClick={this.handlePlay}>
                    {this.getActionName()}
                </button>
            </div>
        )
    }
}
