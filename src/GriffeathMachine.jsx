import React, { Component } from 'react'
import { Connector, Input, SettersBlock } from 'state-control'
import _ from 'lodash'
import CanvasField from './CanvasField'
import style from './GriffeathMachine.css'

const NEIGHBOURS = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
]

const IDS = {
    width: 'width',
    height: 'height',
    states: 'states',
    status: 'status',
}

const STATUSES = {
    play: 'Play',
    pause: 'Pause',
}

const setters = [
    {
        text: 'Default',
        params: {
            [IDS.width]: 300,
            [IDS.height]: 300,
            [IDS.states]: 16,
        },
    },
]

function getRandomField ({ width, height, states }) {
    const field = []

    for (let x = 0; x < width; x += 1) {
        field[x] = []
        for (let y = 0; y < height; y += 1) {
            field[x][y] = Math.floor(Math.random() * states)
        }
    }

    return field
}

function mod (number, limit) {
    return number < 0 ? number + limit : number % limit
}

export default class Test extends Component {
    static defaultProps = {
        ...setters[0].params,
    }

    state = {
        ...this.props,
        field: [],
        status: STATUSES.pause,
    }

    componentWillMount () {
        this.randomizeField()
        window.document.addEventListener('keydown', this.process)
    }

    getUpdatedField = ({ field, width, height, states }) => _.map(
        field,
        (line, x) => _.map(line, (element, y) => {
            if (
                _.some(
                    _.map(NEIGHBOURS, (direction) =>
                        field[mod(x + direction[0], width)][mod(y + direction[1], height)]),
                    (neighbour) => neighbour === mod(element + 1, states)
                )
            ) {
                return mod(element + 1, states)
            }

            return element
        })
    )

    getActionName = () => (this.state.status === STATUSES.play ? STATUSES.pause : STATUSES.play)

    randomizeField = () => {
        this.setState({ field: getRandomField(this.state) })
    }

    process = (e) => {
        if (e.keyCode === 32) {
            e.preventDefault()
            this.nextStep()
        }
    }

    nextStep = () => {
        this.setState({ field: this.getUpdatedField(this.state) })

        if (this.state.status === STATUSES.play) {
            window.requestAnimationFrame(this.nextStep)
        }
    }

    changeHandler = (name, value) => {
        this.setState({ [name]: value })
    }

    selectAll = (control) => control.setSelectionRange(0, control.value.length)

    handleRefCanvas = (canvas) => {
        this.canvas = canvas
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

    render () {
        return (
            <div>
                <SettersBlock
                    setters={setters}
                    setHandler={this.changeHandler}
                    key="setters"
                />
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
                        className={style.field}
                        role="presentation"
                        title={this.getActionName()}
                    >
                        <CanvasField
                            ref={this.handleRefCanvas}
                            field={this.state.field}
                            width={this.state.width}
                            height={this.state.height}
                            states={this.state.states}
                        />
                    </span>
                </p>
                <button className={style.bigButton} onClick={this.randomizeField}>New</button>
                <button className={style.bigButton} onClick={this.nextStep}>Next step</button>
                <button className={style.bigButton} onClick={this.handlePlay}>{this.getActionName()}</button>
            </div>
        )
    }
}
