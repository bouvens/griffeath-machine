import React, { Component } from 'react'
import { Connector, Input, SettersBlock } from 'state-control'
import CanvasField from './CanvasField'

const IDS = {
    width: 'width',
    height: 'height',
    multiplier: 'multiplier',
    states: 'states',
    timeout: 'timeout',
    status: 'status',
}

const STATUSES = {
    play: 'play',
    pause: 'pause',
}

const setters = [
    {
        text: 'Default',
        params: {
            [IDS.width]: 100,
            [IDS.height]: 100,
            [IDS.multiplier]: 5,
            [IDS.states]: 12,
            [IDS.timeout]: 100,
            [IDS.status]: STATUSES.pause,
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

export default class Test extends Component {
    static defaultProps = {
        ...setters[0].params,
    }

    state = {
        ...this.props,
        field: [],
    }

    componentWillMount () {
        this.randomizeField()
    }

    randomizeField = () => {
        this.setState({ field: getRandomField(this.state) })
    }

    nextStep () {}

    changeHandler = (name, value) => {
        this.setState({ [name]: value })
    }

    selectAll = (control) => control.setSelectionRange(0, control.value.length)

    handleRefCanvas = (canvas) => {
        this.canvas = canvas
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
                        id={IDS.multiplier}
                        label="Field multiplier"
                        defaultNum={1}
                    />
                    <Input
                        id={IDS.states}
                        label="Number of states"
                        defaultNum={1}
                    />
                    <Input
                        id={IDS.timeout}
                        label="Timeout"
                        defaultNum={1}
                    />
                </Connector>
                <p>
                    <CanvasField
                        ref={this.handleRefCanvas}
                        field={this.state.field}
                        width={this.state.width}
                        height={this.state.height}
                        states={this.state.states}
                        multiplier={this.state.multiplier}
                    />
                </p>
                <button onClick={this.randomizeField}>New</button> <button onClick={this.nextStep}>Next step</button>
            </div>
        )
    }
}
